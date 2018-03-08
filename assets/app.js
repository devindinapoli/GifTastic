$(document).ready(function(){

    var initialButtons = ["Rick and Morty", "The Simpsons", "The IT Crowd", "Black Mirror"];

    function displayButtons(){

        $("#button-display").empty();

        for(i = 0; i < initialButtons.length; i++){
            var newButton = $("<button>");
            newButton.attr("class", "btn btn-dark");
            newButton.attr("id", "input");
            newButton.attr("data-name", initialButtons[i]);
            newButton.text(initialButtons[i]);
            $("#button-display").append(newButton);           
        };
    };

    

    function showGifs(){
       $ ("#display-gifs").empty();
       var searchQuery = $(this).attr("data-name");
       var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=IVQQNCCTzubcYVQLjKR29Pc3ed1j7k22&q=" + 
       searchQuery + "&limit=10&lang=en";

       $.ajax({
           url: queryURL,
           method: "GET"
       }).then(function(response){

            for(j = 0; j < 10; j++){
                var displayDiv = $("<div>");
                displayDiv.addClass("float-div");

                var gif = $("<img>");
                gif.attr("src", response.data[j].images.original_still.url);
                gif.attr("data-still", response.data[j].images.original_still.url);
                gif.attr("data-animate", response.data[j].images.original.url);
                gif.attr("data-state", "still");
                gif.attr("class", "gif");
                displayDiv.append(gif);

                var rating = response.data[j].rating;
                var p = $("<p>").text("Rating: " + rating);
                displayDiv.append(p);

                $("#display-gifs").append(displayDiv);
            }
       });
    }
    
    $("#submitShow").on("click", function(){
        
        var input = $("#show-input").val().trim();
        initialButtons.push(input);

        displayButtons();

        return false;
    })


    function changeState(){
        var state = $(this).attr("data-state");
        var stillState = $(this).attr("data-still");
        var animateState = $(this).attr("data-animate");

        if(state === "still"){
            $(this).attr("src", animateState);
            $(this).attr("data-state", "animate");
        }
        else{
            $(this).attr("src", stillState);
            $(this).attr("data-state", "still");
        }
    }

    displayButtons();


    $(document).on("click", "#input", showGifs);
    $(document).on("click", ".gif", changeState);
});
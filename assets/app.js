$(document).ready(function(){

    var initialButtons = ["Rick & Morty", "The Simpsons", "Shameless", "Black Mirror"];

    function displayButtons(){

        for(i = 0; i < initialButtons.length; i++){
            var newButton = $("<button>");
            newButton.attr("class", "btn btn-dark");
            newButton.attr("id", "input");
            newButton.attr("data-name", initialButtons[i]);
            newButton.text(initialButtons[i]);
            $("#button-display").append(newButton);           
        };
    };

    displayButtons();

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
                displayDiv.addClass("holder");

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

    




    
});
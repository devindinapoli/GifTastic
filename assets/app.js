$(document).ready(function(){

    var initialButtons = ["Rick & Morty", "The Simpsons", "Shameless", "Black Mirror"];

    function displayButtons(){
        $("#display-gifs").empty();

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







    
});
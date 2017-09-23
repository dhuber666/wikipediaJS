/* global variables */


/* document ready */

$(document).ready(function() {


    //TODO: When I click the SearchBtn the .search div should scroll on top of the page
    $("#searchBtn").on("click", function(){
        $(".container").animate({
            "position" : "initial"

        }, 1000);
    });



});


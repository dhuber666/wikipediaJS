/* global variables */

var searchInput = "";

/* document ready */

$(document).ready(function() {

    //TODO: When I click the SearchBtn the .search div should scroll on top of the page
    $("#searchBtn").on("click", function(){  // select the search button
        $(".container").animate({ // select the .container
            "top" : "0" //set it's position to initial

        }, 600, callback); // with 1 second transition
        searchInput = $("#wikiSearch")[0].value;
        
        console.log(searchInput);
    });
});

function processResult(apiResult){
    for (var i = 0; i < apiResult.query.search.length; i++){
         $('#display-result').append('<p>'+apiResult.query.search[i].title+'</p>');
    }
 }

function callback(){ // gets called when sliding up the div is completed
    $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        data: { action: 'query', list: 'search', srsearch: $("input[name=search]").val(), format: 'json' },
        dataType: 'jsonp',
        success: processResult
    });
}

function search(ele) {
    if(event.keyCode == 13) {
        searchInput = ele.value; 
    }
    console.log(searchInput);
}

// Now  I have the search input saved into a variable. I can now make the api call
/* global variables */

var searchInput = "";

/* document ready */

$(document).ready(function() {

    //TODO: When I click the SearchBtn the .search div should scroll on top of the page
    $("#searchBtn").on("click", function(){  // select the search button
        $(".container").animate({ // select the .container
            "top" : "-200px" //set it's position to initial

        }, 300, callback); // with 1 second transition
        searchInput = $("#wikiSearch")[0].value;
        
        console.log(searchInput);
    });
});

function processResult(apiResult){
    console.log(apiResult);
    for (var i = 0; i < apiResult.query.search.length; i++){
         $('#display-result').append('<div class="' + i + '">' + '<p>'+apiResult.query.search[i].title+'</p>'  + '<p>'+ apiResult.query.search[i].snippet +'</p>' +  '</div>');
    }
 }

function callback(){ // gets called when sliding up the div is completed
    
    $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        //TODO: Fix this line of code (extracts)
        data: { action: 'query', list: 'search', prop: 'extracts', exintro: true, srsearch: $("input[name=search]").val(), format: 'json' },
        dataType: 'jsonp',
        success: processResult
    });
    $(".container").remove();
}

function search(ele) {
    if(event.keyCode == 13) {
        $(".container").animate({ // select the .container
            "top" : "0" //set it's position to initial

        }, 300, callback); 
        searchInput = ele.value; 
    }
    console.log(searchInput);
}

// Now  I have the search input saved into a variable. I can now make the api call
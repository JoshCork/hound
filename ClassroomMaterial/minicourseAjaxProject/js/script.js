
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    // The code commented out below will pull out the city and street 
    // text and create a url using my key.

    var myCityText = NULL
    var myStreetText = NULL
    var myUrl = "https://maps.googleapis.com/maps/api/streetview?size=400x400&location="
    var myKey = "AIzaSyCo7SZK2iqRwqZACNN9kP8ssQbpUhKQvXM"

    myStreetText = $("#street").val()
    myCityText = $("#city").val()

    myUrl = myUrl + myStreetText + myCityText + "&key=" + myKey

    $body.append('<img class="bgimg" src="'+ myUrl + '">');

    return false;
};

$('#form-container').submit(loadData);

// loadData();

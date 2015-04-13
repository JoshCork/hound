var clicks = 0;
var imageText;
var imgArray = [];

function clickWatch() {
    $('#images').click(function(e) {
        clicks++;
        imageText = "I have been clicked " + clicks + " times!";
        $(this).text(imageText);
        //the element has been clicked... do stuff here
    });
}




// modified based on reading through this stackoverflow article: http://bit.ly/1PzGc0b
function IsValidImageUrl(url) {

    var arr = ["jpeg", "jpg", "gif", "png"];
    var ext = url.substring(url.lastIndexOf(".") + 1);
    var isValid;

    if ($.inArray(ext, arr) > 0) {
        isValid = true;
    } else {
        isValid = false;
    }

    return isValid;

}

// pulled from: http://bit.ly/1CFUQZF
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


function getRedditPictures() {

    $.ajax({
        // async: false,
        url: "http://www.reddit.com/r/catpictures/.json?jsonp=?&show=all&limit=300",
        dataType: "json",
        success: function(jsonData) {
            redditData = jsonData;
            var arr = ["jpeg", "jpg", "gif", "png"];

            $.each(jsonData.data.children, function(i, item) {
                var url = item.data.url;
                var title = item.data.title;
                var permalink = "http://reddit.com/" + item.data.permalink;

                if (IsValidImageUrl(url)) {
                    imgArray.push({
                        "url" : url,
                        "title" : title,
                        "permalink" : permalink
                    });
                } else {
                    // do nothing.
                }

            });

            imgArray = shuffle(imgArray);
            // $('<img/>').attr('src', imgArray[0]).width(500).appendTo('#images');
            // $('<img/>').attr('src', imgArray[1]).width(500).appendTo('#images');

            $("<div class='col-md-4'><h2>" + imgArray[0].title + "</h2><div id='images'><img class='kittenPic' width='300px' src=" + imgArray[0].url + "/><p id='imageText'></p></div></div>").appendTo('.kittenRow').on("click",clickWatch());
            $("<div class='col-md-4'><h2>" + imgArray[1].title + "</h2><div id='images'><img class='kittenPic' width='300px' src=" + imgArray[1].url + "/><p id='imageText'></p></div></div>").appendTo('.kittenRow').on("click",clickWatch());

            // clickWatch();

        },
        error: function(e) {
            console.log("oh snap! error: " + e);
        },


    });
}


getRedditPictures();


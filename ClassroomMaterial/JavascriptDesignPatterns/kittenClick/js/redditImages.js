var imgArray = [];
var urlArray = [];


function IsValidImageUrl(url) {

    // modified based on reading through this stackoverflow article: http://bit.ly/1PzGc0b
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
  var currentIndex = array.length, temporaryValue, randomIndex ;

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





function loadData() {

    $.ajax({
        // async: false,
        url: "http://www.reddit.com/r/catpictures/.json?jsonp=?&show=all&limit=50",
        dataType: "json",
        success: function(jsonData) {
            redditData = jsonData;
            var arr = ["jpeg", "jpg", "gif", "png"];

            $.each(jsonData.data.children, function(i, item) {
                var url = item.data.url;

                if (IsValidImageUrl(url)) {
                    imgArray.push(url);
                    // only if you want to put all the images on the screen.
                    // $('<img/>').attr('src', url).width(500).appendTo('#images');
                } else {
                    // do nothing.
                }

            });

            imgArray = shuffle(imgArray);
            $('<img/>').attr('src', imgArray[0]).width(500).appendTo('#images');
            $('<img/>').attr('src', imgArray[1]).width(500).appendTo('#images');



        },
        error: function() {
            console.log("oh snap!");
        },
        // complete: function() {
        //     console.log("urlArray Length: " + urlArray.length);
        //     console.log("urlData is: " + urlArray);
        //     console.log("imgArray: " + imgArray);

        // },

    });
}


loadData();

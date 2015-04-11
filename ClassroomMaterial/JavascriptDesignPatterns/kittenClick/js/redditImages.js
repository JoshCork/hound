var imgArray = [];
var urlArray = [];
var redditData;



function parseUrls() {
    $.each(urlArray, function(i, item) {
        IsValidImageUrl(item, function(url, isvalid) {
            if (isvalid) {
                imgArray.push(item);
                // $('<img/>').attr('src', item[i])
                //     // .width(500)
                //     .appendTo('#images');
            }
        });
    });
}


function IsValidImageUrl(url, callback) {
    var img = new Image();
    img.onerror = function() {
        callback(url, false);
    };
    img.onload = function() {
        callback(url, true);
    };
    img.src = url;
}

console.log("urlArray: " + urlArray);

// $.ajax({
//     async: false,
//     url: "http://www.reddit.com/r/catpictures/.json?jsonp=?&show=all&limit=50",
//     dataType: "json",
//     success: function(jsonData) {
//         redditData = jsonData;

//         $.each(jsonData.data.children, function(i, item) {
//             urlArray.push(item.data.url);
//         });

//         //     $.each(urlArray, function(i, item) {
//         //     IsValidImageUrl(item, function(url, isvalid) {
//         //         if (isvalid) {
//         //             imgArray.push(item);
//         //             // $('<img/>').attr('src', item[i])
//         //             //     // .width(500)
//         //             //     .appendTo('#images');
//         //         }
//         //     });
//         // });


//     },
//     error: function() {
//         console.log("oh snap!");
//     },
//     complete: function() {
//         console.log("urlArray Length: " + urlArray.length);
//         console.log("urlData is: " + urlArray);
//         console.log("1st redditData is: " + redditData);
//         console.log("imgArray: " + imgArray);

//     },

// });

function loadData() {
    $.getJSON('http://www.reddit.com/r/catpictures/.json?jsonp=?&show=all&limit=50', function(data) {
        $.each(data.data.children, function(i, item) {
            urlArray.push(item.data.url);
            console.log("I have pushed a URL");
        });
        console.log("i have updated the Array");
    });


    console.log("i'm after the $each and urlArray should be populated now");
    console.log("urlArray: " + urlArray);
}


loadData();






// ------------------------------------

// function(url, isvalid) {
//             if (isvalid) {
//                 imgArray.push(item.data.url);
//                 $('<img/>').attr('src', item.data.url)
//                     .width(500)
//                     .appendTo('#images');
//             }


// .done(function(){console.log("done done done");})


var imgArray = [];
var urlArray = [];

// $.getJSON('http://www.reddit.com/r/catpictures/.json?jsonp=?&show=all&limit=50', function(data) {
//     console.log(data.data.children);
//     $.each(data.data.children, function(i,item){
//         urlArray.push(item.data.url);
//     });
// }).done(console.log("done done done"));

console.log("urlArray: " + urlArray);

$.ajax({
    url: "http://www.reddit.com/r/catpictures/.json?jsonp=?&show=all&limit=50",
    dataType: "json",
    success: function(jsonData){
        $.each(jsonData.data.children, function(i,item){
            urlArray.push(item.data.url);
        });
    },
    error: function(){console.log("oh snap!");},
    complete: function(){console.log("urlArray: " + urlArray);},

});






// $.getJSON('http://www.reddit.com/r/catpictures/.json?jsonp=?&show=all&limit=50', function(data) {
//     $.each(data.data.children, function(i, item) {
//         IsValidImageUrl(item.data.url, function(url, isvalid) {
//             if (isvalid) {
//                 imgArray.push(item.data.url);
//                 $('<img/>').attr('src', item.data.url)
//                     // .width(500)
//                     .appendTo('#images');
//             }
//         });
//     });
// });

// console.log("test");
// console.log("imageArray: " + imgArray);
// //console.log(imgArray);


// function IsValidImageUrl(url, callback) {
//     var img = new Image();
//     img.onerror = function() {
//         callback(url, false);
//     };
//     img.onload = function() {
//         callback(url, true);
//     };
//     img.src = url;
// }

// ------------------------------------

// function(url, isvalid) {
//             if (isvalid) {
//                 imgArray.push(item.data.url);
//                 $('<img/>').attr('src', item.data.url)
//                     .width(500)
//                     .appendTo('#images');
//             }


// .done(function(){console.log("done done done");})
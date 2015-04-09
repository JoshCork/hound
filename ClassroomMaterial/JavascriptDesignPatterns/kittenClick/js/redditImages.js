var imgArray = []

$.getJSON('http://www.reddit.com/r/catpictures/.json?jsonp=?&show=all&limit=300', function(data) {
    $.each(data.data.children, function(i, item) {
        IsValidImageUrl(item.data.url, function(url, isvalid) {
            if (isvalid) {
                imgArray.push(item.data.url);
                $('<img/>').attr('src', item.data.url)
                    .width(500)
                    .appendTo('#images');
            }            
        });
    });
});

console.log("test");
//console.log(imgArray);


function IsValidImageUrl(url, callback) {
    var img = new Image();
    img.onerror = function() {
        callback(url, false);
    };
    img.onload = function() {
        callback(url, true);
    };
    img.src = url;
    console.log("I am img.src: " + img.src);
}



function(url, isvalid) {
            if (isvalid) {
                imgArray.push(item.data.url);
                $('<img/>').attr('src', item.data.url)
                    .width(500)
                    .appendTo('#images');
            }            
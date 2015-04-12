var imgArray = [];
var urlArray = [];
var callbackCounter = 0;



function parseUrls() {
    $.each(urlArray, function(i, item) {
        IsValidImageUrl(item, function(url, isvalid) {
            callbackCounter++;
            // console.log(callbackCounter);
            if (callbackCounter >= urlArray.length) {
                console.log("imgArray has completed. Length:" + imgArray.length);
                console.log(imgArray);
            }
            if (isvalid) {
                imgArray.push(item);
                $('<img/>').attr('src', item)
                    .width(500)
                    .appendTo('#images');
            }
        });
    });
}


function IsValidImageUrl(url, callback) {


            var arr = ["jpeg", "jpg", "gif", "png"];
            var ext = url.substring(url.lastIndexOf(".") + 1);

            if ($.inArray(ext, arr) > 0) {
                    callback(url, true);
                } else {
                    callback(url, false);
                }



            // var img = new Image();
            // img.onerror = function() {
            //     callback(url, false);
            // };
            // img.onload = function() {
            //     callback(url, true);
            // };
            // img.src = url;

        }

        console.log("urlArray: " + urlArray);



        function loadData() {

            $.ajax({
                // async: false,
                url: "http://www.reddit.com/r/catpictures/.json?jsonp=?&show=all&limit=50",
                dataType: "json",
                success: function(jsonData) {
                    redditData = jsonData;

                    $.each(jsonData.data.children, function(i, item) {
                        urlArray.push(item.data.url);
                    });

                    // console.log("the each loop has completed");
                    parseUrls();
                    // console.log("parse URL's has been called");


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


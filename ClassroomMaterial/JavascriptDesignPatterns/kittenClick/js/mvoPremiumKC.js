$(function() {
    var model = {
        init: function() {
            if (!localStorage.kittens) {
                localStorage.kittens = JSON.stringify([]);
            }
            // model.getKittens();
        },
        add: function(obj){
        	var data = JSON.parse(localStorage.kittens);        	
        	data.push(obj);
        	localStorage.kittens = JSON.stringify(data);        	
        },
    };

    var octopus = {
        clickWatch: function(id, index) {
            $("#" + id + "-thumb").click(function(e) {
                console.log(id);
                console.log("this is: ");
                console.log(this);

                var imageText;
                var replacementHTML = "<div id='kittenPic'><img id='kittenPic' width='600px' src=" + imgArray[index].url + "></div>";

                imgArray[index].clicks++;
                imageText = "I have been clicked " + imgArray[index].clicks + " times!";
                $("#imageText").text(imageText);
                $("#titleText").text(imgArray[index].title);
                $("#kittenPic").replaceWith(replacementHTML);
                //the element has been clicked... do stuff here
            });
        },
        // pulled from: http://bit.ly/1CFUQZF
        shuffle: function(array) {
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
        },
        // modified based on reading through this stackoverflow article: http://bit.ly/1PzGc0b
        IsValidImageUrl: function(url) {

            var arr = ["jpeg", "jpg", "gif", "png"];
            var ext = url.substring(url.lastIndexOf(".") + 1);
            var isValid;

            if ($.inArray(ext, arr) > 0) {
                isValid = true;
            } else {
                isValid = false;
            }

            return isValid;

        },
        getKittens: function() {
            var redditURL = "http://www.reddit.com/r/catpictures/.json?jsonp=?&show=all&limit=300";

            function getRedditPictures() {
            	
                $.ajax({
                    // async: false,
                    url: redditURL,
                    dataType: "json",
                    success: function(jsonData) {
                        redditData = jsonData;
                        var arr = ["jpeg", "jpg", "gif", "png"];

                        $.each(jsonData.data.children, function(i, item) {
                            var url = item.data.url;
                            var title = item.data.title;
                            var id = item.data.id;
                            var permalink = "http://reddit.com/" + item.data.permalink;
                            var thumbnail = item.data.thumbnail;

                            if (octopus.IsValidImageUrl(url)) {
                                model.add({
                                    "url": url,
                                    "title": title,
                                    "permalink": permalink,
                                    "id": id,
                                    "clicks": 0,
                                    "thumbnail": thumbnail,
                                });
                            } else {
                                // do nothing.
                            }

                        });

                    },
                    error: function(e) {
                        console.log("oh snap! error: " + e);
                    },


                });
            }
            getRedditPictures();

        },
        init: function() {
            model.init();
            octopus.getKittens();
            localStorage.kittens = octopus.shuffle(localStorage.kittens);
            navView.init();
            jumboView.init();
        },
    };

    var jumboView = {
        init: function() {
            var clickText = $("#imageText");
            var titleText = $("#titleText");
            var kittenPic = $("#kittenPic");
            jumboView.render();
        },
        render: function() {

        },
    };

    var navView = {
        init: function() {
            this.listGroup = $(".list-group");
            navView.render();
        },
        render: function() {
            var insertHTML
            var nbrImages = 10

            for (var i = 0; i < nbrImages; i++) {
                var obj = localStorage.kittens[i];
                insertHTML = "<div class='col-sm-6' id=" + obj.id + "-thumb" + "><img class='kittenThumb' width='80px' src=" + obj.thumbnail + "></div>";
                $(insertHTML).appendTo(this.listGroup).on("click", octopus.clickWatch(obj.id, i));

            }
        },
    }

    octopus.init();
})

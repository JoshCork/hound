
// myNYT key: 3cc303338d57062cab3b82000286ca48:2:71622028 - article search
// myNYT geo Key: d9d00c130383e3546b7c1df6f3b715c1:11:71622028
 

function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    $greeting.text('So, you want to live at ' + address + '?');


    // load streetview
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');


    // load nytimes
    
    //"http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3cc303338d57062cab3b82000286ca48:2:71622028&fq=glocation:('Arizona')
    ////http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=glocation%3A%28%27Arizona%27%29&api-key=3cc303338d57062cab3b82000286ca48%253A2%253A71622028
    
    $.getJSON("http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=glocations:(" + cityStr + ")&api-key=3cc303338d57062cab3b82000286ca48%3A2%3A71622028",function ( data ) {
        var items = [];
        //$.each( data.response.docs,function(key,val) { items.push("li id='" + key + "'>" + val + "</li>" );});
        // $.each(data.response.docs, function(key,val) { 
        //     items.push(key + val); 
        // });

        $.each(data.response.docs,function(key,val) {   
                items.push("<li id='" + key + "'><a href='" + this.web_url + "' target='_blank'>" + this.headline.main + "</a></li>");                
         });

        console.log(items);       

        $("<ul/>", {
            "class" : "article-list",
            "id" : "nyt-articles",
            html: items.join( "" )
        }).appendTo( "body" );

    });



    return false;
};

$('#form-container').submit(loadData);

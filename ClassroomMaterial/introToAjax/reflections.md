# Intro to AJAX

# Lesson 1

## 3/21/2015
#### Building the Move Planner App --> NYT Implementation
Interesting approach by the instructor that differed from my own.  He created an articles variable and assigned the array from the NYT response to that array.  Something like: `var articles = data.response.docs`.  Instead I just iterated through the response and pushed the html (along with the key, url, and headline) into an items array:

    $.each(data.response.docs,function(key,val) {   
                items.push(
                    "<li id='" + key + "'><a href='" + this.web_url + "' target='_blank'>" + this.headline.main + "</a>" + "<p>" + this.snippet + "</p>" + "</li>");                
         });


## 2/24/2015

#### Requests with Ajax
*Instructor Notes*

Learn how to collect `<input>` values with jQuery [here](http://api.jquery.com/val/).
Interested in diving into the Google Street View API? Check out its [documentation](https://developers.google.com/maps/documentation/streetview/)

*Instructor Notes*
[jQuery's .ajax() method](http://api.jquery.com/jquery.ajax/)
[jQuery's .getJSON() method](http://api.jquery.com/jquery.getjson/)

#### Fun With APIs
[Google's APIs](https://developers.google.com/apis-explorer/)
All the Google services you can imagine.

[Giant database of APIs](http://www.programmableweb.com/apis/directory)

This is definitely worth skimming for some inspiration.

Also, did you know that [Udacity](https://www.udacity.com/catalog-api) has an API? It's available for anyone to use. We want to make it easy for developers to access and share our catalog of courses.

## 2/14/2015

#### AJAX Necessaties

Instructor Notes

[jQuery's AJAX Documentation](http://api.jquery.com/jquery.ajax/)

Read carefully to figure out what AJAX requests require.

####  Async vs Synchronous Reqs Quiz - Instructor Notes

Here's some help:

- Scrolling down in the Newsfeed: when you scroll down, new stories are automatically loaded.
- Loading the homepage when not signed in: open Facebook in Incognito Mode to see what I mean.
- Posting a message on a friend's Timeline: Does the page reload when you post? How does the page change after you hit "Post"?
- Clicking through a friend's pictures: Does the page ever need to refresh when you are scrolling through a friend's pictures?

Before we start diving into asynchronous requests, let's consider some real-world scenarios that might require one.

Remember, an asynchronous request can be fired off at any time (before or after a page has loaded) and the response to an asynchronous request often includes HTML that can be dynamically inserted into a page.

[Facebook](https://www.facebook.com/) uses a lot of asynchronous requests so that the page almost never needs to refresh for users to see new content.

Take a moment to consider when Facebook might take advantage of asynchronous requests to load new content without refreshing the page. Think about user actions that might lead to asynchronous requests. For instance, when a user scrolls down in a business' page (like [Udacity's Facebook page](https://www.facebook.com/Udacity)), new stories get inserted into the page which never needs to refresh to show new content (more on this specific example in a moment). This is an example of an asynchronous request.

Click "Continue to Quiz" when you're ready to identify some more examples!

Vocabulary

**Callback** - Instruction set that will be executed when the RESPONSE is receieved from the GET request. 

GET Request: An internet request for data. Sent from a client to a server.

**RESPONSE**: A server's response to a request. Sent from a server to a client. A response to a GET request will usually include data that the client needs to load the page's content.
# JavaScript Design Patterns

## 4/16/2015
OMG!  Finally got it working.  After some sleep last night and noodling on this a bit I figured it out.
I can now send any number of images to the UI (well... i'll need to start wrapping the rows after three) and I can now keep track of the number of clicks independently of each image. 

I've been working on this since I left for Oregon on Tuesday afternoon.  Frustrating with terrible connectivity on the plan and in the hotel room.  I kept trying to pull this up as I was in the keynote sessions and they were getting boring... had to force myself back into listening to sessions themselves.  

I was having a few problems and I was actually very close a couple of times... lack of sleep and time to work / think through what was happening was tripping me up.  I was calling the function for each line of HTML that I inserted and trying to watch that specific image but it didn't seem to be working. Turns out it was but it was also just declaring the variable and resetting it each time.  After thinking through it a bit this morning I realized what I was doing and started storing my counter in the same array where I was storing my image URLs and ids.  I gave each div that contained the image it's own unique id from reddit and then called back the click count from that array of JSON objects that stored the URL,ID, permalink, etc...  When a user clicks on an image i write back to that same array with the click count to track it there.  
## 4/12/2015
### KittenClicker Rev 2
Okay, so I spent the last several days while working on this app figuring out how to pull images from Reddit's JSON API into my web application and then display them side by side on the page.  I had a few things that I wanted to be able to accomplish:

1. Pull images from a specific subreddit: r/catpictures
2. Iterate through the object returned with links to pictures and pull out only the ones that linked to valid images. 
3. Display two randomly selected images from all the images returned on my page. 

I was able to accomplish all of the above.  It took a very long time.  Getting the images from Reddit was easy but then iterating through them and understanding when the $.each() was complete so I could randomize the array that i was placing the valid images into was a big challenge.  I was doing this iteration and getting of the pictures in the script w/out placing it in a function and for some reason it seemed like when I did a console log of the array after the $.ajax request  function it would immediately log the empty array before it was finished loading.  This was maddening and messed around with making a synchronous call to reddit instead of asnch.  It took me forever to figure out and i'm still not sure why the behavior is as it iwas but as long as I would place the .ajax() request into a function (called getRedditPictures) it respected the synchronous nature of the $.each() function.  After that I refactored quite a bit of the nonsense I was doing trying to work around that issue or understand it.  

#### Key Learnings:
- a better grasp on what a callback function is - but it's still a little fuzzy for me. 
- a better understanding of pulling random items out of an array (be sure to click on the visuallization link on this page: http://bit.ly/1CFUQZF).
- a familiarity with reddit's api

#### What still needs to be done?
- I still need to look at using object oriented JS and assign a click event watch to each image.   - Right now it just works on the first image.
- Pull other data out of the reddit JSON object to use on the page
    + Attribution name.
    + Backlink to the origintal post.
    + Image Title
- Set up the page better to give me additional rows of data depending on the size of the array and paging if needed. 
- Change the layout to a two column layout. 

#### Things I would still like to do:
- Pull test each url that wasn't a valid image and see if it is a link to another image website and pull that in.
- Toggle the image service (reddit vs. flickr for instance).
- Toggle the subReddit that you are searching from. 
- Store the image URL as a key along with total number of clicks in a database and keep that click history for all pictures. 

## 4/7/2015
### KittenClicker Reflectons
#### How hard was this exercise?
Not that hard, it was fun... a neat challenge.  I think if I had just gone after the easy stuff first it would have been simple.  Instead I spent a couple of hours having fun going through the Flickr API as well as the Reddit API and experimenting.  In the end I figured out how to pull images out of a subreddit and then diplay them on a page.  My thought was to do this and add images to an array and select from that array a random cat picture and have a click on that random picture.  I would store the number of clicks per image and display them on the image in meme lettering format stolen from the project three work I did.  

#### How do you feel about your code?
Meh.  I didn't put a lot of time into it.  I pulled and modified the javascrip from a jsFiddle I found: http://jsfiddle.net/ots6jdyL/

I used a bootsrap template / example from the bootstrap getting started site.  I didn't do any optimizations and didn't spend any time trying to make it pretty. 

There are lots of things that i would like to do per the above note but didn't spend the time on it. 

#### How many times did you click on you picture?
 - 18, yes... eighteen amazing times! :)



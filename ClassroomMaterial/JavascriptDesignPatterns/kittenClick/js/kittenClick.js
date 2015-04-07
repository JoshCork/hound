var clicks = 0;
var imageText;

$('#images').click(function(e) {
	clicks++;
	imageText = "I have been clicked " + clicks + " times!";
	$('#imageText').text(imageText);
  //the element has been clicked... do stuff here
});
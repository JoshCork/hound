var initialCats = [
	{
		name : "Tabby",
		clickCount : 0,
		imgSrc : "img/434164568_fea0ad4013_z.jpg",
		imgAttribution : "https://flickr.com/photos/big",
		nicknames : ["Bungle",
        "George",
        "Zippy",
        "Bear",
        "Hippo"],
	},
	{
		name : "Tiger",
		clickCount : 0,
		imgSrc : "img/1413379559_412a540d29_z.jpg",
		imgAttribution : "NEED TO ADD imgAttribution",
		nicknames : ["Longbrake"],
	},
	{
		name : "Scaredy",
		clickCount : 0,
		imgSrc : "img/22252709_010df3379e_z.jpg",
		imgAttribution : "NEED TO ADD imgAttribution",
		nicknames : ["Johanson"],
	},
	{
		name : "Shadow",
		clickCount : 0,
		imgSrc : "img/9648464288_2516b35537_z.jpg",
		imgAttribution : "NEED TO ADD imgAttribution",
		nicknames : ["Kris"],
	},
];


var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);
    this.level = ko.computed(function() {
        var level = "";
        if (this.clickCount() < 10) {
            level = "Click Count is " + this.clickCount() + " so the level is novice";
        } else if (this.clickCount() < 20) {
            level = "Click Count is " + this.clickCount() + " so the level is padawan";
        } else {
            level = "Click Count is " + this.clickCount() + " so the level is master";
        }
        return level;
    }, this);

}

// [] Make the cats show up in a list
// [] Make the current cat change when you click on a cat in the list

var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
    	self.catList.push(new Cat(catItem));
    	console.log(catItem);
    });

    self.currentCat = ko.observable( this.catList()[0] );
    console.log(this.catList()[0]);

    self.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
};


ko.applyBindings(new ViewModel());
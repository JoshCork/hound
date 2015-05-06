var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.level = ko.computed(function() {
        var level
        if (this.clickCount < 10) {
            level = "beginner";
        } else if (this.clickCount < 20) {
            level = "padawan";
        } else {
            level = "master";
        }
        return level;
    },this);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://flickr.com/photos/big');
    this.nicknames = ko.observableArray([
        "Bungle",
        "George",
        "Zippy",
        "Bear",
        "Hippo"
    ]);

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
        console.log(this.level);
    };
};

ko.applyBindings(new ViewModel());

// > 10 = infant --> using computed observables


/*
Implement an array of nicknames for your cat.
Use a controlflow structure (knockout - similar to if statements and loops) to display them all.

 */

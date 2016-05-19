
var model = {
    currentCat: null,
    cats: [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'http://marieclaire.media.ipcdigital.co.uk/11116/00008c81a/3377_orh100000w440/Dog-Garticle-16.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
        },
    ]
};


var octopus = {
    init: function() {

        model.currentCat = model.cats[0];

        catListView.init();
        catView.init();
    },

    getCats: function() {
        return model.cats;
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    incrementCounter: function(){
        model.currentCat.clickCount++;
        catView.render();
    }
};

var catListView = {

    init: function() {

        this.catListElem = document.getElementById('cat-list');
        this.render();

    },

    render: function() {
        var cat, elem, i;
        var cats = octopus.getCats();

        this.catListElem.innerHTML = '';

        for(i = 0; i < cats.length; i++) {
            cat = cats[i];

            elem = document.createElement('li');
            elem.textContent = cat.name;

            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                }
            })(cat));

            this.catListElem.appendChild(elem);
        }
    },

};

var catView = {
    init: function() {
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        this.catImageElem.addEventListener('click', function(){
            octopus.incrementCounter();
        });

        this.render();

    },

    render: function() {
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;

    }
};


// make it go!
octopus.init();
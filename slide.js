let slide = {
    index: 1,
    prev: document.querySelector(".slide .prev"),
    next: document.querySelector(".slide .next"),
    slides: function(n) {
        let slides = document.querySelectorAll(".slide img");
        if(n > slides.length) { 
            this.index = 1; 
        };
        if(n < 1) { 
            this.index = slides.length; 
        };
        for(let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        };
        slides[this.index-1].style.display = "block";
    },
    navslide: function(n) {
        this.slides(this.index += n);
    },
    init: function() {
        this.prev.addEventListener('click', function() {
            slide.navslide(-1);
        });
        this.next.addEventListener('click', function() {
            slide.navslide(1);
        });

        this.slides(this.index);
    },
};
slide.init();

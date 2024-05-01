<style>
.slide {
    position: relative;
    width: 1100px;
    height: 400px;
    margin: auto;
    border: 2px solid #999;
}
.slide img {
    position: absolute;
    display: block;
    margin: auto;
    top: 0;
    animation-name: slidetop;
    animation-duration: 0.5s; 
    animation-fill-mode: both; 
}
.slide .prev, .slide .next {
    position: absolute;
    display: inline-block;
    font-size: 3rem;
    color: #FFF;
    background: rgba(0, 0, 0, 0.50);
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    user-select: none;
}
.slide .prev {
    left: 0;
    padding: 5px 25px 10px 15px;
    border-radius: 0 6px 6px 0;
}
.slide .next {
    right: 0;
    padding: 5px 15px 10px 25px;
    border-radius: 6px 0 0 6px;
}

@keyframes slidetop  { 
    0% {
        opacity: 0;
        transform: translateY(-500px)
    }
    100% { transform: translateY(0) }
}
</style>
<div class="slide">
    <img src="https://picsum.photos/id/351/1100/400">
    <img src="https://picsum.photos/id/350/1100/400">
    <img src="https://picsum.photos/id/424/1100/400">
    <img src="https://picsum.photos/id/449/1100/400">
    <span class="prev">⟪</span>
    <span class="next">⟫</span>
</div>
<script>
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
</script>

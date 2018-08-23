// $(document).ready(function(slides) {
    class Slider {
        constructor(slides) {
            this.slides = slides;
            this.activSlide = Math.floor(this.slides.length/2);
            this.oldActivSlide = this.activSlide;
        }

        init() {
            this.CreateRow();
            this.setSelector();
        }

        CreateRow() {     
            let right = document.getElementsByClassName('slider__arrow-right');        
            for(let i = 0; i < this.slides.length; i++) {
                let slide = document.createElement('img');
                document.getElementById('containerOfSlider').insertBefore(slide, right[0]);
                slide.setAttribute('class','slider__small-image');
                slide.setAttribute('src',this.slides[i]);
                slide.setAttribute('id',i);
            }
        };

        setSelector() {
            if (this.oldActivSlide != this.activSlide) {
                document.querySelector('.slider__small-image--active').classList.remove('slider__small-image--active');
            }
            document.getElementById(this.activSlide).setAttribute('class','slider__small-image slider__small-image--active');
            this.setMain(this.slides[this.activSlide]);
        }
        setMain(image) {
            document.getElementById("dropBigImage").style.backgroundImage = "url("+image+")";
        }
        //функцию ниже нужно навесить на блок, где кнопки и иконки 
        //
        //типо так - slider.changeByClick(event) slider
        
        changeByClick(ev) {
            if ( ev.target.id == 'containerOfSlider') { //click on containerOfSlider
            } else {
                this.oldActivSlide = this.activSlide;
                if (ev.target.innerText == '<') {
                    this.left();
                } else if (ev.target.innerText == '>') {
                    this.right();
                } else {
                    this.activSlide = ev.target.id; //click on picture
                }
                this.setSelector();
            }
        };

        left() {
            if (this.oldActivSlide === 0) {
                this.activSlide = this.slides.length;
            }
            --this.activSlide;   
        }

        right() {
            if (this.oldActivSlide === this.slides.length-1) {
                this.activSlide = -1;
            }
            ++this.activSlide;
        }
    }
    // setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок
    // 	slider.changeByClick(MouseEvent.target.className("slider__arrow-right"));
    // },50);
// });
export default Slider;
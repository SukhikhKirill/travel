'use stcrict';

window.addEventListener('DOMContentLoaded', () => { 
    const slides = document.querySelectorAll('.review__wrapper'),
          slidesParent = document.querySelector('.review__right');

    function hideSlide() {
        slides.forEach(item => {
            item.classList.remove('review__wrapper-active');
        });
    }


    function showSlide(i = 1) {
        slides[i].classList.add('review__wrapper-active');
    }


    hideSlide();
    showSlide();

    slidesParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('review__wrapper')) {
            slides.forEach((item, i) => {
                if (target == item) {
                    hideSlide();
                    showSlide(i);
                }
            });
        }
    });
});

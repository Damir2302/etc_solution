$(document).ready(function() {

    let hero_main;

    if ($('.hero__slider').length > 0) {
        hero_main = new Swiper('.hero__slider', {
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + '</span>';
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        hero_main.on('slideChange', function () {
            changeNumber();
            changeProgress();
        })

        function changeNumber() {
            let slidesCount = $('.section-hero .slides-number');
            let currentNumber = $('.section-hero .current-number');
            let lastNumber = $('.section-hero .last-number');

            currentNumber.html('0' + (hero_main.realIndex +  1));
            lastNumber.html('0' + (Math.ceil(hero_main.slides.length)))
        }

        changeNumber();

        $('.section-hero .swiper-button-prev, .section-hero .swiper-button-next').on('click', changeNumber);

        function changeProgress() {
            let currentNumber = hero_main.realIndex +  1;
            let lastNumber = Math.ceil((hero_main.slides.length));
            let perсentNumber = (currentNumber * 100) / lastNumber;
            $('.s-progress > span').css('width', perсentNumber + '%');
        }

        changeProgress();

        $('.section-hero .swiper-button-prev, .section-hero .swiper-button-next').on('click', changeProgress);
    }



});
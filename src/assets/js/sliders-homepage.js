$(document).ready(function() {

    let hero_main;

    if ($('.hero__slider').length > 0) {
        hero_main = new Swiper('.hero__slider', {
            slidesPerView: 1,
            pagination: {
                el: '.hero-section .swiper-progressbar',
                type: 'progressbar'
            },
            navigation: {
                nextEl: '.hero-section .swiper-button-next',
                prevEl: '.hero-section .swiper-button-prev',
            },
        });

        hero_main.on('slideChange', function () {
            changeNumber();
        })

        function changeNumber() {
            let currentNumber = $('.hero-section .current-number');
            let lastNumber = $('.hero-section .last-number');

            currentNumber.html('0' + (hero_main.realIndex +  1));
            lastNumber.html('0' + (Math.ceil(hero_main.slides.length)))
        }

        changeNumber();

        $('.hero-section .swiper-button-prev, .hero-section .swiper-button-next').on('click', changeNumber);
    }

    let popular_main;

    if ($('.popular__slider').length > 0) {
        let slides_per_view = 6;
        popular_main = new Swiper('.popular__slider', {
            slidesPerView: slides_per_view,
            slidesPerGroup: slides_per_view,
            spaceBetween: 28,
            pagination: {
                el: '.popular-section .swiper-progressbar',
                type: 'progressbar'
            },
            navigation: {
                nextEl: '.popular-section .swiper-button-next',
                prevEl: '.popular-section .swiper-button-prev',
            },
        });

        popular_main.on('slideChange', function () {
            changeNumber();
        });

        function changeNumber() {
            let currentNumber = $('.popular-section .current-number');
            let lastNumber = $('.popular-section .last-number');

            currentNumber.html(addZero((popular_main.realIndex / slides_per_view) +  1) + ((popular_main.realIndex / slides_per_view) +  1));
            lastNumber.html(addZero((Math.ceil(popular_main.slides.length) / slides_per_view)) + (Math.ceil((popular_main.slides.length) / slides_per_view)))
        }

        function addZero(num) {
            return (num > 9) ? '' : '0';
        }

        changeNumber();

        $('.popular-section .swiper-button-prev, .popular-section .swiper-button-next').on('click', changeNumber);
    }

    let services_main;

    if ($('.services__slider').length > 0) {
        let slides_per_view = 3;
        services_main = new Swiper('.services__slider', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            pagination: {
                el: '.services-section .swiper-progressbar',
                type: 'progressbar'
            },
            navigation: {
                nextEl: '.services-section .swiper-button-next',
                prevEl: '.services-section .swiper-button-prev',
            },
        });

        $('#arrow-prev').on('click', function(e) {
            e.preventDefault();
            services_main.slidePrev();
        });

        $('#arrow-next').on('click', function(e) {
            e.preventDefault();
            services_main.slideNext();
        })

        services_main.on('slideChange', function () {
            changeNumber();
        });

        function changeNumber() {
            let currentNumber = $('.services-section .current-number');
            let lastNumber = $('.services-section .last-number');

            currentNumber.html(addZero(services_main.realIndex +  1) + (services_main.realIndex +  1));
            lastNumber.html(addZero((Math.ceil(services_main.slides.length) / slides_per_view)) + (Math.ceil((services_main.slides.length) / slides_per_view)))
        }

        function addZero(num) {
            return (num > 9) ? '' : '0';
        }

        changeNumber();

        $('.services-section .swiper-button-prev, .services-section .swiper-button-next').on('click', changeNumber);
    }

});
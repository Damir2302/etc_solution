$(document).ready(function() {

    // SHOW SEARCH INPUT
    $('#searchBtn').on('click', function(e) {
        if (!$(this).hasClass('active')) {
            e.preventDefault();
            $(this).addClass('active');
            $('#searchInput').addClass('active');
            $('#closeInput').addClass('active');
        } else {
            e.submit();
        }
    });

    $('#closeInput').on('click', function(e) {
        e.preventDefault();
        $(this).removeClass('active');
        $('#searchInput').removeClass('active');
        $('#searchBtn').removeClass('active');
    });

    $('html').click(function(e) {
        if (!$(e.target).closest('.header-search').length) {
            $('#searchInput').removeClass('active');
            $('#searchBtn').removeClass('active');
            $('#closeInput').removeClass('active');
        }
    });

    // BURGER MENU
    $('#burgerBtn').on('click', function() {
        $(this).toggleClass('opened');
        $('body').toggleClass('overflow-hidden');
        $('.header__navbar').toggleClass('opened');
        $('#page').toggleClass('bg-overlay');
    });

    $('html').click(function(e) {
        if (!$(e.target).closest('.header__navbar').length && !$(e.target).closest('#burgerBtn').length) {
            $('#burgerBtn').removeClass('opened');
            $('body').removeClass('overflow-hidden');
            $('.header__navbar').removeClass('opened');
            $('#page').removeClass('bg-overlay');
        }
    });

    // FOOTER BRAND SLIDER
    let footer_brands;

    if ($('.brands__slide').length > 0 && $(window).width() < 990) {
        footer_brands = new Swiper('.brands__slide', {
            freeMode: true,
            slidesPerView: 'auto',
            spaceBetween: 30
        });

    }

});
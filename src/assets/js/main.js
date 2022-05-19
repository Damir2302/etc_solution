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
    });

    $('html').click(function(e) {
        if (!$(e.target).closest('.header__navbar').length && !$(e.target).closest('#burgerBtn').length) {
            $('#burgerBtn').removeClass('opened');
            $('body').removeClass('overflow-hidden');
            $('.header__navbar').removeClass('opened');
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





const container = document.querySelector('.slide-container')
const slides = document.querySelector('.slides')

const containerRect = container.getBoundingClientRect()
const slideRect = slides.getBoundingClientRect()

const containerTop = containerRect.top
const containerHeight = containerRect.height
const slideWidth = slideRect.width

const scrollDistance = containerHeight - window.innerHeight
const slideDistance = slideWidth - window.innerWidth

const getProgress = (start, distance, scroll) => {
  return Math.min(1, Math.max(0, (scroll - start) / distance))
}

const handleScroll = () => {
  const scrollPos = window.scrollY
  const progress = getProgress(containerTop, scrollDistance, scrollPos)

  slides.style.transform = `translateX(-${slideDistance * progress}px)`
}

window.addEventListener('scroll', handleScroll)
});
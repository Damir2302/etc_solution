$(document).ready(function() {

    // SHOW SEARCH INPUT
    $('#searchBtn').on('click', function(e) {
        e.preventDefault();
        $('#searchInput').addClass('active');
    });

    // $('#searchBtn').on('click', function(e) {
    //     if (!$('#searchInput').val().length) {
    //     e.preventDefault();
    //     $('#searchInput').removeClass('active');
    //     }
    // });

    // $('html').click(function(e) {
    //     if (!$(e.target).closest('.header-search').length) {
    //         $('#searchInput').removeClass('active');
    //     }
    // });

});
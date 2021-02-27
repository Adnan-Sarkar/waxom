$(function () {
    // video
    $('.venobox').venobox(); 

    // counters
    $('.counter').counterUp({
        delay: 5,
        time: 3000
    });

    // blog slider
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
    });
})
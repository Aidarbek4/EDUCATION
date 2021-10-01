$(function() {

    $(".slider").slick({
        slidesToShow: 2,
        speed: 1000,
        easing: "linear",
        draggable: false,
        waitForAnimate: false,
    });

    $(".rent__slider").slick({
        slidesToShow: 1,
        speed: 1000,
        easing: "linear",
        waitForAnimate: false,
    });

});
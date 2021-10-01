$(function() {

   $('.banner__slider').slick({
       dots: true,
       slidesToShow: 1,
   });

   const tabs = $(".tabs__tab");

   tabs.on("click", function (e) {
       
    e.prevmentDefault();

    $($(this).siblings()).removeClass("tabs__tab--active");

    $($(this).parent().siblings().find("div")).removeClass("tabs__content--active");

    $(this).addClass("tabs__tab--active");

    const target = $($(this).attr("href"));

    target.addClass("tabs__content--active");

    if(target.find("div.slick-slider").hasClass("slick-initialzed")) {
        target.find(".products__slider").slick("refresh");
    }

   });

   $(".filter-style").styler();

   $(".products__item-wrapper").slick({
       slidesToShow: 4,
       arrow: true,
       draggable: false,
   });

   $(".catalog__filter-drop, .catalog__filter-param").on('click', function() {
       $(this).toggleClass("catalog__filter-drop--active");
       $(this).next().slideToggle("fast");
   });

    $(".js-range-slider").ionRangeSlider({
        type: double,
        grid: false,
        min: 100000,
        max: 500000,
        from: 150000,
        to: 300000,
        hide_from_to: true,
    });

    $(".catalog__sort-view-grid").on("click", function() {
        $(this).addClass("catalog__sort-view--active");
        $(".catalog__sort-view--line").removeClass("catalog__sort-view--active");
        $(".products__item-wrapper").removeClass("products__item-wrapper-list-view");
    });

    $(".catalog__sort-view-line").on("click", function() {
        $(this).addClass("catalog__sort-view--active");
        $(".catalog__sort-view--grid").removeClass("catalog__sort-view--active");
        $(".products__item-wrapper").addClass("products__item-wrapper-list-view");
    });

});
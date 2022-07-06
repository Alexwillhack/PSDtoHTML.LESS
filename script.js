jQuery(function($){
    "use strict";



//Responsive menu
if($('.fa-bars').length){
    $('.fa-bars').on('click', function(){
        $('.header_top .inner_header nav > ul').show();
        $(this).hide();
        $('.fa-times').show();
    });

    $('.fa-times').on('click', function(){
        $('.header_top .inner_header nav > ul').hide();
        $(this).hide();
        $('.fa-bars').show();
    });
}
//////////////////////////////////////////////////////////////////////////////Mobile navigation
if($('.fa-bars').length){
    $('.fa-bars').on('click', function(){
        $('.mobile_navigation').show();
        $(this).hide();
        $('.fa-times').show();
    });

    $('.fa-times').on('click', function(){
        $('.mobile_navigation').hide();
        $(this).hide();
        $('.fa-bars').show();
    });
}

//tweet slider
    if($('.content_slider_tweeter').length){
        $('.content_slider_tweeter').slick({
           vertical: true,
           appendArrows: $('.tweet_slider .arrows'),
           prevArrow: '<span class="upto"><i class="fa-solid fa-arrow-up"></i></span>',
           nextArrow: '<span class="downto"><i class="fa-solid fa-arrow-down"></i></span>',
    });
  }
    
  
  if($('.home_slider').length){
    $('.home_slider').slick({
       vertical: true,
       arrows: false,
       dots: true
});
}

    if($('.shop_carusel').length){
        $('.shop_carusel').slick({
            Infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            appendArrows: $('.shop_slider_navigation'),
            prevArrow: '<div class="left"><i class="fa-solid fa-arrow-left"></i></div>',
            nextArrow: '<div class="right"><i class="fa-solid fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 412,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    
    if($('.testimonial_carousel').length){
        $('.testimonial_carousel').slick({
            Infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            appendArrows: $('.testimonial_slider_box'),
            prevArrow: '<div class="left_arrow"><div class="left"><i class="fa-solid fa-arrow-left"></i></div></div>',
            nextArrow: '<div class="right_arrow"><div class="right"><i class="fa-solid fa-arrow-right"></i></div></div>',
            responsive: [
                {
                  breakpoint: 420,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                   }
                }
            ]
        });
    
    
    $('.testimonial_carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var tabs_container = $('.testimonial_tab_container');

        tabs_container.find($('.tab-item')).hide();
        tabs_container.find($('.tab-' +nextSlide)).show();
        });
    }




    if($('.open_video').length){
        $('.open_video').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
    } 

    if($('.testy_gallery').length){
        $('.testy_gallery').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          mainClass: 'mfp-img-mobile',
          image: {
            verticalFit: true
        }
        });
    }

});

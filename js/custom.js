
//=========/js start/============//
$(function(){
    "use strict";

    //========/main_nav_sticky menu/=====//
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 100){
            $(".main_menu").addClass("main_menu_fix");
        }
        else{
            $(".main_menu").removeClass("main_menu_fix");
        }
    })
    //========/main_nav_sticky menu/=====//
    
    //========/venobox/=====//
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });
    //========/venobox/=====//

    //=========/latest-slider/=====//
    $('.latest-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        dots:true,
        arrows:false,
        centerMode:true,
        centerPadding:'0px',
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 431,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },       
            {
              breakpoint: 321,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }                                            
          ]
        });
    });
    //=========/latest-slider/=====//

    //=========/back-to-top/=======//
        $(window).scroll(function(){
            var up = $(this).scrollTop();
            if(up < 100){
            $(".back-to-top").hide()
            }
            else{
            $(".back-to-top").show()
        }
        })       
        $(".back-to-top").click(function(){
        $("html,body").animate({scrollTop:0},3000
        )
        })
    //==========/back-to-top/=======//


(function ($) {
    'use strict';

    // $(window).scroll(function () {
    //     var sticky = $('header'),
    //         scroll = $(window).scrollTop();

    //     if (scroll >= 200) {
    //         sticky.addClass('sticky-nav');
    //         $("body").addClass("scrollingheader");
    //     }else {
    //         sticky.removeClass('sticky-nav');
    //         $("body").removeClass("scrollingheader");
    //     }

    // });

    jQuery(document).ready(function ($) {
        // aside dropdown 

        function asideDropdown() {

            var dropdown = $('.aside-dropdown');

            if (!dropdown.length) return;

            var trigger = $('.dropdown-trigger');
            var close = $('.menu_mobile_close');

            trigger.on('click', function () {
                dropdown.toggleClass('aside-dropdown--active');
                $(".header").toggleClass('opened');
                $("body").toggleClass('removescroll');
            });

            close.on('click', function () {
                dropdown.removeClass('aside-dropdown--active');
                $(".header").toggleClass('opened');
                $("body").toggleClass('removescroll');
            });

            $(document).on('click', function (event) {
                if ($(event.target).closest('.dropdown-trigger, .aside-dropdown__inner').length) return;
                dropdown.removeClass('aside-dropdown--active');
                $(".header").removeClass('opened');
                event.stopPropagation();
            });

        }

        asideDropdown();

        $('.search-box').click(function () {
            $('.search-full').css({
                'display': 'block'
            });
        });

        $('.search-close').click(function () {
            $('.search-full').css({
                'display': 'none'
            });
        });

        // Start Counter
        $.fn.digits = function () {
            return this.each(function () {
                $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            })
        }
        function pad(n) {
            return (n < 10) ? ("0" + n) : n;
        }
        
        $('.sec-counter h2 span').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
                
            }).animate({
                    countNum: countTo
                },

                {
                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $this.text(pad(Math.floor(this.countNum)) );
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        $($this).digits();
                        $this.text(pad(this.countNum));
                        
                        //alert('finished');
                    }

                });
                if($this.text(this.countNum) < 10 ) {
                    alert('finished');
                }  
        });

        function videoTrigger() {
            var trigger = $('.video-trigger');
            if (!trigger.length) return;
            trigger.fancybox();
        }
        videoTrigger();

        AOS.init({
            once: true,
        });

        $('.home-banner .owl-carousel').owlCarousel({
            items: 1,
            // loop: true,
            // autoplay: true,
            animateIn: 'animate__fadeIn',
            animateOut: 'animate__fadeOut',
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            items: 1,
            navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
        });


        $('.sec-insiration .owl-carousel').owlCarousel({
            items: 1,
            // loop: true,
            autoplay: true,
            margin: 40,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: true,
            autoplayHoverPause: true,
            slideBy: 'page',
            nav:false
        });
        // Custom Button
        $('.customNextBtn').click(function() {
            $('.sec-insiration .owl-carousel').trigger('next.owl.carousel');
        });
        $('.customPreviousBtn').click(function() {
            $('.sec-insiration .owl-carousel').trigger('prev.owl.carousel');
        });

        $('.sec-insiration .owl-carousel').on('changed.owl.carousel', function(e) {

            $('.customNextBtn').removeAttr('disabled');
            $('.customPreviousBtn').removeAttr('disabled');
        
            if ( ( e.page.index + 1 ) >= e.page.count ){
                $('.customNextBtn').attr('disabled', 'disabled');
            } else {
                $('.customNextBtn').removeAttr('disabled');
            }
            
            if ( e.page.index == 0 ){
                $('.customPreviousBtn').attr('disabled', 'disabled');
            } else {
                $('.customPreviousBtn').removeAttr('disabled');
            }
        
        });

        $('.sec-announcement .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 20,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: true,
            nav:true,
            autoplayHoverPause: true,
            stagePadding:30,
            navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });

        $('.sec-our-media .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: true,
            nav:true,
            autoplayHoverPause: true,
            stagePadding:150,
            navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    stagePadding:0,
                },
                768: {
                    items: 2,
                    stagePadding:0,
                },
                1000: {
                    items: 3
                }
            }
        });

        $('.sec-administrative .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 20,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            nav:true,
            autoplayHoverPause: true,
            navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1000: {
                    items: 3
                }
            }
        });

        $('.sec-timeline .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            nav:true,
            autoplayHoverPause: true,
            navText: ["<i class='far fa-long-arrow-left'></i>", "<i class='far fa-long-arrow-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 3,
                },
                1000: {
                    items: 4
                }
            }
        });

        //
        $('.slide1 .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: true,
            nav:false,
            autoplayHoverPause: true,
            
            responsive: {
                0: {
                    items: 1,
                }
            }
        });

        $('.slide2 .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: true,
            nav:false,
            autoplayHoverPause: true,
            
            responsive: {
                0: {
                    items: 1,
                }
            }
        });

        $('.slide3 .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: true,
            nav:false,
            autoplayHoverPause: true,
            
            responsive: {
                0: {
                    items: 1,
                }
            }
        });

        $('.slide4 .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: true,
            nav:false,
            autoplayHoverPause: true,
            
            responsive: {
                0: {
                    items: 1,
                }
            }
        });

        $('.slide5 .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: true,
            nav:false,
            autoplayHoverPause: true,
            
            responsive: {
                0: {
                    items: 1,
                }
            }
        });

        $('.slide6 .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: true,
            nav:false,
            autoplayHoverPause: true,
            
            responsive: {
                0: {
                    items: 1,
                }
            }
        });



        

        //

        var divs = $(".gallery1 > .box");
            for(var i = 0; i < divs.length; i+=2) {
            divs.slice(i, i+2).wrapAll("<div class='new-col'></div>");
        }

        $('.rgst .rgstab').eq(0).addClass('active')
        $('.rgst .rgstab').eq(0).next().css({"display":"block"})


        $('.rgstab').click(function(){
            $(this).siblings('.rgstab').next().slideUp();
            $(this).siblings('.rgstab').removeClass('active');
            $(this).toggleClass('active');
            $(this).next('.grstc').slideToggle();
        });


        //


        $('.op .optab').eq(0).addClass('active')
        $('.op .optab').eq(0).next().css({"display":"block"})


        $('.optab').click(function(){
            $(this).siblings('.optab').next().slideUp();
            $(this).siblings('.optab').removeClass('active');
            $(this).toggleClass('active');
            $(this).next('.optc').slideToggle();
        });

        //

        (function() {
            $(function() {
              return $('.file-upload__input').on('change', function() {
                return $('.file-upload__label').html([this.files.length, 'Files to upload'].join(' '));
              });
            });
          
          }).call(this);

    });
}(jQuery));

(function ($) {
  "use strict";

  //when dom is ready
  $(document).ready(function () {

    // on scroll Navbar Fixed and back to top show
    $(window).on('scroll', function () {
      if ($(window).width() > 600) {
        if ($(window).scrollTop() > 600) {
          $('#header').addClass('navbar-fixed-top');
          $('#back-to-top').addClass('reveal');
        } else {
          $('#header').removeClass('navbar-fixed-top');
          $('#back-to-top').removeClass('reveal');
        }
      }
    });


    // Start Back to Top
    $('#back-to-top').on('click', function () {
      $("html, body").animate({
        scrollTop: 0
      }, 1000);
      return false;
    });

    // revolution slider start
    $("#rev_slider_1").show().revolution({
      sliderType: "standard",
      sliderLayout: "fullwidth",
      dottedOverlay: "none",
      delay: 9000,
      spinner: "spinner4",
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        onHoverStop: "on",
        touch: {
          touchenabled: "on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        },
        arrows: {
          enable: true,
          style: 'metis',
          tmp: '',
          rtl: false,
          hide_onleave: true,
          hide_onmobile: true,
          hide_under: 0,
          hide_over: 9999,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          left: {
            container: 'slider',
            h_align: 'left',
            v_align: 'center',
            h_offset: 20,
            v_offset: 0
          },
          right: {
            container: 'slider',
            h_align: 'right',
            v_align: 'center',
            h_offset: 20,
            v_offset: 0
          }
        },
      },
      responsiveLevels: [1240, 1024, 767, 480],
      gridwidth: [1170, 1170, 767, 480],
      gridheight: [900, 768, 960, 720],
      lazyType: "none",
      shadow: 0,
      shuffle: "off",
      autoHeight: "off",
    });
    // revolution slider end





    // Start Animated Number
    $('.animated-counter').appear(function () {
      $('.animated-number').countTo({
        speed: 4000,
        refreshInterval: 60,
        formatter: function (value, options) {
          return value.toFixed(options.decimals);
        }
      });
    });


    //Progress Bar
    $('.progress-bar').each(function () {
      var width = $(this).data('percentage');
      $(this).css({
        'transition': 'width 3s'
      });
      $(this).appear(function () {
        $(this).css('width', width + '%');
        $(this).find('.count').countTo({
          from: 0,
          to: width,
          speed: 3000,
          refreshInterval: 50,
        });
      });
    });

    // Start Easy Pie Chart
    $('.progress-chart-feature').appear(function () {
      $('.chart').easyPieChart({
        animate: 2000,
        barColor: '#25c486',
        trackColor: '#f6f6f6',
        scaleColor: '',
        lineCap: 'round',
        lineWidth: 10,
        size: 130
      });
    });

    //Owl Carousel-- Testimonial
    $('.testimonial-carousel').flexslider({
      animation: "slide",
      animationLoop: true,
      directionNav: false,
      direction: "vertical"
    });

    //Tooltip
    $('[data-toggle="tooltip"]').tooltip()

    //video background
    try {
      jQuery(".player").mb_YTPlayer();
    } catch (err) {}


    /*-------------------------------------------------*/
    /* =  Flex Slider- Product Gallery
    /*-------------------------------------------------*/

    $('.flexslider').flexslider({
      animation: "slide",
      controlNav: "thumbnails"
    });



    // Styles Switcher
    $(document).ready(function () {
      $('.open-switcher').click(function () {
        if ($(this).hasClass('show-switcher')) {
          $('.switcher-box').css({
            'left': 0
          });
          $('.open-switcher').removeClass('show-switcher');
          $('.open-switcher').addClass('hide-switcher');
        } else if (jQuery(this).hasClass('hide-switcher')) {
          $('.switcher-box').css({
            'left': '-212px'
          });
          $('.open-switcher').removeClass('hide-switcher');
          $('.open-switcher').addClass('show-switcher');
        }
      });
    });


    //Layout Switcher
    $(".layout-style").change(function () {
      if ($(this).val() == 1) {
        $("#container").removeClass("boxed-page"),
          $(window).resize();
      } else {
        $("#container").addClass("boxed-page"),
          $(window).resize();
      }
    });

    //Background Switcher
    $('.switcher-box .bg-list li a').click(function () {
      var current = $('.switcher-box select[id=layout-style]').find('option:selected').val();
      if (current == '2') {
        var bg = $(this).css("backgroundImage");
        $("body").css("backgroundImage", bg);
      } else {
        alert('Please select boxed layout');
      }
    });


  });
  //dom ready end







})(jQuery);
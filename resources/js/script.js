$(document).ready(function() {
    
    /* $ means selector. We selected h1 element, and on click it changes css style of this (h1) element*/
    /*$('h1').click(function() {
        $(this).css('background-color', '#ff0000');
    })*/
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
                                        
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function() {
        /* An animation which scrolls to the top of the js--section-plans with a speed of 1 second */
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        /* An animation which scrolls to the top of the js--section-plans with a speed of 1 second */
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /* Navigation Scroll */
    $(function() {

        /* Selects a link element with the href atribute with the # symbol */
        $('a[href*=#]:not([href=#])').click(function() {

            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                var target = $(this.hash);

                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                /* If element exists */
                if (target.length) {

                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);

                    return false;
                }
            }
        });
    });
    
    
    /* Animations on Scroll */
    $('.js--wp-1').waypoint(
    (direction) => {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );
    
    $('.js--wp-2').waypoint(
    (direction) => {
      $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    },
    {
      offset: '50%',
    }
  );
    
    $('.js--wp-3').waypoint(
    (direction) => {
      $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );
    
    $('.js--wp-4').waypoint(
    (direction) => {
      $('.js--wp-4').addClass('animate__animated animate__pulse');
    },
    {
      offset: '50%',
    }
  );
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        /* Open and closes a box. 200ms = 0.2 s */
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    })
    

});
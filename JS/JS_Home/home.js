$(document).ready(function() {
    
    $('.hero-text').hide().fadeIn(2000);
    
    $('nav a').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
    const $burgerMenu = $('.burger-menu');
    const $mobileMenu = $('.mobile-menu');

    $burgerMenu.click(function() {
        $(this).toggleClass('active');
        $mobileMenu.slideToggle(300);
    });

   
    $('.mobile-menu button').click(function() {
        $burgerMenu.removeClass('active');
        $mobileMenu.slideUp(300);
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.burger-menu, .mobile-menu').length) {
            $burgerMenu.removeClass('active');
            $mobileMenu.slideUp(300);
        }
    });
});
$(document).ready(function() {
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
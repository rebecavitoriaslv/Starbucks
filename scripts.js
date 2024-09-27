$(document).ready(function() {
    // Toggle menu on click
    $('#menu-icon').on('click', function() {
        $(this).toggleClass('bx-x');
        $('.nav-bar').toggleClass('active');
    });

    // Handle scroll event
    $(window).on('scroll', function() {
        $('#menu-icon').removeClass('bx-x');
        $('.nav-bar').removeClass('active');

        // Add box shadow to header on scroll
        if ($(this).scrollTop() > 0) {
            $('header').css('box-shadow', 'none');
        } else {
            $('header').css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        // Highlight active section in the navbar
        const sections = $('section');
        const navItems = $('.nav-bar a');
        let activeSectionIndex = 0;

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if ($(window).scrollTop() >= sectionTop && $(window).scrollTop() < sectionBottom) {
                activeSectionIndex = i;
                return false; // Exit loop
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });
});
$(document).on('ready', function() {

    /* Animate the site header */
    var wrapper = $('.wrapper');
    wrapper.animate({
        opacity: 1,
        marginTop: 0
    }, 700);

    // Cache selectors
    var lastId;
    var nav = $('.nav-right-collapse, .nav-right');
    var navHeight = 60;
    // all list items
    var links = nav.find("a");
    // anchors corresponding to menu items
    var scrollLinks = links.map(function() {
        var link = $($(this).attr("href"));
        if (link.length) { return link; }
    });

    /* Easing scroll animation to the correct part of the page */
    links.on('click', function(e){
        var href = $(this).attr("href");
        var offsetTop = (href === "#") ? 0 : $(href).offset().top-navHeight+10;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    /* Fix navbar to top */
    $(document).on('scroll', function() {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 60) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });

    /* Highlight current nav item */
    $(document).on('scroll', function() {
        // Get container scroll position
        var fromTop = $(this).scrollTop()+navHeight+25;

        // Get id of current scroll item
        var cur = scrollLinks.map(function() {
            var linkTop = $(this).offset().top;
            var sectionHeight = $(this).height();
            // 2nd check is to unselect the last item if we keep scrolling past it. Give it leeway of 125 to account for padding
            if (linkTop < fromTop && fromTop < (linkTop + sectionHeight + 100)) {
                return this;
            }
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;
            links.removeClass('active');
            links.filter("[href=#"+id+"]").addClass('active');
        }
    });

    $('.contact-submit-btn').on('click', function() {
        $(this).submit();
    })

    // esc hit - close form or close nav-collapse
    $(document).keyup(function(e) {
        if (e.keyCode === 27) { // escape key maps to keycode `27`
            if ($('.subscribe-form').css('display') === 'block') {
                $('.subscribe-close').click();
            } else {
                $('.nav-right-hamburger, .nav-right-collapse').removeClass('on');
            }
        }
    });

    // subscribe clicked - show subscribe form
    $('.subscribe-btn').on('click', function() {
        $('.subscribe-overlay').show();
        $('.subscribe-form').show().animate({
            top: '30%'
        }, 200);
    });

    // subscribe-close or outside of form is clicked - exit form
    $('.subscribe-overlay, .subscribe-close').on('click', function() {
        $('.subscribe-overlay').hide();
        $('.subscribe-form').css('top','28%');
        $('.subscribe-form').hide();
    });

    // hamburger nav clicked - toggle nav-collapse
    $('.nav-right-hamburger, .nav-right-collapse a').on('click', function() {
        $('.nav-right-hamburger').toggleClass('on');
        $('.nav-right-collapse').toggleClass('on');
    });


});

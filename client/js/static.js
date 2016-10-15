$(document).on('ready', function() {

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

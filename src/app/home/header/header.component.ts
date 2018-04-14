import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['../home.component.css', './header.component.css']
})

export class HeaderComponent {
  constructor() {

    // ===============================================================
    // Note : The below is legacy javascript from a previous iteration
    // of the server, it is in terrible style, but no one has bothered
    // to modernize it yet, please excuse this.
    // ===============================================================
    $(() => {

      /* Animate the site header */
      const wrapper = $('.wrapper');
      wrapper.animate({
        opacity: 1,
      }, 700);

      // Cache selectors
      let lastId: string;
      const nav = $('.nav-right-collapse, .nav-right');
      const navHeight = 60;

      // all list items
      const links = nav.find('a');

      // anchors corresponding to menu items
      const scrollLinks = links.map((index) => {
        const link = $($(links[index]).attr('href'));
        if (link.length) {
          return link;
        }
      });

      /* Easing scroll animation to the correct part of the page */
      links.on('click', function(e, i) {
        const href = $(e.target).attr('href');
        let offset = $(href).offset();
        // Ensure the offset is not undef.
        if (offset) {
          const offsetTop = (href === '#') ? 0 : offset.top - navHeight + 10;
          $('html, body').stop().animate({
            scrollTop: offsetTop
          }, 300);
          e.preventDefault();
        }
      });

      /* Fix navbar to top */
      $(document).on('scroll', () => {
        const scrollTop = $(document).scrollTop();
        if (scrollTop) { // Handle undefined scrolltop
          if (scrollTop > 60) {
            $('nav').addClass('fixed');
          }
          else {
            $('nav').removeClass('fixed');
          }
        }
      });

      /* Highlight current nav item */
      $(document).on('scroll', function(e) {

        let scrollTop = $(e.target).scrollTop();
        // Handle undefined event
        if (!scrollTop) { scrollTop = 0; }
        // Get container scroll position
        const fromTop = scrollTop + navHeight + 25;

        // Get id of current scroll item
        var cur = scrollLinks.map((index) => {
          let offset = $(scrollLinks[index]).offset();
          if (offset) {
            const linkTop = offset.top;
            let sectionHeight = $(scrollLinks[index]).height();
            // Handle undefined sectionHeight
            if (!sectionHeight) { sectionHeight = 0; }
            // 2nd check is to unselect the last item if
            // we keep scrolling past it. Give it leeway of 125
            // to account for padding
            if (linkTop < fromTop &&
              fromTop < (linkTop + sectionHeight + 100)) {
              return scrollLinks[index];
            }


          }
        });

        // Get the id of the current element
        var cur2 = cur[cur.length - 1];
        let id = ""
        if (cur2) {
          if (cur2.firstChild) {
            id = cur2.firstChild.attributes.getNamedItem('id').value;
          }
        }
        if (lastId !== id) {
          lastId = id;
          links.removeClass('active');
          links.filter((link) => {
            return (links[link].id === '#' + id);
          }).addClass('active');
        }
      });

      $('.contact-submit-btn').on('click', (e) => {
        $(e.target).submit();
      });

      // esc hit - close form or close nav-collapse
      $(document).keyup((e) => {
        if (e.keyCode === 27) { // escape key maps to keycode `27`
          if ($('.subscribe-form').css('display') === 'block') {
            $('.subscribe-close').click();
          }
          else {
            $('.nav-right-hamburger, .nav-right-collapse').removeClass('on');
          }
        }
      });

      // subscribe clicked - show subscribe form
      $('.subscribe-btn').on('click', () => {
        $('.subscribe-overlay').show();
        $('.subscribe-form').show().animate({
          top: '30%'
        }, 200);
      });

      // subscribe-close or outside of form is clicked - exit form
      $('.subscribe-overlay, .subscribe-close').on('click', () => {
        $('.subscribe-overlay').hide();
        $('.subscribe-form').css('top', '28%');
        $('.subscribe-form').hide();
      });

      // hamburger nav clicked - toggle nav-collapse
      $('.nav-right-hamburger, .nav-right-collapse a').on('click', () => {
        $('.nav-right-hamburger').toggleClass('on');
        $('.nav-right-collapse').toggleClass('on');
      });
    });
  }
}

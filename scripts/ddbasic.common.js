(function ($) {
  'use strict';

  /**
   * Facebook block position.
   */
  Drupal.behaviors.facebookSharePosition = {
    attach: function (context) {
      var fb = $('.block-facebookshare', context);

      if (fb.length !== 0) {
        fb.prependTo($('.layout-wrapper', context));
      }
    }
  };

  /**
   * Toggle opening hours.
   */
  function toggleOpeningHours() {
    // Create toggle link
    $('<a />', {
      'class' : 'opening-hours-toggle js-opening-hours-toggle js-collapsed',
      'href' : Drupal.t('#toggle-opening-hours'),
      'text' : Drupal.t('Opening hours')
    }).insertBefore('.js-opening-hours-toggle-element');

    // Set variables
    var element = $('.js-opening-hours-toggle');
    var siteHeader = $('.site-header');
    var scrollOffset;
    var scrollToTarget;

    // Attach click
    element.on('click touchstart', function (event) {
      // Store clicked element for later use
      var element = this;

      // Toggle
      $(this).next('.js-opening-hours-toggle-element').slideToggle('fast', function () {
        // Toggle class
        $(element).toggleClass('js-collapsed js-expanded');

        // Set scroll offset
        if ($('.site-header.js-fixed').length) {
          // If the site header is fixed use the height
          scrollOffset = $(siteHeader).height();
        } else {
          // Else the window is scrolled to the top and we have to multiply the
          // height by 2 because it get's position fixed
          scrollOffset = $(siteHeader).height() * 2;
        }

        // Scroll to the top of the element
        if ($(element).parents('.js-library-opening-hours-target').length) {
          // If there is a wrapper element with the target class
          scrollToTarget = $(element).parents('.js-library-opening-hours-target');
        } else {
          // Else let's scroll to the element clicked
          scrollToTarget = $(element);
        }

        $.scrollTo(scrollToTarget, 500, {
          offset: -scrollOffset,
          axis: 'y'
        });

        // Remove focus from link
        $(element).blur();
      });

      // Prevent default (href)
      event.preventDefault();
    });
  }

  /**
   * Autofocus inputs.
   */
  function autofocusInpouts() {
    // Search button click
    $('.topbar-link-search').click(function() {
      var input = $('input[name="search_block_form"]');
      if ($(this).is('.active')) {
        input.focus();
      }
    });

    // Login button click
    $('.topbar-link-user').click(function() {
      var input = $('input[name="name"]');
      if ($(this).is('.active')) {
        input.focus();
      }
    });
  }

  /**
   * Hide listed empty elements.
   */
  function hideElement() {
    var selectors = [
      '.layout-wrapper'
    ];

    for (var i = selectors.length - 1; i >= 0; i--) {
      var $el = $(selectors[i]);

      if($.trim($el.html()) === '') {
        $el.hide();
      }
    }
  }

  // When ready start the magic.
  $(document).ready(function() {

    // Hide empty elements
    hideElement();

    // Search form and login form autofocus inputs.
    autofocusInpouts();

    // Toggle opening hours.
    toggleOpeningHours();

    // Toggle footer menu.
    $('.footer .pane-title').on('click', function() {
      var element = $(this).parent();
      $('.menu', element).toggle();
      $(this).toggleClass('js-toggled');
    });
  });

  /*
   * Automatic scroll down to content.
   */
  $(window).load(function() {
    // Search result page.
    if (document.location.pathname.indexOf('/search/ting/') === 0) {

      // If back button was pressed.
      if (window.location.hash !== '') {
        // id from previous page.
        var storedId = decodeURIComponent(window.location.href).match(/\d+-\w+:\d+/)[0];

        // Match stored id with id's from this page.
        $('.search-result .heading a').each(function () {
          var el = $(this);
          var id = decodeURIComponent(el.attr('href')).match(/\d+-\w+:\d+/)[0];

          // Scroll to item if match found.
          if (id === storedId) {
            $('html, body').animate({
              scrollTop: el.closest('.search-result').offset().top
            }, 'slow');
          }
        });
      }
    }
  });
})(jQuery);

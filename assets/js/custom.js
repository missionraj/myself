
!function($) {
    "use strict";
    /* ---------------------------------------------- /*
    * Preloader
    /* ---------------------------------------------- */
    $(window).on('load', function() {
        $('#loadingview').addClass("loaded");
    });

    /*
      navbar section
    */
    $('.navbar-toggler').on('click', function(){
        $(".aside").toggleClass('aside-open');
        $(".ham").toggleClass('active');
        $("body, html").toggleClass('overflow-hidden');
    });
}(window.jQuery);


// IIFE - Immediately Invoked Function Expression
(function (code) {

    // The global jQuery object is passed as a parameter
    code(window.jQuery, window, document);

}(function ($, window, document) {

    // The $ is now locally scoped

    // Listen for the jQuery ready event on the document
    $(function () {

        console.log('The DOM is ready');
        console.log("tjd.im/g2g")
        // The DOM is ready!

    });

    console.log('The DOM may not be ready');


    /************************************************
     * Sticky navigation bar scripts
     * Source: https://codepen.io/nathanlong/pen/kkLKrL
     *************************************************/
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
        myFunction()
    };

    // Get the offset position of the navbar
    // let sticky = navbar.offsetTop;
    let $header = $('#header');
    let $navbar = $('#navbar');

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky"
    // when you leave the scroll position
    function myFunction() {

        let bottom = $header.offset().top + $header.outerHeight(true);
        /*TODO: Switch to js if more efficient to get height in pure js .offsetHeight*/
        if ((bottom - window.pageYOffset) < $navbar.outerHeight(true)) {
            $navbar.addClass("sticky");
        }
        else {
            $navbar.removeClass("sticky");
        }
    }

    /************************************************
     * Contact section form scripts
     * Enables the label, which doubles as the place
     * holder text, to float out of the way when the
     * input field comes into focus.
     * .
     * .
     * Source: https://codepen.io/nathanlong/pen/kkLKrL
     *************************************************/
    let $input = $('input');
    let $textarea = $('#message');

    $input.focus(function () {
        $(this).parents('.form-group').addClass('focused');
    });

    $textarea.focus(function () {
        $(this).parents('.form-group').addClass('focused');
    });

    $input.blur(function () {
        let inputValue = $(this).val();
        if (inputValue === "") {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
        } else {
            $(this).addClass('filled');
        }
    });

    $textarea.blur(function () {
        let inputValue = $(this).val();
        if (inputValue === "") {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
        } else {
            $(this).addClass('filled');
        }
    });


    /************************************************
     * Enables textareas to auto expand with user input
     * .
     * .
     * Source: https://codepen.io/vsync/pen/frudD
     *************************************************/

    // Applied globally on all textareas with the "autoExpand" class
    $(document)
        .one('focus.autoExpand', 'textarea.autoExpand', function () {
            let savedValue = this.value;
            this.value = '';
            this.baseScrollHeight = this.scrollHeight;
            this.value = savedValue;
        })
        .on('input.autoExpand', 'textarea.autoExpand', function () {
            let minRows = this.getAttribute('data-min-rows') | 0, rows;
            this.rows = minRows;

            /*I modified the original code switching from ceil to floor
            * otherwise when inputting on the first line of text the bottom
            * of the box jumps 2 rows instead of one. This is because the ciel
            * function rounds of the result of the division. */
            rows = Math.floor((this.scrollHeight - this.baseScrollHeight) / 16);
            this.rows = minRows + rows;
        });
    /************************************************
     * Form submission scripts. Sends an email using smtpjs.com api
     * .
     * .
     * Source: https://stackoverflow.com/questions/45634088/how-to-prevent-page-from-reloading-after-form-submit-jquery/45634140
     *************************************************/

    // Listen to submit event on the <form> itself!
    $('#contactForm').submit(function (e) {

        /*Prevent the page from refreshing on form submit*/
        e.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();

        console.log("Name: " + name + "Email: " + email + "\n");

    });


    /************************************************
     *
     * .
     * .
     * Source:
     *************************************************/
    // let $menu = $('#menu');

    $('#menu-btn').click(function () {
        // $menu.toggleClass('menu-open');
        $('#navbar').toggleClass('menu-open');

        /*There has to be a better way*/
        $('#menu-icon-bar-0').toggleClass('menu-open');
        $('#menu-icon-bar-1').toggleClass('menu-open');
        $('#menu-icon-bar-2').toggleClass('menu-open');
        $('#menu-icon-bar-3').toggleClass('menu-open');
        console.log('clicked menu btn');
    });

}));
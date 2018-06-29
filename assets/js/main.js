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

    /*
    * TODO:
    * TODO: RE ORGANIZE FILE
    * TODO:
    * */

    /************************************************
     * Sticky navigation bar scripts
     * Source: https://codepen.io/nathanlong/pen/kkLKrL
     *************************************************/
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
        toggleNavBar()
    };

    let $header = $('#header');
    let $navbar = $('#navbar');

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky"
    // when you leave the scroll position
    function toggleNavBar() { // TODO: Possibly make more efficient
        if (!atPageTop()) {
            $navbar.addClass("sticky");
        }
        else if (!Menu.isToggled) {
            $navbar.removeClass("sticky");
        }
    }

    //TODO: Comment
    function atPageTop() { // TODO: Arrow?
        let bottom = $header.offset().top + $header.outerHeight(true);
        return !((bottom - window.pageYOffset) < $navbar.outerHeight(true))
    }

    /************************************************
     * Simple menu manager object
     * Source: https://codepen.io/nathanlong/pen/kkLKrL
     *************************************************/
    let Menu = {
        isToggled: false,

        toggleMenu() {

            this.isToggled = !this.isToggled;

            $navbar.toggleClass('menu-open');
            $('#navbar-items').toggleClass('menu-open');

            /*There has to be a better way*/
            $('#menu-icon-bar-0').toggleClass('menu-open');
            $('#menu-icon-bar-1').toggleClass('menu-open');
            $('#menu-icon-bar-2').toggleClass('menu-open');
            $('#menu-icon-bar-3').toggleClass('menu-open');
        }
    };

    /************************************************
     * Contact section form scripts
     * Enables the label, which doubles as the place
     * holder text, to float out of the way when the
     * input field comes into focus.
     * .
     * .
     * Source: https://codepen.io/nathanlong/pen/kkLKrL
     *************************************************/
    let $input = $('.form-input');
    let $message = $('#message');

    $input.focus(function () {
        $(this).parents('.form-group').addClass('focused');
    });

    $input.blur(function () {
        let inputValue = $(this).val();
        if (inputValue === "") {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
        } else {
            $(this).addClass('filled');
            $(this).parent().removeClass('form-invalid');
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
     * Functions to launch and close a modal
     * .
     * .
     * Source: https://stackoverflow.com/questions/45634088/how-to-prevent-page-from-reloading-after-form-submit-jquery/45634140
     *************************************************/
    function launchModal() {
        $('body').toggleClass('disable-scroll');
        $('.modal').attr("aria-hidden", "false")

        /* Reveal popup */
    }

    function closeModal() {
        $('body').toggleClass('disable-scroll');
        $('.modal').attr("aria-hidden", "true")
    }


    $('#dialog-btn').click(function () {
        $('body').toggleClass('disable-scroll');
        $('.modal').attr("aria-hidden", "true")
    });

    /************************************************
     * Form submission scripts. Sends an email using smtpjs.com api
     * .
     * .TODO: Shorten the link
     * Source: https://stackoverflow.com/questions/45634088/how-to-prevent-page-from-reloading-after-form-submit-jquery/45634140
     *************************************************/



        // References to form entries
    let $name = $('#name');
    let $email = $('#email');
    let $subject = $('#subject');

    // Listen to submit event on the <form> itself!
    $('#contactForm').submit(function (e) {

        let validForm = true;

        /*Prevent the page from refreshing on form submit*/
        e.preventDefault();

        const RECEIVER_EMAIL = "taylor@dawson.im";
        const smpt_token = "98156325-63be-4e23-ad2c-84c60b42b54a";

        // let inquirers_number = $("#number").val();

        /* Validate the in form data */
        $('.form-input').each(function (index, input_element) {
                let input_text = $(input_element).val();
                if (input_text === "") {
                    $(input_element).parent().addClass('form-invalid');
                    validForm = false;
                }
            }
        );

        if (validForm) {

            /* Reset the form */

            // Email.send(from_email,
            //     RECEIVER_EMAIL,
            //     subject, /* CONSIDER: This being the type of picture wanted (maybe)*/
            //     `Name: ${inquirers_name} \n Message: \n ${message}`,
            //     {token:smpt_token});

            console.log("sending email on valid form")
        }
        else {
            console.log("invalid form")
        }
        // CONSIDER: Might not need these or the ones above
        let inquirers_name = $name.val();
        let from_email = $email.val();
        let subject = $subject.val();
        let message = $message.val();

        /*Verify that email is valid before continuing*/

        /*If the user's email is invalid. Inform the user.*/
        /*If the user thinks that they received the invalid email message in error,
        have the user try again. If it fails a second time then send the email with a default email and
        include the seeming invalid email in the body. In addition send the email to the server admin for
        further diagnosis on why the error occurred. */

        /*Otherwise go on to launch verification modal*/

        /*Launch verification model before sending*/


        /*If user gives consent to sending email then send away*/

        /*Otherwise close modal and don't send nothing*/

        // Email.send(from_email,
        //     to_email,
        //     subject, /* CONSIDER: This being the type of picture wanted (maybe)*/
        //     `Name: ${inquirers_name} \n Message: \n ${message}`,
        //     {token:smpt_token});

    });


    /************************************************
     * TODO: Fill in
     * .
     * .
     * Source:
     *************************************************/
    $('#menu-btn').click(function () {
        Menu.toggleMenu();
        // Check to see if the sticky-nav has been toggled
        if (atPageTop() && !$navbar.hasClass("sticky")) {
            $navbar.addClass("sticky");
        }
        else if (atPageTop() && $navbar.hasClass("sticky")) {
            $navbar.removeClass("sticky");
        }
        console.log(Menu.isToggled);
    });

    $('.navbar-item').click(function () {
        Menu.toggleMenu();
    });

    /************************************************
     * Function to toggle the menu
     * .
     * .
     * Source:
     *************************************************/
    /*let toggleMenu = function () {
        $navbar.toggleClass('menu-open');
        $('#navbar-items').toggleClass('menu-open');

        /*There has to be a better way
        $('#menu-icon-bar-0').toggleClass('menu-open');
        $('#menu-icon-bar-1').toggleClass('menu-open');
        $('#menu-icon-bar-2').toggleClass('menu-open');
        $('#menu-icon-bar-3').toggleClass('menu-open');
    }*/

}));
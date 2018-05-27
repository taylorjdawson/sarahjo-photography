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

    /*Maybe remove this? or put it in an else stament idk...*/
    console.log('The DOM may not be ready');

    // When the user scrolls the page, execute myFunction
    // window.onscroll = function () {
    //     myFunction()
    // };

    // Get the header
    //let navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    //let sticky = navbar.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky"
    // when you leave the scroll position
    // function myFunction() {
    //     if (window.pageYOffset >= sticky) {
    //         navbar.classList.add("sticky");
    //     } else {
    //         navbar.classList.remove("sticky");
    //     }
    // }
}));
// IIFE - Immediately Invoked Function Expression
(function(code) {

    // The global jQuery object is passed as a parameter
    code(window.jQuery, window, document);

}(function($, window, document) {

    // The $ is now locally scoped

    // Listen for the jQuery ready event on the document
    $(function() {

        console.log('The DOM is ready');

        // The DOM is ready!

    });

    /*Maybe remove this? or put it in an else stament idk...*/
    console.log('The DOM may not be ready');

    /*Source: https://codepen.io/JTParrett/pen/BkDie*/
    $.fn.moveIt = function(){
        var $window = $(window);
        var instances = [];

        $(this).each(function(){
            instances.push(new moveItItem($(this)));
        });

        window.addEventListener('scroll', function(){
            var scrollTop = $window.scrollTop();
            instances.forEach(function(inst){
                inst.update(scrollTop);
            });
        }, {passive: true});
    };

    var moveItItem = function(el){
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed'));
    };

    moveItItem.prototype.update = function(scrollTop){
        this.el.css('transform', 'translateY(' + (scrollTop / this.speed) + 'px)');
    };

    // Initialization
    $(function(){
        $('[data-scroll-speed]').moveIt();
    });

}));
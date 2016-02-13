Template.HomeLayout.events({
    //click to toggle answer view
    "click #viewCard": function() {
        $('.card span').css({'opacity': '1'});
    }

});



Template.HomeLayout.onRendered(function () {
    // Function to animate flash card content
    var cardAnimate = function() {
        $('.card p').delay(2000).animate({'color': '#85a4ce'});
        $('.card p').delay(6000).animate({'color': '#9be893'});
        $('.card p').delay(8000).animate({'color': '#000'});
        $('.card span').delay(2000).animate({'color': '#85a4ce'});
        $('.card span').delay(6000).animate({'color': '#9be893'});
        $('.card span').delay(8000).animate({'color': '#000'});
    };
    //calls the function
    cardAnimate();
});

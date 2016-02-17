Template.HomeLayout.events({
    //click to toggle answer view
    "click #viewCard": function() {
        $('.card span').css({'opacity': '1'});
    },
    //cycle through example flash cards
    "click #nextCard": function() {
        $('.card p').replaceWith("<p>Wow, Next Question!</p>");
        $('.card span').replaceWith("<span>You probably know how flash cards work.</span>");
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

        setInterval(cardAnimate, 20000);
    };
    //calls the function
    cardAnimate();
});

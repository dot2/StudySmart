Template.DeckSingle.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('singleFlashcards', id);
    });
});

//grabs the id of the card user clicks on and show the data
Template.DeckSingle.helpers({
    flashcard: ()=> {
        var id = FlowRouter.getParam('id');
        return FlashCards.findOne({_id: id});
    }
});

Template.DeckSingle.events({
    "click .reveal-btn": function() {
            // alert(this.termID);
            if (this.termID === this.termID) {
                $(".reveal").animate({
                    'margin-top': '0px',
                    'opacity': '1'
                }, 1);
        }
    },
    "click .reveal": function() {
        $(".reveal").animate({
            'margin-top': '200%',
            'opacity': '0'
        }, 1)
    }
});

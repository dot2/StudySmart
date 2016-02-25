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

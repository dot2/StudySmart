Template.UserHome.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('flashcards');
    });
});


Template.UserHome.helpers({
    flashcards: ()=> {
        return FlashCards.find({});
    }
});

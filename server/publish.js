Meteor.publish('flashcards', function() {
    return FlashCards.find({author: this.userId});
});

Meteor.publish('singleFlashcards',  function(id) {
    check(id, String);
    return FlashCards.find({_id: id});
});

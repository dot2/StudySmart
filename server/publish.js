Meteor.publish('flashcards', function() {
    return FlashCards.find({author: this.userId});
});

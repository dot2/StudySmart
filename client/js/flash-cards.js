Meteor.subscribe('flashcards');

Template.UserHome.helpers({
    flashcards: ()=> {
        return FlashCards.find({});
    }
});

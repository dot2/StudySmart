FlashCards = new Mongo.Collection('flashcards');

//allows user to insert into flashcard db if signed in
FlashCards.allow({
    insert: function(userId, doc) {
        return !!userId;
    }
});


Term = new SimpleSchema({
    name: {
        type: String,
        label: "Question"
    },
    def: {
        type: String,
        label: "Answer"
    }
});




FlashCardsSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Deck Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    terms: {
        type: [Term]
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});


FlashCards.attachSchema( FlashCardsSchema );

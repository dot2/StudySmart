FlashCards = new Mongo.Collection('flashcards');

FlashCardsSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Deck Name"
    },
    desc: {
        type: String,
        label: "Description"
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

if(Meteor.isClient) {
    Accounts.onLogin(function() {
        //automatically changes user to userhome route if logged in
        FlowRouter.go('userhome');
    });
    Accounts.onLogout(function() {
        //automatically changes user to landing route if logged out
        FlowRouter.go('landing');
    });
}

//redirects users back to landing page if logged out
FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()) {
        FlowRouter.go('landing');
    }
}]);

//landing page route
FlowRouter.route('/', {
    name: 'landing',
    action() {
        //gives user permisson to go to user home page if logged in
        if(Meteor.userId()) {
            FlowRouter.go('userhome');
        }
        BlazeLayout.render('HomeLayout');
    }
});
//user home page route
FlowRouter.route('/home', {
    name: 'userhome',
    action() {
        BlazeLayout.render('MainLayout', {main: 'UserHome'});
    }
});
//takes user to single deck view on click
FlowRouter.route('/flashcards/:id' , {
    name: 'flashcards',
    action() {
        BlazeLayout.render('MainLayout', {main: 'DeckSingle'});
    }
});

FlowRouter.route(['/','/home'], {
	name: 'home',
    subscriptions: function(params) {

    },
    action: function(params) {
        console.log("Yeah! We are on the home page");
        BlazeLayout.render("appLayout", {area: "home"});
    }
});

FlowRouter.route('/dashboard', {
	name: 'dashboard',
	triggersEnter: [AccountsTemplates.ensureSignedIn],
    subscriptions: function(params) {
        console.log("subscribe and register this subscription as 'myItems'");
        this.register('myItems', Meteor.subscribe('items'));
    },
    action: function(params) {
        console.log("Yeah! We are on the dashboard");
        BlazeLayout.render("appLayout", {area: "dashboard"});
    }
});

FlowRouter.route('/dashboard/:postId', {
	name: 'post',
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    subscriptions: function(params) {
        console.log("subscribe and register this subscription as 'myItems'");
        this.register('myItems', Meteor.subscribe('items',params.postId));
    },
    action: function(params) {
        console.log("Yeah! We are on the post:", params.postId);
        BlazeLayout.render("appLayout", {area: "dashboard"});
    }
});

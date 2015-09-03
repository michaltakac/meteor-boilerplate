Template.dashboard.onRendered(function() {

});


Template.dashboard.helpers({
	items: function(){
		var postId = FlowRouter.current().params.postId;
		if(postId) return [Items.findOne(postId)];
		else return Items.find();
	}
});
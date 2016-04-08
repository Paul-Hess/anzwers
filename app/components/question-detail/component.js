import Ember from 'ember';

export default Ember.Component.extend({
	hiddenConfirm: false,
	actions: {
		
		
		saveAnswer(params) {
			this.sendAction('saveAnswer', params);
		},
		vote(direction, question) {
			if (direction === "up") {
				this.sendAction("upVote", question);
			} else if (direction === "down") {
				this.sendAction("downVote", question);
			}
		}
	}
});

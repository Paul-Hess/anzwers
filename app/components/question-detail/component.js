import Ember from 'ember';

export default Ember.Component.extend({
	compare: Ember.inject.service(),
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
		},

		addItem(item) {
			this.get('compare').addItem(item);
			console.log(this.get('compare').qAndAs);
		}
	}
});

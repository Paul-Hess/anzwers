import Ember from 'ember';

export default Ember.Component.extend({
	hiddenConfirm: false,
	actions: {
		delete(question) {
				this.sendAction('delete', question);
				this.set('hiddenConfirm', false);
		},
		confirm(answer) {
			if(answer === "yes") {
				this.set('hiddenConfirm', true);
			} else {
				this.set('hiddenConfirm', false);
			}
		},
		update(question, params) {
			this.sendAction('update', question, params);
		},
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

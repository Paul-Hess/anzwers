import Ember from 'ember';

export default Ember.Component.extend({
	hiddenDelete: false,
	actions: {
		delete(question) {
			this.sendAction('delete', question);
			this.set('hiddenDelete', false);
		},
		confirm(answer) {
			if(answer === "yes") {
				this.set('hiddenDelete', true);
			} else {
				this.set('hiddenDelete', false);
			}
		},
		update(question, params) {
			this.sendAction('update', question, params);
		},
		saveQuestion(params) {
			this.sendAction('saveQuestion', params);
		}
	}
});
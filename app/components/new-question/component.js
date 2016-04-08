import Ember from 'ember';

export default Ember.Component.extend({
	askNewQuery: false,
		actions: {
			toggleForm() {
				if (this.askNewQuery === false) {
					this.set('askNewQuery', true);
				} else {
					this.set('askNewQuery', false);
				}
			},
		saveQuestion() {
			var params = {
				user: this.get('user'),
				author: this.get('user').get('email'),
				notes: this.get('notes'),
				query: this.get('query'),
				voteTally: 1
			};
			this.sendAction('saveQuestion', params);
			this.set('askNewQuery', false);
		}
	}
});

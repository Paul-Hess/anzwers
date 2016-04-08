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
		saveQuestion1() {
			var params = {
				author: this.get('author'),
				notes: this.get('notes'),
				query: this.get('query'),
				voteTally: 1
			};
			this.sendAction('saveQuestion2', params);
			this.set('askNewQuery', false);
		}
	}
});

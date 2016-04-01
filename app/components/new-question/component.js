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
				query: this.get('query')
			};
			this.sendAction('saveQuestion2', params);
		}
	}
});

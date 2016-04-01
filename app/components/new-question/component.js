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
		}
	}
});

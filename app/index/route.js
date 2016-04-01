import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
			questions: this.store.findAll('question'),
			answers: this.store.findAll('answer')
		});
	},
	actions: {
		saveQuestion3(params) {
			this.store.createRecord('question', params);
			this.transitionTo('index');
		}

	}
});

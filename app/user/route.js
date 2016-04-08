import Ember from 'ember';

export default Ember.Route.extend({
	model(params)  {
		return Ember.RSVP.hash({
			user: this.store.findRecord('user', params.user_id),
			questions: this.store.findAll('question'),
			answers: this.store.findAll('answer')
		});
	}
});

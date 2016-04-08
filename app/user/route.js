import Ember from 'ember';

export default Ember.Route.extend({
	model(params)  {
		return Ember.RSVP.hash({
			user: this.store.findRecord('user', params.user_id),
			questions: this.store.findAll('question'),
			answers: this.store.findAll('answer')
		});
	}, actions: {
		saveQuestion(params) {
			var newQuestion = this.store.createRecord('question', params);
			var user = params.user;
			console.log(params);
			newQuestion.save().then(function() {
				user.get('questions').addObject(newQuestion);
				user.save();
			});
		},
		update(obj, params) {
			Object.keys(params).forEach(function(key) {
				if(params[key] !== undefined) {
					obj.set(key, params[key]);
				}
			});
			obj.save();
		},
	}
});

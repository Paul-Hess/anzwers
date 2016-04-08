import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
			currentAuthUser: this.get('session').get('currentUser'),
			questions: this.store.findRecord('question', params.question_id),
			answers: this.store.findAll('answer'),
			users: this.store.findAll('user')
		});
	},

	actions: {
		saveAnswer(params) {
				let newAnswer = this.store.createRecord('answer', params);
				let question = params.question;
				question.get('answers').addObject(newAnswer);
				newAnswer.save().then(function() {
					return question.save();
				});
		},

		deleteAnswer(answer) {
			answer.destroyRecord();
		},

		updateAnswer(obj, params) {
			Object.keys(params).forEach(function(key) {
				if(params[key] !== undefined) {
					obj.set(key, params[key]);
				}
			});
			obj.save();
		},

		upVote(obj) {
			let tally = obj.get('voteTally');
			let upTally = tally+=1;
			obj.set("voteTally", upTally);
			obj.save();
		},

		downVote(obj) {
			let tally = obj.get('voteTally');
			let downTally = tally-=1;
			obj.set('voteTally', downTally);
			obj.save();
		}
	}
});

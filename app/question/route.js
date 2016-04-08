import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
			questions: this.store.findRecord('question', params.question_id),
			answers: this.store.findAll('answer')
		});
	},
	actions: {
		saveAnswer(params) {
			var newAnswer = this.store.createRecord('answer', params);
			var question = params.question;
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
			var tally = obj.get('voteTally');
			var upTally = tally+=1;
			obj.set("voteTally", upTally);
			obj.save();
			console.log(obj.get('voteTally'));
		},

		downVote(obj) {
			var tally = obj.get('voteTally');
			var downTally = tally-=1;
			obj.set('voteTally', downTally);
			obj.save();
			console.log(obj.get('voteTally'));
		}
	}
});

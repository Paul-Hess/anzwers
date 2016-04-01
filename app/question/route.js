import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
			questions: this.store.findRecord('question', params.question_id),
			answers: this.store.findAll('answer')
		});
	},
	actions: {
		delete(question) {
			var answerDelete = question.get('answers').map(function(answer) {
				return answer.destroyRecord();
			});
			Ember.RSVP.all(answerDelete).then(function() {
				return question.destroyRecord();
			});
			this.transitionTo('index');
		},

		update(obj, params) {
			Object.keys(params).forEach(function(key) {
				if(params[key] !== undefined) {
					obj.set(key, params[key]);
				}
			});
			obj.save();
		},
		
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

		upVote(answer) {
			var tally = answer.get('voteTally');
			console.log(tally);
			var upTally = tally+=1;
			answer.set("voteTally", upTally);
			answer.save();
			console.log(answer.get('voteTally'));
		},

		downVote(answer) {
			var tally = answer.get('voteTally');
			console.log(tally);
			var downTally = tally-=1;
			answer.set('voteTally', downTally);
			answer.save();
			console.log(answer.get('voteTally'));
		}
	}
});

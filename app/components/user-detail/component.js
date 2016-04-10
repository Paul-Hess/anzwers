import Ember from 'ember';

export default Ember.Component.extend({
	hiddenDeleteQuestion: false,
	hiddenDeleteAccount: false,
	adminAccount: false,

	questionVotesArray: Ember.computed.map('user.questions', function(question, index) {
		return question.get('voteTally');
	}),

	answerVotesArray: Ember.computed.map('user.answers', function(answer, index) {
		return answer.get('voteTally');
	}),

	totalVotes: Ember.computed('questionVotesArray', 'answerVotesArray', function() {
		let count1 = 0;
		let count2 = 0;
		for (var i = 0; i < this.get('questionVotesArray').get('length'); i++) {
			count1 += this.get('questionVotesArray')[i];
		}

		for ( i = 0; i < this.get('answerVotesArray').get('length'); i++) {
			count2 += this.get('answerVotesArray')[i];
		}

		return count1+= count2;

	}),

	actions: {

		deleteQuestion(question) {
			this.sendAction('deleteQuestion', question);
			this.set('hiddenDeleteQuestion', false);
		},

		deleteUser(user) {
			var params = {
				email: this.get('email'),
				password: this.get('password')
			};
			this.sendAction('deleteUser', user, params);
			this.set('hiddenDeleteAccount', false);
		},

		confirm(param ,answer) {
			if(answer === "yes") {
				this.set(param, true);
			} else {
				this.set(param, false);
			}
		},

		update(question, params) {
			this.sendAction('update', question, params);
		},

		saveQuestion(params) {
			this.sendAction('saveQuestion', params);
		},

		vote(direction, answer) {
			if (direction === "up") {
				this.sendAction("upVote", answer);
			} else if (direction === "down") {
				this.sendAction("downVote", answer);
			}
		},

	}

});

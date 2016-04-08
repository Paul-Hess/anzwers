import Ember from 'ember';

export default Ember.Component.extend({
	hiddenDeleteQuestion: false,
	hiddenDeleteAccount: false,
	adminAccount: false,
	votesArray: Ember.computed.map('user.questions', function(question, index) {
		return question.get('voteTally');
	}),
	totalVotes: Ember.computed('votesArray', function() {
		let count = 0;
		for (var i = 0; i < this.get('votesArray').get('length'); i++) {
			count += this.get('votesArray')[i];
		}
		return count;
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

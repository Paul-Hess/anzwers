import Ember from 'ember';

export default Ember.Component.extend({
	hiddenDelete: false,
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
			this.set('hiddenDelete', false);
		},
		confirm(answer) {
			if(answer === "yes") {
				this.set('hiddenDelete', true);
			} else {
				this.set('hiddenDelete', false);
			}
		},
		update(question, params) {
			this.sendAction('update', question, params);
		},
		saveQuestion(params) {
			this.sendAction('saveQuestion', params);
		}
	}
});

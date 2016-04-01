import Ember from 'ember';

export default Ember.Component.extend({
	answerRemove: false,

	actions: {
		confirmAnswerDelete(answer) {
			if(answer === 'yes') {
				this.set('answerRemove', true);
			} else {
				this.set('answerRemove', false);
			}
		},

		deleteAnswer(answer) {
			this.sendAction('deleteAnswer', answer);
			this.set('answerRemove', false);
		},

		updateAnswer(answer, params) {
			this.sendAction('updateAnswer', answer, params);
		},
		
		vote(direction, answer) {
			if(direction === "up") {
				this.sendAction('upVote', answer);
			} else {
				this.sendAction('downVote', answer);
			}
		}
	}
});

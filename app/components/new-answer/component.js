import Ember from 'ember';

export default Ember.Component.extend({
	answerQuestion: false,
	actions: {
		toggleQuestion() {
			if (this.answerQuestion === false) {
				this.set('answerQuestion', true);
			} else {
				this.set('answerQuestion', false);
			}
		},
		saveAnswer() {
			var params = {
				user: this.get('currentUser'),
				response: this.get('response'),
				author: this.get('author'),
				question: this.get('question'),
				voteTally: 1
			};
			this.sendAction('saveAnswer', params);
			this.set('answerQuestion', false);
		}
	}
});

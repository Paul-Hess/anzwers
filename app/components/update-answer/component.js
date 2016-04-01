import Ember from 'ember';

export default Ember.Component.extend({
	updateForm: false,
	actions: {
		updateAnswer(answer) {
			var params = {
				response: this.get('response'),
			};
			this.sendAction("updateAnswer", answer, params);
			this.set('updateForm', false);
		},
		toggleUpdate() {
			if(this.updateForm === false) {
				this.set('updateForm', true);
			} else {
			this.set('updateForm', false);
			}
		}

	}
});

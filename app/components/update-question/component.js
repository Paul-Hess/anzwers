import Ember from 'ember';

export default Ember.Component.extend({
	updateForm: false,
	actions: {
		update(question) {
			var params = {
				query: this.get('query'),
				notes: this.get('notes')
			};
			this.sendAction("update", question, params);
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

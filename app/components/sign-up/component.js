import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		signUp(params) {
			this.sendAction('signUp', params);
		}
	}
});

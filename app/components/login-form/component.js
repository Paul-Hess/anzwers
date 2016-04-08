import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		logIn() {
			var params = {
				email: this.get('email'),
				password: this.get('password')
			};
			this.sendAction('logIn', params);
		}
	}
});

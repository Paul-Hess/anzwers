import Ember from 'ember';

export default Ember.Service.extend({
	userIsTrue: false,
	authUser(currentEmail, authEmail) {
		if (currentEmail === authEmail) {
			this.set('userIsTrue', true);
		} else {
			this.set('userIsTrue', false);
		}
	}
});

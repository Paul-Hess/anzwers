import Ember from 'ember';

export default Ember.Service.extend({
	currentUserId: '',
	actions: {
		authorize(uid) {
		 this.set('currentUserId', uid);
		}
	}

});

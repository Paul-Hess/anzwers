import Ember from 'ember';

export default Ember.Route.extend({
	// model(params) {
	// 	return this.store.findRecord('user', params.user_id);
	// },
	actions: {
		logIn(params) {
			let _this = this;
			this.get('session').open('firebase', {
				provider: 'password',
				email: params.email,
				password: params.password,
			}).then((data) => {
				this.transitionTo('user', data.uid);
				_this.set('email', '');
				_this.set('password', '');
			}, (error) => {
				alert(error);
			});
		}
	}
});

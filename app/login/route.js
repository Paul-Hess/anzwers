import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		logIn(params) {
			let _this = this;
			this.get('session').open('firebase', {
				provider: 'password',
				email: params.email,
				password: params.password,
			}).then((data) => {
				_this.transitionTo('user', data.uid);
				_this.set('email', '');
				_this.set('password', '');
			}, (error) => {
				alert(error);
			});
		}
	}
});

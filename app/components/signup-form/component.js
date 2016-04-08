import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		signUp() {
			let password = this.get('password');
			let passwordConfirm = this.get('passwordConfirmation');
			if(password === passwordConfirm) {
				var params = {
					email:  this.get('email'),
					password: password
				};
				this.sendAction('signUp', params);
				this.set('email', '');
				this.set('password', '');
				this.set('passwordConfirmation', '');
			} else {
				alert('password did not match confirmation');
				this.set('password', '');
				this.set('passwordConfirmation', '');
			}
		}
	}
});

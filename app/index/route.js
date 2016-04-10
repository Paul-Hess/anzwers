import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
			answers: this.store.findAll('answer'),
			questions: this.store.findAll('question'),
			users: this.store.findAll('user')
		});
	},

	actions: {
		signUp(params) {
      var _this = this;
      var ref = new Firebase('https://anzwers.firebaseio.com/');
      ref.createUser({
        email: params.email,
        password: params.password
      },function(error, userData) {
        if(error) {
          alert(error);
        } else {
          var newUser = _this.store.createRecord('user', {id: userData.uid, email: params.email});
          newUser.save();
        }
      });
    }
	}
});

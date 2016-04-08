import Ember from 'ember';

export default Ember.Route.extend({
	model(params)  {
		return Ember.RSVP.hash({
			user: this.store.findRecord('user', params.user_id),
			questions: this.store.findAll('question'),
			answers: this.store.findAll('answer')
		});
	}, 
	actions: {
		saveQuestion(params) {
			let newQuestion = this.store.createRecord('question', params);
			let user = params.user;
			console.log(params);
			newQuestion.save().then(function() {
				user.get('questions').addObject(newQuestion);
				user.save();
				console.log('success', " question saved!")
			});
		},
		update(obj, params) {
			Object.keys(params).forEach(function(key) {
				if(params[key] !== undefined) {
					obj.set(key, params[key]);
				}
			});
			obj.save();
		},
		deleteQuestion(question) {
			let answerDelete = question.get('answers').map(function(answer) {
				return answer.destroyRecord();
			});
			Ember.RSVP.all(answerDelete).then(function() {
				return question.destroyRecord();
			});
		},
		deleteUser(user, params) {
			let ref = new Firebase('https://anzwers.firebaseio.com/');
			let _this = this;
			let answerDelete = user.get('questions').map(function(question) {
				question.get('answers').map(function(answer) {
					return answer.destroyRecord();
				});
			});
				Ember.RSVP.all(answerDelete).then(function() {
					let questionDelete = user.get('questions').map(function(question) {
						return question.destroyRecord();
					}); 
					Ember.RSVP.all(questionDelete).then(function() {
							user.destroyRecord();
							ref.removeUser({
								email: params.email,
								password: params.password
							}, function(error) {
								if(error) {
									switch (error.code) {
										case 'INVALID_USER':
											console.log('error', 'That account does not exist');
											break;
										case 'INVALID_PASSWORD':
											console.log('error', 'password incorrect');
											break;
										default: 
											console.log('error', error);
									}
								} else {
									console.log('success', 'account deleted, goodbye!');
									_this.get('session').close();
									_this.transitionTo('index');
								}
							});
					});
				});
				this.transitionTo('index');
		}
	}
});

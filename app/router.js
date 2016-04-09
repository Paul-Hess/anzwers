import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('question', {path: '/question/:question_id'});
  this.route('learn');
  this.route('contact');
  this.route('user', {path: '/user/:user_id'}, function() {
    this.route('questions', {path: 'question/:question_id'}, function() {
      this.route('answer');
    });
  });
  this.route('login');
  this.authenticatedRoute('protected');
});

export default Router;

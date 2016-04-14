import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('question', {path: '/question/:question_id'});
  this.route('learn');
  this.route('contact');
  this.authenticatedRoute('user', {path: '/user/:user_id'});
  this.route('login');
  this.route('comparison');
});

export default Router;

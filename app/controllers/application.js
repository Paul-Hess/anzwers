
import Ember from 'ember';

export default Ember.Controller.extend({  
  actions: {
    logOut() {
      this.get('session').close();
      this.transitionTo('index');
    }
  }
});
import Ember from 'ember';

export default Ember.Service.extend({
	qAndAs: [],

	addItem(item) {
		this.get('qAndAs').pushObject(item);
	}
});

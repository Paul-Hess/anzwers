import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.belongsTo('user', {async: true}),
	query: DS.attr(),
	author: DS.attr(),
	notes: DS.attr(),
	answers: DS.hasMany('answer', {async: true}),
	voteTally: DS.attr()
});

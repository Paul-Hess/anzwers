import DS from 'ember-data';

export default DS.Model.extend({
	response: DS.attr(),
	author: DS.attr(),
	question: DS.belongsTo('question', {async: true}),
	voteTally: DS.attr() 
});

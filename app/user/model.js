import DS from 'ember-data';

export default DS.Model.extend({
	email: DS.attr(),
	answers: DS.hasMany('answer', {async: true}),
	questions: DS.hasMany('question', {async: true})
  
});

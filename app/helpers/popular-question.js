import Ember from 'ember';

export function popularQuestion(params/*, hash*/) {
	let question = params[0];
	let tally = question.get('voteTally');
	let answersLength = question.get('answers').get('length');
	if(answersLength > 5 && tally > 5) {
		return Ember.String.htmlSafe('<div class="popular"></div>');
	}
}

export default Ember.Helper.helper(popularQuestion);

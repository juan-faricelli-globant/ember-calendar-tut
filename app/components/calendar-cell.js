import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',
  // className: ['bg-warning']
  classNameBindings: ['bgWarning', 'bgSuccess'], /*function names*/
  bgWarning: Ember.computed('day.currMonth', function() {
    /* not current month*/
    return !this.get('day.currMonth');
  }),
  bgSuccess: Ember.computed('day.value', function() {
    /* has value month*/
    return this.get('day.value');
  }),
  click() {
    let date = this.get('day.date');

    if (this.get('day.currMonth') && moment().isSameOrAfter(date)) {
      let value = !this.get('day.value');
      this.set('day.value', value);
      this.get('markDay')(date, value);
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  calendarSorting: ['name:desc'],
  sortedCalendars: Ember.computed.sort('model', 'calendarSorting')
});

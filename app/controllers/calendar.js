import Ember from 'ember';
/* global moment */

export default Ember.Controller.extend({
  monthName: moment().format('MMMM YYYY')
});

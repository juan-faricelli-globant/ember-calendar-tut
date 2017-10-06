import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return this.store.createRecord('calendar', {
    //   name: this.get('name'),
    //   notes: this.get('notes')
    // });
    return this.store.createRecord('calendar');
  }
});

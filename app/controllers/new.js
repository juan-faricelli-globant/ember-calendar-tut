import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      let newCalendar = this.store.createRecord('calendar', {
        name: this.get('name'),
        notes: this.get('notes')
      });

      newCalendar.save().then(
        () => {
          this.get('model').deleteRecord();
          this.setProperties({name: '', notes: ''});
          this.transitionToRoute('calendars');
        },
        () => console.log('model did not save')
      );
    },
    cancel() {
      this.get('model').deleteRecord();
      this.transitionToRoute('calendars');
    }
  }
});

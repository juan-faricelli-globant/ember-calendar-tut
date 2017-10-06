import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(calendarId) {
      this.store.findRecord('calendar', calendarId)
      .then(
        (updateCalendar) => {
          updateCalendar.set('name', this.get('model.name'));
          updateCalendar.set('notes', this.get('model.notes'));
          updateCalendar.save();

          this.transitionToRoute('calendars');
        },
        () => console.log('model did not update')
      );
    },
    delete(calendarId) {
      this.store.findRecord('calendar', calendarId)
      .then(
        (calendar) => {
          calendar.destroyRecord();
          this.transitionToRoute('calendars');
        },
        () => console.log('model did not destroy')
      );
    },
    cancel() {
      this.transitionToRoute('calendars');
    }
  }
});

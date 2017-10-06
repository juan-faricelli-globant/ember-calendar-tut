import Ember from 'ember';
import DS from 'ember-data';
/* global moment */

function getValue(days, dayObj) {
  let day = days.filter(day => day.get('date') === dayObj.date)[0];

  if (day) {
    dayObj.value = day.get('value');
  }
}

export default Ember.Component.extend({
  weeks: Ember.computed('days', function() {
    console.log(this.get('days'));
    return DS.PromiseArray.create({
      promise: this.get('days').then(function(days) {
        let day = moment().date(1),
        currMonth = day.month(),
        weeks = [];

        if (day.day() !== 0) {
          day.day(0);
        }

        while (day.month() <= currMonth) {
          let week = [];

          for (var i = 0; i < 7; i++) {
            let dayObj = {
              date: day.format('YYYY-MM-DD'),
              num: day.format('D'),
              currMonth: currMonth === day.month()
            };
            getValue(days, dayObj);

            week.push(dayObj);
            day.add(1, 'd');
          }

          weeks.push(week);
        }
        console.log(weeks);
        return weeks;
      })
    });
  }),
  store: Ember.inject.service(),
  actions: {
    markDay: function(date, value) {
      let existingRecord = this.get('days').filterBy('date', date)[0],
          newRecord;

      if (existingRecord) {
        existingRecord.set('value', value);
        existingRecord.save();
      } else {
        newRecord = this.get('store').createRecord('day', {
          date: date,
          value: value
        });

        this.get('days').pushObject(newRecord);
        newRecord.save();
      }
    }
  }
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const HTML_ELEMENT = hbs`{{calendar-cell day=day markDay=(action 'markDay') }}`;
let day = Ember.Object.create({
  currMonth: false,
  num: 1,
  date: '2017-10-06'
});


moduleForComponent('calendar-cell', 'Integration | Component | calendar cell', {
  integration: true
});

test('it renders day number', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // this.render(hbs`{{calendar-cell}}`);
  //
  // assert.equal(this.$().text().trim(), '');

  testsHelper(this, false);

  assert.equal(this.$('.num').text().trim(), '1');
});

test('day.currMonth true should be have a particular class', function(assert) {
  testsHelper(this, true);

  assert.equal(this.$('td').hasClass('bg-warning'), true);
});

test('day.value true should be have a particular class', function(assert) {
  testsHelper(this, true);

  assert.equal(this.$('td').hasClass('bg-success'), true);
});

test('day.value false should be have a particular class', function(assert) {
  testsHelper(this, false);

  assert.equal(this.$('td').hasClass('bg-success'), false);
});

function testsHelper(self, dayValue) {
  day.value = dayValue;
  self.set('day', day);
  self.on('markDay', () => {});

  // Template block usage:
  return self.render(HTML_ELEMENT);
}

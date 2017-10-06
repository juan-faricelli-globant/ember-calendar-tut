import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import RSVP from 'rsvp';
import wait from 'ember-test-helpers/wait';

let days = 7;
const HTML_ELEMENT = hbs`{{ month-view days=model.days }}`;

moduleForComponent('month-view', 'Integration | Component | month view', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('model', {days});
  // this.on('weeks', () => {
  //   return RSVP.resolve({ days });
  // });
  this.render(HTML_ELEMENT);

  return wait().then(() => {
    assert.equal(this.$('.table thead td').first().text(), 'Sun');
    assert.equal(this.$('.table thead td').length, 7, true);
  });
});

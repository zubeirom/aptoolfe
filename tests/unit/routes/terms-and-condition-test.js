import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | terms-and-condition', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:terms-and-condition');
    assert.ok(route);
  });
});

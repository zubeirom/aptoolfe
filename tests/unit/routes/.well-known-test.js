import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | .well-known', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:.well-known');
    assert.ok(route);
  });
});

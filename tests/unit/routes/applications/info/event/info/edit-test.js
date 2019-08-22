import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | applications/info/event/info/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:applications/info/event/info/edit');
    assert.ok(route);
  });
});

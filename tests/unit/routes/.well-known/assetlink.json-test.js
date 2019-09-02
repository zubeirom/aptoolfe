import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | .well-known/assetlink.json', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:.well-known/assetlink.json');
    assert.ok(route);
  });
});

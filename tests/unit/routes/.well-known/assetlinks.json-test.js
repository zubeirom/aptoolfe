import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | .well-known/assetlinks.json', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:.well-known/assetlinks.json');
    assert.ok(route);
  });
});

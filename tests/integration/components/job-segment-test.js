import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | job-segment', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{job-segment}}`);

    assert.equal(this.element.textContent.replace(/[ \n\r]+/g, ''), 'GoToPostingAddApplicationtolist');

    // Template block usage:
    await render(hbs`
      {{#job-segment}}
        template block text
      {{/job-segment}}
    `);

    assert.equal(this.element.textContent.replace(/[ \n\r]+/g, ''), 'GoToPostingAddApplicationtolist');
  });
});

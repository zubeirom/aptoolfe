/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function(/* env */) {
  return {
    clientAllowedKeys: ['G_MAPS_API_KEY', 'NR_LICENSE_KEY', 'LI_CLIENT_ID', 'LI_CLIENT_SECRET'],
    fastbootAllowedKeys: [],
    failOnMissingKey: false,
    path: path.join(path.dirname(__dirname), '.env')
  }
};

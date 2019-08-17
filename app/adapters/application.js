import DS from 'ember-data';
import ENV from "../config/environment";

export default DS.JSONAPIAdapter.extend({
    host: ENV.host,
    namespace: 'api'
});

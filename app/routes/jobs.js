import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'aptoolfe/config/environment';

export default Route.extend({
    ajax: service(),

    model() {
        return this.ajax.request(`${ENV.host}/api/jobs`);
    }
});

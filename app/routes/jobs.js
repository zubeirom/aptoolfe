import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'aptoolfe/config/environment';
import { htmlSafe } from '@ember/template';
import { set } from '@ember/object';

export default Route.extend({
    ajax: service(),

    willTransition() {
        this._super(...arguments);
        set(this, 'loader', true);
    },

    model() {
        return this.store.findAll('account').then(account => {
            return account.get('firstObject')
        });
    },

    async afterModel(model) {
        set(this, 'loader', true);
        try {     
            const jobs = await this.ajax.request(`${ENV.host}/api/jobs`);
            set(model, 'jobs', jobs);
            console.log(model);
            jobs.forEach(job => {
                const html = htmlSafe(job.description);
                job.html = html;
            });
            set(this, 'loader', false);

        } catch (error) {
            console.log(error);
            set(this, 'loader', false);
        }
    }
});

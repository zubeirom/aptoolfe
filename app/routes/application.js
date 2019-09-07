import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { set } from '@ember/object';
import ENV from 'aptoolfe/config/environment';

export default Route.extend(ApplicationRouteMixin, {
    media: service(),
    session: service(),
    ajax: service(),

    model() {
        if (this.session.isAuthenticated) {
            return this.store.findAll('account').then(account => {
                return account.get('firstObject')
            });
        }
    },

    async afterModel(model) {
        try {
            if (this.session.isAuthenticated) {
                if (model.job_keywords.length) {
                    const joined = model.job_keywords.join(', ');
                    const queryJobs = await this.ajax.request(`${ENV.host}/api/p-jobs?search=${joined}`);
                    set(model, 'jobs', queryJobs);
                } else {
                    const jobs = await this.ajax.request(`${ENV.host}/api/jobs`);
                    set(model, 'jobs', jobs);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
});

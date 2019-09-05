import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from 'aptoolfe/config/environment'
import { set } from '@ember/object';

export default Controller.extend({
    session: service(),
    ajax: service(),

    actions: {
        invalidate() {
            this.get('session').invalidate();
        },

        async refresh() {
            set(this, 'loader', true);
            try {
                if (this.session.isAuthenticated) {
                    if (this.model.job_keywords.length) {
                        const joined = this.model.job_keywords.join(', ');
                        console.log(joined)
                        const queryJobs = await this.ajax.request(`${ENV.host}/api/p-jobs?search=${joined}`);
                        set(this.model, 'jobs', queryJobs);
                    } else {
                        const jobs = await this.ajax.request(`${ENV.host}/api/jobs`);
                        set(this.model, 'jobs', jobs);
                    }
                }
                set(this, 'loader', false);
            } catch (error) {
                set(this, 'loader', false);
                console.log(error);
            }
        }
    }
});

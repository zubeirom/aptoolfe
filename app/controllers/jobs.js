import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from 'aptoolfe/config/environment';
import { set } from '@ember/object';

export default Controller.extend({
    media: service(),
    ajax: service(),

    actions: {
        async queryJobs() {
            try {
                set(this, 'loader', true);
                if (this.keywords || this.location) {
                    const queryJobs = await this.ajax.request(`${ENV.host}/api/jobs?search=${this.keywords}&location=${this.location}`);
                    set(this.model, 'jobs', queryJobs);
                } else {
                    const queryJobs = await this.ajax.request(`${ENV.host}/api/jobs`);
                    set(this.model, 'jobs', queryJobs);
                }
                set(this, 'loader', false);
            } catch (error) {
                console.log(error);
            }
        },

        async addApplication(title, company) {
            try {
                // const saveApplication = await this.store.createRecord('application', {
                //     account_id: this.model.id,
                //     company,
                //     occupation: title
                // });
                set(this, 'saved', true);
            } catch (error) {
                console.log(error);
            }
        }
    }
});

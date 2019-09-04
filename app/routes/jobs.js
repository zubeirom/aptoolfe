import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'aptoolfe/config/environment';
import RSVP from 'rsvp';
import { htmlSafe } from '@ember/template';

export default Route.extend({
    ajax: service(),

    model() {
        return RSVP.hash({
            jobs: this.ajax.request(`${ENV.host}/api/jobs`),
            applications: this.store.findAll('application')
        })   
    },

    afterModel(model) { 
        console.log(model);
        let { jobs } = model;
        jobs.forEach(job => {
            const html = htmlSafe(job.description);
            job.html = html;
        });
    }
});

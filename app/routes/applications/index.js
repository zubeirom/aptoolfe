import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { set } from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend(AuthenticatedRouteMixin, {
    model() {
        return RSVP.hash({
            applications: this.store.findAll('application'),
            events: this.store.findAll('event')
        });
    },

    afterModel(model) {
        const modelArr = model.applications.toArray();
        modelArr.forEach(application => {
            if (!application.id) {
                application.deleteRecord();
            }
        });
        const amount = modelArr.length
        const applied = modelArr.filter(application => {
            if (application.status != 'In Progress') {
                return application
            }
        }).length
        set(model, 'progress', applied / amount * 100)
        set(model, 'applied', applied)
    }
});

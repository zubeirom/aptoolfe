import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    model() {
        return this.store.findAll('application')
    },

    afterModel(model) {
        const modelArr = model.toArray();
        modelArr.forEach(application => {
            if (!application.id) {
                application.deleteRecord();
            }
        });
    }
});

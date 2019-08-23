import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({
    async afterModel(model) {
        const newEvent = this.store.createRecord('event', {
            application_id: model.id
        });

        set(model, 'event', newEvent);
    },
});

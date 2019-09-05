import Component from '@ember/component';
import { set, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),

    actions: {
        async addApplication(model, title, company) {
            try {
                set(this, 'loader', true);
                const saveApplication = await get(this, 'store').createRecord('application', {
                    account_id: model,
                    company,
                    occupation: title
                });
                await saveApplication.save();
                set(this, 'loader', false);
                set(this, 'saved', true);
            } catch (error) {
                console.log(error);
            }
        }
    }
});

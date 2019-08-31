import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
    init() {
        this._super(...arguments);
        this.types = ['Status', 'Company'];
        this.statuses = [
            'GET ALL','In Progress', 'Submitted', 'Cancelled', 'Offer', 'Denied', 'On-Site', 'Phone Screen', 'Coding Challenge'
        ]
    },

    actions: {
        async queryByStatus() {
            try {
                const queryApplications = await this.store.query('application', {
                    status: this.queryStatus
                });
                set(this.model, 'applications', queryApplications);
            } catch (error) {
                console.log(error);
            }
        },

        async queryByCompany() {
            try {
                const queryApplications = await this.store.query('application', {
                    company: this.queryCompany
                });
                set(this.model, 'applications', queryApplications);
            } catch (error) {
                console.log(error);
            }
        }
    }
});

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    ajax: service(),
    session: service(),

    async afterModel(model) {
        try {
            const res = await this.ajax.request('http://localhost:3000/api/routeAccessCheck', {
                method: 'POST',
                data: {
                    id: model.id,
                    accessToken: this.session.data.authenticated.access_token
                }
            });
            console.log(res);
            if (res === 'Unauthorized') {
                this.transitionTo('applications');
                window.location = '/applications';
            }
        } catch (error) {
            console.log(error);
            if (error === 'Unauthorized') {
                this.transitionTo('applications');
                window.location = '/applications';
            }
        }
    }
});

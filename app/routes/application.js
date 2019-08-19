import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
//import { set } from '@ember/object';

export default Route.extend(ApplicationRouteMixin, {
    media: service(),
    session: service(),

    model() {
        if (this.session.isAuthenticated) {
            return this.store.findAll('account').then(account => {
                return account.get('firstObject')
            })
        }
    },
});

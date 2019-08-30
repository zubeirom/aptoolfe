import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    session: service(),

    model() {
        if (this.session.isAuthenticated) {
            return this.store.findAll('account').then(account => {
                return account.get('firstObject')
            });
        }
    }
});

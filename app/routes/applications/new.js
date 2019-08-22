import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RSVP from 'rsvp';
import { set } from '@ember/object';

export default Route.extend(AuthenticatedRouteMixin, {
    model() {
        return RSVP.hash({
            account: this.store.peekAll('account'),
            application: this.store.createRecord('application')
        })
    },

    afterModel(model) {
        set(model, 'account', model.account.get('firstObject'))
    }
});

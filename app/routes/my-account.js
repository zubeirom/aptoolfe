import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return this.store.findAll('account').then(account => {
            return account.get('firstObject')
        });
    },
});

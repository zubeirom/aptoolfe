import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default Controller.extend({
    toastr: service('toast'),
    session: service(),
    media: service(),

    isValid(username, password) {
        if (username === undefined || username === '' && password === undefined || password === '') {
            this.toastr.warning('Please enter something', 'Warning');
            return false
        }
        return true
    },

    actions: {
        async authenticate() {
            this.toastr.info('Server (heroku) is starting up, this might take few seconds', 'Important Info');
            set(this, 'loader', true);
            try {
                let { username, password } = this.getProperties('username', 'password');
                if (this.isValid(username, password)) {
                    await this.get('session').authenticate('authenticator:oauth2', username, password)
                    .catch((reason) => {
                        set(this, 'loader', false);                        
                        this.set('errorMessage', reason.error || reason);
                        this.toastr.error('Password or username is wrong', 'Error');
                    });
                }
                set(this, 'loader', false);
            } catch (error) {
                set(this, 'loader', false);
                if (error) {
                    this.toastr.error('Password or username is wrong', 'Error');
                }
            }
        },
        redirect() {
            this.send('authenticate');
        }
    }
});

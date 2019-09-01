import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default Controller.extend({
    toastr: service('toast'),
    session: service(),
    media: service(),

    checklist(obj) {
        if (obj.username !== undefined && obj.firstname !== undefined && obj.lastname !== undefined && obj.password !== undefined) {
            return true
        }
        this.toastr.error('Please enter all fields', 'Warning');
        return false
    },

    actions: {

        async register() {
            if (this.checklist(this.model)) {
                if (this.model.password === this.secondPassword) {
                    if (this.model.password.length < 8) {
                        this.toastr.warning('Password must have 8 characters', 'Warning');
                    } else {
                        try {
                            await this.model.save();
                            const { username } = this.model;
                            this.get('session').authenticate('authenticator:oauth2', username, this.secondPassword).catch((reason) => {
                                this.set('errorMessage', reason.error || reason);
                                console.log(reason.error || reason)
                            });
                            set(this, 'secondPassword', '');
                        } catch (error) {
                            console.log(error);
                            this.toastr.error('Account exists already', 'Error');
                            this.transitionToRoute('sign-up')
                        }
                    }
                } else {
                    this.toastr.warning('Passwords don\'t match', 'Warning');
                }
            }
        },

        redirect() {
            this.send('register')
        },

        togglePassword() {
            this.toggleProperty('showPassword')
        }
    } 
});

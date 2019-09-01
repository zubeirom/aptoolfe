import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import ENV from 'aptoolfe/config/environment';

export default Controller.extend({
    session: service(),
    ajax: service(),
    toastr: service('toast'),

    actions: {
        async sendMail() {
            try {
                if (this.subject && this.message && this.email) {
                    const res = await this.ajax.request(`${ENV.host}/api/send-mail`, {
                        method: 'POST',
                        data: {
                            email: this.email,
                            subject: this.subject,
                            message: this.message
                        }
                    });
                    this.toastr.success(res.message, 'Nice!');
                    set(this, 'subject', '')
                    set(this, 'message', '')
                    set(this, 'email', '')
                } else {
                    this.toastr.warning('Please use valid email and fill out fields', 'Warning')
                }
                
            } catch (error) {
                console.log(error);
                this.toastr.error('Sending mail went wrong, please check everything and try again', 'Failed');
            }
        },

        usemymail() {
            if (this.model.email) {
                set(this, 'email', this.model.email)                
            } else {
                this.toastr.warning('No email given, please add in My-Account', 'Warning')
            }
        }
    }
});

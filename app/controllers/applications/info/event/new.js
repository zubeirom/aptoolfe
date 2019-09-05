import Controller from '@ember/controller';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
    toastr: service('toast'),

    actions: {
        async save() {
            set(this, 'loader', true);
            try {
                let contact = {
                    name: this.recruiterName,
                    email: this.recruiterMail,
                    tel: this.recruiterTel,
                    fax: this.recruiterFax
                };
                let location = {
                    street: this.street,
                    postal_code: this.postalCode,
                    city: this.city
                };
                set(this.model.event, 'contact_person', contact);
                set(this.model.event, 'location', location);
                if (this.model.event.name && this.model.event.date) {
                    await this.model.event.save();
                    contact = null;
                    location = null;
                    this.model.events.pushObject(this.model.event);
                    this.transitionToRoute('applications.info', this.model);
                } else {
                    this.toastr.error('Please fill out name and date of the event', 'Warning!')
                }
                set(this, 'loader', false);
            } catch (error) {
                set(this, 'loader', false);
                console.log(error);
            }
        }
    }
});

import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({

    actions: {
        async save() {
            try {
                const contact = {
                    name: this.recruiterName,
                    email: this.recruiterMail,
                    tel: this.recruiterTel,
                    fax: this.recruiterFax
                };
                const location = {
                    street: this.street,
                    postal_code: this.postalCode,
                    city: this.city
                };
                set(this.model.event, 'contact_person', contact);
                set(this.model.event, 'location', location);
                await this.model.event.save();
                
            } catch (error) {
                console.log(error)
            }
        }
    }
});

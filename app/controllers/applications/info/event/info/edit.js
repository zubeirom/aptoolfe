import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    toastr: service('toast'),

    actions: {
        update() {
            if (this.model.name && this.model.date) {
                try {
                    this.model.save();
                    this.transitionToRoute('applications.info.event.info', this.model)
                } catch (error) {
                    console.log(error);
                }
            } else {
                this.toastr.error('Please enter the name and the date of the event', 'Error');
            }
        }
    }
});

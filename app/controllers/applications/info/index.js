import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({

    actions: {
        async delete() {
            try {
                await this.model.destroyRecord();
                set(this, 'deleteView', false);
                this.transitionToRoute('applications')
            } catch (error) {
                console.log(error)
            }
        }
    }
});

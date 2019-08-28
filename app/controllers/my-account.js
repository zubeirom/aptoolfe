import Controller from '@ember/controller';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
    toastr: service('toast'),

    actions: {
        addKeyword(keyword) {
            this.model.job_keywords.pushObject(keyword);
            set(this, 'keyword', '');
        },
        deleteKeyword(keyword) {
            this.model.job_keywords.removeObject(keyword);
        },
        async saveChanges() {
            try {
                await this.model.save();
                this.toastr.success('Successfully changed account', 'Nice!');
            } catch (error) {
                console.log(error)
            }
        }
   } 
});
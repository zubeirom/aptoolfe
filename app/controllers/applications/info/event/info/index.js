import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        delete() {
            try {
                this.model.destroyRecord();
                this.transitionToRoute('applications.info', this.model.application)
                this.model.application.events.removeObject(this.model)
            } catch (error) {
                console.log(error)
            }
        }
    }
});

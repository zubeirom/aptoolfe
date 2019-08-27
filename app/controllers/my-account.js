import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        pushKeyword(keyword) {
            this.model.jobKeywords.pushObject(keyword);
       }
   } 
});
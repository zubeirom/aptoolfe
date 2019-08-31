import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    name: DS.attr(),
    location: DS.attr(),
    application_id: DS.attr(),
    contact_person: DS.attr(),
    application: DS.belongsTo({ async: false }),
    date: DS.attr(),
    note: DS.attr(),
    geometry: DS.attr(),
    humanDate: computed('date', function () {
        const newDate = new Date(this.date);
        return newDate.getTime();
    })
});

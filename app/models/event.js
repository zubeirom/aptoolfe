import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    location: DS.attr(),
    application_id: DS.attr(),
    contact_person: DS.attr(),
    application: DS.belongsTo({ async: false }),
    date: DS.attr(),
    note: DS.attr(),
    geometry: DS.attr()
});

import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    location: DS.attr(),
    contactPerson: DS.attr(),
    application: DS.belongsTo(),
    date: DS.attr()
});

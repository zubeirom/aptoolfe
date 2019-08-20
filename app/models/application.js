import DS from 'ember-data';

export default DS.Model.extend({
    account: DS.belongsTo(),
    company: DS.attr(),
    created: DS.attr(),
    status: DS.attr(),
    submissionType: DS.attr(),
    source: DS.attr(),
    recruiters: DS.attr(),
    occupation: DS.attr()
});

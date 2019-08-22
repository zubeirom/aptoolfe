import DS from 'ember-data';

export default DS.Model.extend({
    account: DS.belongsTo({ async: false }),
    company: DS.attr(),
    created: DS.attr(),
    status: DS.attr(),
    source: DS.attr(),
    recruiter: DS.attr(),
    occupation: DS.attr(),
    note: DS.attr(),
    posting_url: DS.attr(),
    deadline: DS.attr(),
});

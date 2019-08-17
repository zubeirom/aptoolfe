import DS from 'ember-data';

export default DS.Model.extend({
    username: DS.attr('string'),
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),
    email: DS.attr('string'),
    tel: DS.attr('string'),
    password: DS.attr('string'),
    statuses: DS.attr(),
    socials: DS.attr(),
    jobKeywords: DS.attr()
});

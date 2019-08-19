import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    email: DS.attr(),
    tel: DS.attr(),
    location: DS.attr(),
    socials: DS.attr()
});

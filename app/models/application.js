import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    account: DS.belongsTo({ async: false }),
    company: DS.attr(),
    created: DS.attr(),
    status: DS.attr(),
    source: DS.attr(),
    recruiter: DS.attr(),
    occupation: DS.attr(),
    events: DS.hasMany('event', { async: false }),
    note: DS.attr(),
    posting_url: DS.attr(),
    deadline: DS.attr(),
    statusColor: computed('status', function () {
        switch (this.status) {
            case 'In Progress':
                return 'brown'
            case 'Submitted':
                return 'teal'
            case 'Cancelled':
                return 'orange'
            case 'Offer':
                return 'green'
            case 'Denied':
                return 'red'
            case 'On-Site':
                return 'violet'
            case 'Phone Screen':
                return 'purple'
            case 'Coding Challenge':
                return 'blue'
            default:
                return 'black'
        }
    })
});

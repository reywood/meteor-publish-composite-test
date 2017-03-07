import { Meteor } from 'meteor/meteor';

Meteor.publishComposite('throwError', {
    find: function find() {
        throw new Error('This is a test error');
    },
});

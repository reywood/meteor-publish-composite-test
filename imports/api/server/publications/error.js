import { publishComposite } from 'meteor/reywood:publish-composite';

publishComposite('throwError', {
    find: function find() {
        throw new Error('This is a test error');
    },
});

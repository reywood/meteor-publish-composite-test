import { Template } from 'meteor/templating';

Template.errorTest.events({
    'click #error-sub-btn': function handleClick(event) {
        event.preventDefault();

        const template = Template.instance();
        template.subscribe('throwError');
    },
});

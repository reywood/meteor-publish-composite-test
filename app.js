// Collections
Posts = new Meteor.Collection('posts');


// Server
if (Meteor.isServer) {
    Meteor.startup(function () {
        initData();
    });

    Meteor.publishComposite('posts', {
        find: function() {
            return Posts.find();
        },
        children: [
            {
                find: function(post) {
                    return Meteor.users.find({ _id: post.authorId }, { fields: { profile: 1 } });
                }
            }
        ]
    });
}

// Client
if (Meteor.isClient) {
    Meteor.subscribe('posts');
    
    Template.hello.helpers({
        posts: function() {
            return Posts.find();
        },

        author: function() {
            var author = Meteor.users.findOne(this.authorId);
            console.log(author);
            return author;
        }
    });

    Template.hello.events({
        'click input' : function () {
            // template data, if any, is available in 'this'
            if (typeof console !== 'undefined')
                console.log("You pressed the button");
        }
    });
}


// Util functions
var initData = function() {
    initUsers();
    initPosts();
};

var initUsers = function() {
    if (Meteor.users.find().count() <= 0) {
        console.log('no users found, adding some');
        Accounts.createUser({
            username: 'marie',
            password: '123456',
            profile: {
                name: 'Marie Curie'
            }
        });
        Accounts.createUser({
            username: 'albert',
            password: '123456',
            profile: {
                name: 'Albert Einstein'
            }
        });
        Accounts.createUser({
            username: 'richard',
            password: '123456',
            profile: {
                name: 'Richard Feynman'
            }
        });
    }
};

var initPosts = function() {
    if (Posts.find().count() <= 0) {
        var marie = Meteor.users.findOne({ username: 'marie' });
        var albert = Meteor.users.findOne({ username: 'albert' });
        var richard = Meteor.users.findOne({ username: 'richard' });

        Posts.insert({
            title: 'X-Rays are the greatest',
            authorId: marie._id
        });

        Posts.insert({
            title: 'It\'s all relative',
            authorId: albert._id
        });

        Posts.insert({
            title: 'Let\'s get physical',
            authorId: richard._id
        });
    }
};

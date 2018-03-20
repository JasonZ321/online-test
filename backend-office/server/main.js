import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('getUser', function(username) {
    return Meteor.users.find({username: username});
  });
});

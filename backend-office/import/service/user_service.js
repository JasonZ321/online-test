import { Meteor } from 'meteor/meteor';

export function createAdmin({username, password}, callback) {
    Meteor.subscribe("getUser", username, function() {
        const user = Meteor.users.findOne({username: username});
        if(user) {
            console.log('admin user exists');
            callback();
        }
        if(username && password) {
            Accounts.createUser({username, password, isAdmin: true}, function(error){
                if (error) {
                    console.log(error);
                }
                if (callback) {
                    callback(error);
                }
            });
        } else {
            callback('username or password not defined');
        }
        
    })
   
}

export function loginUser({username, password}, callback) {
    Meteor.loginWithPassword(username, password, function(error) {
        if(error) {
            console.error('username or password is wrong');
        }
        if(callback) {
            callback(error);
        }
    })
}
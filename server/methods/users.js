/**
 * Created by martin on 15.03.2016.
 */
import {Meteor} from 'meteor/meteor';
import Random from 'meteor-random';

let newUserId = '';

export default function() {
    Meteor.methods({
        'user.create'(username, email){

            console.log('SERVER user: ' + username)

            const password = Random.id([8])
            console.log('SERVER user password: ' + password)
            newUserId = Accounts.createUser(username, email, password);

            if (newUserId) {
                Accounts.sendEnrollmentEmail(newUserId);
            } else {
                console.log('ERROR SERVER user no newUserId: ' + username)
            }

        }
    });
    console.log('SERVER Return newUserId: ', newUserId);
    return {newUserId};

}
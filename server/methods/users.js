/**
 * Created by martin on 15.03.2016.
 */
import {Meteor} from 'meteor/meteor';
//import {check} from 'meteor/check';


export default function() {
    Meteor.methods({
        'create.user'(username, email){

            console.log('SERVER user: ' + username)

            newUserId=Accounts.createUser(username, email);

            Accounts.sendEnrollmentEmail(newUserId,email);

            }
        })

}

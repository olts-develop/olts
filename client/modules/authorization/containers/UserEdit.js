/**
 * Created by martin on 21.03.2016.
 */
import UserEdit from '../components/UserEdit.jsx';
//import BaseRoles from '../../../../lib/schemas/authorizations/BaseRoles';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, userId, clearErrors}, onData) => {
    const {LocalState, Meteor, Collections} = context();
    const error = LocalState.get('USER_EDIT_ERROR')

    let user, baseroles;

    if (userId !== undefined) {
        if (Meteor.subscribe('user.single', userId).ready()) {
           /* const selector = {_id: userId};
            user = Meteor.users.find(selector);*/
            user = Meteor.users.findOne(userId);
           onData(null, {user, error});
        } else {
            /*const selector = {_id: userId};
            user = Meteor.users.findOne(userId);*/
            user = Meteor.users.findOne(userId);
            onData(null, {user, baseroles, error});
        }
            /*if (user) {
                if (Meteor.subscribe('baseRoles.list').ready()) {
                    baseroles = Collections.BaseRoles.find().fetch();
                    console.log('baseroles: ' + Collections.BaseRoles.find().count())
                    onData(null, {user, baseroles, error});
                } else {
                    baseroles = Collections.BaseRoles.find().fetch();
                    console.log('baseroles: ' + Collections.BaseRoles.find().count())
                    if (baseroles) {
                        onData(null, {user, baseroles});
                    } else {
                        onData();
                    }
                }
            } else {
                    onData();

            }
                onData();*/

    } else {
        onData(null, {error});
    }

    // clearErrors when unmounting the component
    return clearErrors;

};

export const depsMapper = (context, actions) => ({
    create: actions.UserEdit.create,
    clearErrors: actions.UserEdit.clearErrors,
    context: () => context
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(UserEdit);
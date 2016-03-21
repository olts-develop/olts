/**
 * Created by martin on 11.03.2016.
 */
import UserAuth from '../components/UserAuth.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, userId, clearErrors}, onData) => {
    const {LocalState, Meteor} = context();
    const error = LocalState.get('USERAUTH_ERROR')

        if (Meteor.subscribe('users.list').ready()) {
            const users = Meteor.users.find({}, {sort: {createdAt: 1}}).fetch();
            const totalUsers = Meteor.users.find().count();
            onData(null, {users, totalUsers});
        }

  /* if (userId !== undefined){
        if (Meteor.subscribe('user.single').ready()) {
            const user = Meteor.users.findOne(userId);
            onData(null,{user, error});
        } else {
            const user = Meteor.users.findOne(userId);
            if (user) {
                onData(null, {user});
            }else {
                onData();
            }
        }
    }*/

    // clearErrors when unmounting the component
    return clearErrors;
};

export const depsMapper = (context,actions) =>({
    selectSingleUser: actions.UserAuth.selectSingleUser,
    clearErrors: actions.UserAuth.clearErrors,
    context: () => context
});


export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper  )
)(UserAuth);
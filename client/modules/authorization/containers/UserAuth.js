/**
 * Created by martin on 11.03.2016.
 */
import UserAuth from '../components/UserAuth.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, userId, clearErrors}, onData) => {
    const {LocalState, Meteor, Collections} = context();
    const error = LocalState.get('CREATE_USERAUTH_ERROR');
    if (userID !== undefined){
    if (Meteor.subscribe ('users.single', userId).ready()){
        const user = Collections.findOne(userId);
        onData(null,{user, error});
    } else {
        const user = Collections.findOne(userId);
        if (user) {
            onData(null, {user});
        } else {
            onData();
        }
        }
    } else {
        onData(null, {error});
    }

    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    create: actions.userauth.create,
    edit: actions.userauth.edit,
    clearErrors: actions.userauth.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(UserAuth);
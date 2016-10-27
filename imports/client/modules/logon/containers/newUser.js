/**
 * Created by martin on 11.03.2016.
 */
import newUser from '../components/newUser.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';


export const composer = ({context, clearErrors}, onData) => {
    const {Store} = context();
    const state = Store.getState();
    const error = state.logon.logonReducer.createUser.userLoginError;

    onData(null, {error});

    const unsubscribe = Store.subscribe(() => {
        const state = Store.getState().logon;
        const error = state.logonReducer.createUser.userLoginError;
        onData(null, {error});
    });


    const cleanup = () => {
        unsubscribe();
    }

    return  cleanup;

};

export const depsMapper = (context, actions) => ({
    ...actions.usersLogicActions,
   /* create: actions.users.create,
    clearErrors: actions.users.clearErrors,
    back: actions.users.back,*/
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(newUser);
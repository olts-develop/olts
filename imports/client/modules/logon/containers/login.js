
import login from '../components/login.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
      const {Store} = context();
      const state = Store.getState();
      const error = state.logon.logonReducer.logedin.loginError;
      const logedIn = state.logon.logonReducer.logedin;

      onData(null, {error});

      const unsubscribe = Store.subscribe(() => {
            const state = Store.getState().logon;
            const error = state.logonReducer.logedin.loginError;
            onData(null, {error});
      });


      const cleanup = () => {
            unsubscribe();
      }

      return  cleanup;

};


export const depsMapper = (context, actions) => {
      return {
            ...actions.usersLogicActions,
            context: () => context
      }
};

export default composeAll(
      composeWithTracker(composer),
      useDeps(depsMapper)
)(login);

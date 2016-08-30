/**
 * Created by mk on 03.05.16.
 */


import AppNavigation from './../components/appNavigation';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';


export const composer = ({context, employee}, onData) => {
      const {Store, Meteor, Collections} = context();
      const error = ''
      
      if (employee._id){
            console.log("employee: "+ employee.name)
      }

      onData(null, error)

      const unsubscribe = Store.subscribe(() => {

            const error = ''
            
            onData(null, error)

      });

      const cleanup = () => {
            unsubscribe();
      }

      return cleanup;
      
};


export const depsMapper = (context, actions) => {
      return {
            ...actions.navLogicActions,
            context: () => context
      }
};


export default composeAll(
      composeWithTracker(composer),
      useDeps(depsMapper)
)(AppNavigation);


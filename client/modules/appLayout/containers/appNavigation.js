/**
 * Created by mk on 03.05.16.
 */


import appNavigation from './../components/appNavigation.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';


export const composer = ({context, employee, clearErrors}, onData) => {
      const {LocalState, Meteor, Collections} = context();
      //const error = LocalState.get('APP_NAVIGATION_ERROR')
      
      if (employee._id){
            console.log("employee: "+ employee.name)
      }

      onData(employee)

      // clearErrors when unmounting the component
      //return clearErrors;
      
}
export default composeAll(
      composeWithTracker(composer),
      useDeps()
)(appNavigation);

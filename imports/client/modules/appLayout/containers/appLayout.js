import appLayout from '../components/appLayout.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';


export const composer = ({context}, onData) => {
    const { Meteor} = context();

    const error = {}
       // const activeUser = Meteor.user()


        onData(null, error);

        // if (activeUser._id !== undefined) {
        //     const selector = {userID: activeUser.username}
        //     if (Meteor.subscribe('employee.select', selector).ready()) {
        //         const employee = Collections.Employees.findOne(selector);
        //         console.log('Employee subscribe: ' + employee._id + '  username: ' + employee.firstName + ' ' + employee.name)
        //         onData(null, {employee, error});
        //     } else {
        //         const employee = Collections.Employees.findOne(selector);
        //         if (employee) {
        //             //console.log('Employee subscribe: ' + employee[0]._id + '  username: '+ employee[0].firstname + ' '+ employee[0].name )
        //             onData(null, {employee});
        //         } else {
        //             onData();
        //         }
        //     }
        // }
        // else {
        //     onData(null, {error});
        //
    
    //return clearErrors;
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
)(appLayout);
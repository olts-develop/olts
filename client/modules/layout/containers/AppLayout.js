import AppLayout from '../components/AppLayout.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}) => {
    const {Meteor, Collections} = context();

    if (!Meteor.userID) {
        return null;
    }
    else {
        const selector = {userID: {$eg: Meteor.user.name}}
        if (Meteor.subscribe('employee', selector).ready()) {
            const employee = Collection.Employees.findOne(selector);
        }
    }
};

export const depsMapper = (context, actions) => ({
    userLogedIn: actions.applayout.userlogedin,
    clearErrors: action.applayout.clearErrors,
    context: () => context
})


export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(AppLayout);

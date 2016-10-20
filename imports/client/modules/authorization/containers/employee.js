/**
 * Created by martin on 27.04.2016.
 */

import employee from '../components/employee.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';


export const composer = ({context, clearErrors}, onData) => {
      const {LocalState, Meteor, Collections} = context();;
      const error = LocalState.get('EMPLOYEE_ERROR')

      if (Meteor.subscribe('languages.list').ready()) {
            const languages = Collections.Languages.find({}, {sort: {sortTop: -1, language: 1}}).fetch();
            onData(null, {languages});
      }

      // clearErrors when unmounting the component
      return clearErrors;
};


export default composeAll(
      composeWithTracker(composer),
      useDeps()
)(employee);
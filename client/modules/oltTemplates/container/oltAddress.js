/**
 * Created by mk on 10.05.16.
 */

import oltAddreses from '../components/oltAddress.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, addressFor}, onData) => {
      const {LocalState, Meteor, Collections} = context();
      const error = LocalState.get('ADRESS_EDIT_ERROR')
      
      if (addressFor === undefined){
      
            onData(null, {})
      
      }
      
      onData(null, {addressFor})
}


export default composeAll(
      composeWithTracker(composer),
      useDeps()
)(oltAddreses);
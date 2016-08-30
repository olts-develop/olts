/**
 * Created by mk on 15.06.16.
 */

import navReduxActions from './reduxNavActions'

export default {
      
      navHandleChange({dispatch}, index, value, menu) {
           dispatch(navReduxActions.menuClicked(index, value, menu));
            
      }
         
      
}

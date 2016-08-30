/**
 * Created by mk on 15.06.16.
 */


import {
      NAV_MENUE_CLICK
} from './actionTypes';


export default{

      menuClicked(index, value, menu) {
            return {type: NAV_MENUE_CLICK, index, value, menu}
      }
      
      
}
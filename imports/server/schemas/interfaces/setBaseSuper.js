/**
 * Created by martin on 08.11.2016.
 */

import dateHelper from '../../../helpers/dateHelper'

export default function setBaseSuper() {

      let baseSuper = {};

      baseSuper = {
            createUser: 'Martin',
            createUserId: 'MK',
            createDate: dateHelper.currentDate(),
            modUser: 'Martin',
            modUserId: 'MK',
            modDate: dateHelper.currentDate()
      }

      return baseSuper;
}


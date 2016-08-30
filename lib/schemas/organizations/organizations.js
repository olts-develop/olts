/**
 * Created by mk on 09.05.16.
 */

import {Mongo} from 'meteor/mongo';

import BaseSuper from './../../baseschema/BaseSuper';
import BaseAddress from './../../baseschema/BaseAddress';

const Organizations = new Mongo.Collection('organizations');

const Schema={};


Schema.Organizations = new SimpleSchema([BaseSuper, {
      
      tenantId:{
            type: String
      },

      org:{
            type: String
      },
      
      default: {
            type: Boolean,
            optional: true
      },
      
      address:{
            type: [BaseAddress],
            optional: true,
            maxCount: 1
      },
      
      invisible:{
            type: Boolean,
            optional: true
      }

}]);

Organizations.attachSchema(Schema.Organizations);

export default Organizations;
/**
 * Created by martin on 19.04.2016.
 */

import {Mongo} from 'meteor/mongo';

import BaseSuper from './../../baseschema/BaseSuper';
import BaseAddress from './../../baseschema/BaseAdress';

const Tenants = new Mongo.Collection('tenants');

const Schema={};

OrganisationSchema = new SimpleSchema([BaseSuper, {

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
      }

}]);

Schema.Tenants = new SimpleSchema([BaseSuper, {

      tenant:{
            type: String,
            label: "Tenant"
      },
      organizations:{
            type: [OrganisationSchema]
      },
      address:{
            type: [BaseAddress],
            maxCount: 1
      }
}]);

Tenants.attachSchema(Schema.Tenants);

export default Tenants;

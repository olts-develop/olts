/**
 * Created by martin on 19.04.2016.
 */

import {Mongo} from 'meteor/mongo';

import BaseSuper from '../../baseschema/BaseSuper';


const Tenants = new Mongo.Collection('tenants');

const Schema={};


Schema.Tenants = new SimpleSchema([BaseSuper, {

      code:{
            type: String
      },

      description:{
            type: String
      }
      

}]);

Tenants.attachSchema(Schema.Tenants);

export default Tenants;

// TODO ist das der richtige Weg?
export const TenantsFields = Schema.Tenants._schemaKeys;

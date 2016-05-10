/**
 * Created by martin on 19.04.2016.
 */

import {Mongo} from 'meteor/mongo';

import BaseSuper from './../../baseschema/BaseSuper';


const Tenants = new Mongo.Collection('tenants');

const Schema={};


Schema.Tenants = new SimpleSchema([BaseSuper, {

      tenant:{
            type: String,
            label: "tenant"
      },
      
      address:{
            type: BaseAddress,
            maxCount: 1
      },

      invisible: {
            type: Boolean,
            optional: true
      }
}]);

Tenants.attachSchema(Schema.Tenants);

export default Tenants;

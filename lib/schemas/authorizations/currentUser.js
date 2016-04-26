/**
 * Created by martin on 05.04.2016.
 *
 * client only!!
 */

import {Mongo} from 'meteor/mongo';

import Tenants from './../organizations/Tenants';




const currentUser = new Mongo.Collection(null);

const Schema={};



Schema.currentUser = new SimpleSchema({

      userId: {type: String},
      userName: {type: String},
      userFirstName: {type: String},
      userCurrentTenent: {type: String},
      userCurrentOrg: {type: String},
      userTenants: {type: [Tenants]},
      userRole: {type: String}
      
});

currentUser.attachSchema(Schema.currentUser);

export default currentUser
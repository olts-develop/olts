/**
 * Created by martin on 05.04.2016.
 *
 * client only!!
 */

import {Mongo} from 'meteor/mongo';

import BaseSuperTenentOrg from './../../baseschema/BaseSuperTenentOrg';
import BasePerson from './../../baseschema/BasePerson';


const currentUser = new Mongo.Collection(null);

const Schema={};

Schema.currentUser = new SimpleSchema([BaseSuperTenentOrg, BasePerson, {

      userID: {
            type: String
      }
}]);

currentUser.attachSchema(Schema.currentUser);

export default currentUser
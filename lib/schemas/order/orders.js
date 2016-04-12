/**
 * Created by martin on 12.04.2016.
 */
import {Mongo} from 'meteor/mongo';

import BaseSuperTenentOrg from './../baseschema/BaseSuperTenentOrg';

const Orders = new Mongo.Collection('orders');

const Schema={};

Schema.Orders = new SimpleSchema([BaseSuperTenentOrg, {

      orderNr: {type: Number},
      orderText:{type: String},
      orderDepDate:{type: Date, optional: true},
      orderRetDate: {type: Date, optional: true},
      orderLang:{type: String},
      orderDocLang: {type: String},

}]);

Employees.attachSchema(Schema.Employees);

export default Employees;
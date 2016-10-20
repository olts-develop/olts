import {Mongo} from 'meteor/mongo';

import BasePerson from '../baseschema/BasePerson';
import BaseSuper from '../baseschema/BaseSuper';
import OltUserTenant from '../oltTypes/OltUserTenants'

const Employees = new Mongo.Collection('employees');

const Schema={};



Schema.Employees = new SimpleSchema([BasePerson, BaseSuper, {

    userID: {
        type: String,
        optional: true
    },

    tenants:{
        type:[OltUserTenant]
    }
}]);

Employees.attachSchema(Schema.Employees);

export default Employees;
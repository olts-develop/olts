import {Mongo} from 'meteor/mongo';

import BaseSuperTenentOrg from './../baseschema/BaseSuperTenentOrg';
import BasePerson from './../baseschema/BasePerson';

const Employees = new Mongo.Collection('employees');

const Schema={};

Schema.Employees = new SimpleSchema([BaseSuperTenentOrg, BasePerson, {

    userID: {
        type: String
    }
}]);

Employees.attachSchema(Schema.Employees);

export default Employees;
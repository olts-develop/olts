import {Mongo} from 'meteor/mongo';

import BaseSuper from './../baseschema/BaseSuper';
import BasePerson from './../baseschema/BasePerson';

const Employees = new Mongo.Collection('employees');

const Schema={};

Schema.Employees = new SimpleSchema([BaseSuper, BasePerson, {

    userID: {
        type: String
    }
}]);

Employees.attachSchema(Schema.Employees);

export default Employees;
/**
 * Created by martin on 11.03.2016.
 */
import {Mongo} from 'meteor/mongo';

import BaseSuper from './../../baseschema/BaseSuper';

const BaseRoles = new Mongo.Collection('baseroles');

const Schema={};

Schema.BaseRoles = new SimpleSchema([BaseSuper, {

    role: {
        type: String,
        custom: function() {
            if (this.isInsert) {
                let isDuplicate = Match.test({role: this.value}, BaseRoles);
                if (isDuplicate) {
                    return "DuplicateValue";
                }
            }
        }
    },

    description:{
        type: String,
        optional:true
    },

    visible:{
        type: Boolean,
        optional: true
    }

}]);

BaseRoles.attachSchema(Schema.BaseRoles);

export default BaseRoles;
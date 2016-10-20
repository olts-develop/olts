/**
 * Created by martin on 11.03.2016.
 */
import {Mongo} from 'meteor/mongo';

import BaseSuper from '../../baseschema/BaseSuper';

const Groups = new Mongo.Collection('groups');

const Schema={};

Schema.Groups = new SimpleSchema([BaseSuper, {

    group: {
        type: String,
        custom: function() {
            if (this.isInsert) {
                let isDuplicate = Match.test({group: this.value}, Groups);
                if (isDuplicate) {
                    return "DuplicateValue";
                }
            }
        }
    },

    roles:{
        type: [String],
    },

    description:{
        type: String,
        optional: true
    }
}]);

Groups.attachSchema(Schema.Groups);

export default Groups;
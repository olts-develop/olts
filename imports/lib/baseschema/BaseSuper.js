/**
 * Created by martin on 29.01.2016.
 */

import * as dateHelper from './../../helpers/dateHelper';

export const BaseSuperFields =['createUser','createUserId','createDate','modUser','modUserId','modDate']

const BaseSuper = new SimpleSchema({

    createUser: {
        type: String,

        autoValue: function () {
            if (this.isInsert) {
                const currUser=Meteor.user()
                if (currUser._id != undefined){
                    return currUser.username
                }else {
                    this.unset(); // Prevent user from supplying their own value
                }
            }
        }

    },

    createUserId:{
        type:String,

        autoValue: function () {
            if (this.isInsert) {
                const currUserId=Meteor.userId()
                if (currUserId != undefined){
                    return currUserId
                }else {
                    this.unset(); // Prevent user from supplying their own value
                }
            }
        }
    },

    createDate: {
        type: Date,

        autoValue: function(){
            if (this.isInsert) {

                return dateHelper.currentDate();
            } else if (this.isUpsert) {
                return {$setOnInsert: dateHelper.currentDate()};
            } else {
                this.unset();  // Prevent user from supplying their own value
            }
        }
    },

    modUser: {
        type: String,
        optional: true,

        autoValue: function () {
            if (this.isUpdate) {
                const currUser=Meteor.user()
                if (currUser._id != undefined){
                    return currUser.username
                }
            }
        }
    },

    modUserId:{
        type:String,
        optional: true,

        autoValue: function () {
            if (this.isUpdate) {
                const currUserId=Meteor.userId()
                if (currUserId != undefined){
                    return currUserId
                }
            }


        }

    },

    modDate: {
        type: Date,
        optional: true,
        /* label: function(){
         return Session.get("lang")== "de"
         ?"Modifications Datum" : "Moddate";
         },*/
        autoValue: function(){
            if (this.isUpdate) {
                return dateHelper.currentDate();
            }
        }
    }

});

export default BaseSuper;

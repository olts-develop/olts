/**
 * Created by martin on 29.01.2016.
 */

import * as dateHelper from './../../helpers/dateHelper';

const BaseSuper = new SimpleSchema({

    createUser: {
        type: String,
       /* label: function(){
            return Session.get("lang")== "de"
                ?"erfasst von" : "created by";
        },*/
        /* autoValue: function () {
         if (this.isInsert) {
         /!**
         * test if Meteor.user
         * get employee data
         * set createUser
         *!/
         } else if (this.isUpsert) {
         /!**
         * test if Meteor.user
         * if !document.-id
         * get employee data
         * set createUser
         *!/
         } else {
         this.unset(); // Prevent user from supplying their own value
         }
         },*/
    },
    createDate: {
        type: Date,
        /*label: function(){
            return Session.get("lang")== "de"
                ?"Erstelldatum" : "Createdate";
        },*/
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
        /*label: function(){
            return Session.get("lang")== "de"
                ?"gändert von" : "modified by";
        }*/
        /* autoValue: function () {
         if (this.isInsert) {
         /!**
         * test if Meteor.user
         * get employee data
         * set modUser
         *!/
         } else if (this.isUpsert) {
         /!**
         * test if Meteor.user
         * if !document._id
         * get employee data
         * set createUser
         *!/
         } else {
         this.unset(); // Prevent user from supplying their own value
         }
         },*/
    },
    modDate: {
        type: Date,
       /* label: function(){
            return Session.get("lang")== "de"
                ?"Modifications Datum" : "Moddate";
        },*/
        autoValue: function(){
                return dateHelper.currentDate();
        }
    }

});

export default BaseSuper;

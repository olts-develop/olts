/**
 * Created by martin on 29.01.2016.
 */

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
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date.now()};
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
                return new Date();
        }
    },

    tenant:{
        type: String,
       /* label: function(){
            return Session.get("lang")== "de"
                ?"Firmencode" : "Tenant";
        }*/
        /*autoValue:function() {
            if (this.isInsert) {
                /!**
                 * test if Meteor.user
                 * get temporäre tenent data
                 *
                 *!/
            } else if (this.isUpdate) {
                /!**
                 * test if Meteor.user
                 * get temporäre tenent data
                 * compare document.tenent with temporär tenent data
                 * if ok
                 * update else error
                 *!/


            }
        }*/
        autoValue:function() {
            return "TENENT";
        }
    },

    organisation:{
        type:String,
        /*label: function(){
            return Session.get("lang")== "de"
                ?"Organisation" : "Organisation";
        }*/
        autoValue:function() {
            return "Org";
        }
    }

});

export default BaseSuper;

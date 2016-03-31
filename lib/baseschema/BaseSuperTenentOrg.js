/**
 * Created by martin on 31.03.2016.
 */


import BaseSuper from './BaseSuper';

const BaseSuperTenentOrg = new SimpleSchema([BaseSuper, {
     
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

}]);

export default BaseSuperTenentOrg;

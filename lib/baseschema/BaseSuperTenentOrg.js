/**
 * Created by martin on 31.03.2016.
 */


import BaseSuper from './BaseSuper';

SimpleSchema.messages({
      "notAllowed": "You are not allowed to insert/update this tenant"
})


const BaseSuperTenentOrg = new SimpleSchema([BaseSuper, {
      
     
     
      tenantId:{
            type: String,

            autoValue: function() {
                  if (this.isInsert){
                        Meteor.call("ensureUserTenantAllowed". this.value, function(error, result){
                              if (!result) {
                                    return "notAllowed"
                              }
                              return tenantId
                        })

                  }
            }
            

      },

      organizationsId:{
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

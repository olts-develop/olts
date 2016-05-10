/**
 * Created by mk on 10.05.16.
 */

import Tenants from '/lib/schemas/organizations/tenants'

export default function() {

      let currentUser =  {};
      let currentTenant = {};

      Meteor.methods({

            'tenant.add'(tenant){

                  currentUser =  Meteor.user();

                  //console.log("SERVER tenant.add - tenent: "+tenant)

                  currentTenant= {
                        tenant: tenant.tenant,
                        address: {
                              company: tenant.address.company,
                              street: tenant.address.street,
                              street2: tenant.address.street2,
                              county: tenant.address.county,
                              zip: tenant.address.zip,
                              city: tenant.address.city,
                              phone: [{
                                    phoneType: tenant.address.phonetype,
                                    phoneNumber: tenant.address.phonenumber
                              }]

            }


            };

                 // console.log("SERVER tenant.add - currTenent: "+currentTenent)

                  if (currentUser == undefined){
                        throw new Meteor.Error('LOGGED-OUT','No current user found','You must be looged in')
                        return tenentId;

                        // else test it current user is oltdevelop or oltsupport

                  }

                  console.log("SERVER tenant.add - currUser: "+currentUser);
                  console.log("SERVER tenant.add - insert tenants");


                  Tenants.insert(currentTenant, function(error,result){

                        if (error != undefined){

                              console.log("SERVER tenant.add - error" + error.error+"  /  "+error.message)

                              throw new Meteor.Error('TENENT-INSERT-ERROR',error.message)

                        }

                        console.log("SERVER tenant.add - new tenantTd:   " + result)

                        return result;

                  })


            },

            'tenant.update'(tenantId, tenant){
                  currentUser =  Meteor.user();

                  console.log("SERVER tenant.add - tenentId: "+tenentId+" tenent: "+tenent)

                  currentTenent= {
                        _id: tenantId,
                        tenant: tenant.tenant,
                        address: {
                              company: tenant.company,
                              street: tenant.street,
                              street2: tenant.street2,
                              county: tenant.county,
                              zip: tenant.zip,
                              city: tenant.city,
                              phonetype: tenant.phonetype,
                              phonenumber: tenant.phonenumber
                        }


                  };

                  console.log("SERVER tenant.add - currTenent: "+currentTenent)

                  if (currentUser == undefined){
                        throw new Meteor.Error('LOGGED-OUT','No current user found','You must be looged in')
                        return tenentId;

                        // else test it current user is oltdevelop or oltsupport

                  }

                  console.log("SERVER tenant.add - currUser: "+currentUser)

                  if (tenantId != undefined){

                        currentTenent._id = tenantId;

                        dbTenant = Tenants.findOne(tenentId);
                  }
                  if (dbTenant._id != undefined){

                        console.log("SERVER tenant.add - vgl tenants")

                        if (!_.isEqual(dbTenant,currentTenent)){

                              Tenants.update(tenantId,{$set: {address: {
                                    "company":currentTenent.address.company,
                                    "street":currentTenent.address.street,
                                    "street2":currentTenent.address.street2,
                                    "county":currentTenent.address.county,
                                    "zip":currentTenent.address.zip,
                                    "city":currentTenent.address.city,
                                    "phonetype":currentTenent.address.phonetype,
                                    "phonenumber":currentTenent.address.phonenumber
                              }

                              }})

                              return tenantId;

                        }

                  }

            }

      });
}
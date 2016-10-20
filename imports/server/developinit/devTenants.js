/**
 * Created by martin on 19.04.2016.
 */


import Tenants from '../../imports/lib/schemas/organizations/tenants';


export default function () {

      if (Tenants.find().count() == 0) {

            Tenants.insert(
                  {
                        tenant: "Onlinetravel",
                        organizations:[

                              {org: "Develop", default: true, createUser: "martin",modUser: "martin"},
                              {org: "Support", createUser: "martin",modUser: "martin"},
                              {org: "Admin", createUser: "martin",modUser: "martin"}

                        ],
                        createUser: "martin",
                        modUser: "martin",
                        address: [{
                              street: "jenatschstrasse 9",
                              country: "ch",
                              zip:"8004",
                              city:"Zürich"
                        }]
                  },

                  Tenants.insert(
                        {
                              tenant: "MyCompany",
                              organizations: [
                  
                                    {org: "Sales", default: true, createUser: "martin", modUser: "martin"},
                                    {org: "Support", createUser: "martin", modUser: "martin", address:[{
                                          street: "Suportstreet",
                                          country: "de",
                                          zip:"80331",
                                          city:"München"
                                    }]},
                                    {org: "Admin", createUser: "martin", modUser: "martin"},
                                    {org: "Delivery", createUser: "martin", modUser: "martin"}
                  
                              ],
                              createUser: "martin",
                              modUser: "martin",
                              address:[{
                                    street: "street",
                                    country: "ch",
                                    zip:"9000",
                                    city:"St Gallen"
                              }]
                        }
                  )
            )

            console.log("startup.js says: Tenants "  + Tenants.find().count());
      }
}





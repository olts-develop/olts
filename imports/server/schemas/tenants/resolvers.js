/**
 * Created by martin on 07.11.2016.
 */

import {Tenants} from './schema';

import setBaseSuper from '../interfaces/setBaseSuper'

const tenantResolvers = {

      Query: {
            async allTenants() {
                  return Tenants.find().fetch();
            },
            async getTenant (_id, code) {
                  if (_id) {
                        return Tenants.findOne({_id: _id});
                  } else {
                      if (code) {
                            return Tenants.findOne({code: code});
                      }
                  }
            },
      },

      Mutation: {
            async createTenant ({code, description, isActive}) {
                 const baseSuper = setBaseSuper();
                 const tenantId = Tenants.insert({
                       baseSuper,
                       code: code,
                       description: description,
                       isActive: isActive
                 });

                  console.log("SERVER createTenant:   " + tenantId);

                  return {
                        _id: tenantId,

                  }


            }

      }

};

export default tenantResolvers;
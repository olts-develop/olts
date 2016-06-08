/**
 * Created by mk on 08.06.16.
 */


import {Tenants} from '/lib/collections';

export function tenantsList(){

      return new Promise((resolve, reject) => {
            try{
                  let tenants = Tenants.find({}, {sort: {code: 1}});

                  resolve(tenants);

            } catch (ex) {
                  reject(ex)
            }

      });
}
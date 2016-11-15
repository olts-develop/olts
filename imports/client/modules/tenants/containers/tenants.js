/**
 * Created by mk on 31.05.16.
 */

import Tenants from '../components/tenants';
import { compose, composeAll } from 'react-komposer-plus';
import { useDeps } from 'mantra-plus';
import gql from 'graphql-tag';

const mapQueryToProps = ({ context}, onData, id) => {
      const {Client} = context();

      const query = `
            query tenant {
                  getTenant{
                        _id
                        code
                        description
                        isActive
                  }
            }
      `;

      const taggedQuery = gql`${query}`;

      Client.query({
            query: taggedQuery,
            forceFetch: true,
      }).then ((graphQlResult) =>{
            onData(null, {
                  tenant: graphQlResult.data.getTanant(_id=id),
                  errors: graphQlResult.errors,
            });
      }).catch((ex) => {
            onData(ex);
      });
};



const mapDepsToProps = (context, actions) => ({
            ...actions.tenantsLogicActions,
            context: () => context

});

export default composeAll(
      compose(mapQueryToProps()),
      useDeps(mapDepsToProps())
)(Tenants);

/**
 * Created by mk on 14.06.16.
 */

import TenantList from '../components/tenantList';
import {compose, composeAll} from 'react-komposer-plus';
import {useDeps} from 'mantra-plus';
import qql from 'graphql-tag';


const mapQueryToProps = ({context}, onData) => {
      const {Client} = context();

      const query = `
            query tenants {
                  allTenants {
                        _id
                        code
                        description
                        isActive
                  }
            }
      `;

      const taggedQuery = qql`${query}`;

      Client.query({
            query: taggedQuery,
            forceFetch: true,
      }).then((graphQlResult) => {
            onData(null, {
                  tenants:graphQlResult.data.allTenants,
                  errors: graphQlResult.errors,
            });
      }).catch((ex) => {
            onData(ex);
      })

};

const mapDepsToProps = (context, actions) => ({
      ...actions.tenantsLogicActions,
      context: () => context
});

export default composeAll(
      compose(mapQueryToProps),
      useDeps(mapDepsToProps)
)(TenantList);

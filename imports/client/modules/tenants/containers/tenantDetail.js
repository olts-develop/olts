/**
 * Created by martin on 23.11.2016.
 */

import {useDeps} from 'mantra-core';
import {withRedux, composeAll} from 'react-komposer-plus';
import {qraphql} from 'react-apollo';
import qgl from 'graphql-tag';
import tenantDetail from '../components/tenantDetail';

const GET_TENANT_DETAIL = qgl`
      query getTenantDetail ($id: String, $code: String){
      getTenant(_id: $id, code: $code)
            {
                  _id
                  createUser
                  createUserId
                  createDate
                  modUser
                  modUserId
                  modDate
                  code
                  description
                  isActive
            }
      }`;

const WITH_GET_TENANT_DETAIL = graphql(GET_TENANT_DETAIL, {
      //we are returning the query as a prop.
      //this will then be passed to the action

      props: ({ownProps, query }) => ({
            getTenantDetail(variables) {
                  return query({
                        variables:{...variables}
                  });
            }
      })
});

const mapStateToProps = ({ tenantReducer }) => ({
      tenant: tenantReducer.tenants
});

export const depsMapper = (context, actions) => ({
      ...actions.logicActions,
      context: () => context
});

export default composeAll(
      withRedux(mapStateToProps),
      useDeps(depsMapper),
      WITH_GET_TENANT_DETAIL
)(tenantDetail);
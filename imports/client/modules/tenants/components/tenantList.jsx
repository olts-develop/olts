/**
 * Created by mk on 14.06.16.
 */

import React from 'react';

//Material-UI
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem'


class tenantList extends React.Component {


      render() {

            const {tenants, error} = this.props;

            return (
                
                        <List>
                              {tenants ? tenants.map(tenant => (

                                    <ListItem key={tenant._id} primaryText= {tenant.code} onClick={this.selectItem.bind(this,tenant)}/>

                              )): null}

                        </List>

            )
      }

      selectItem(tenant, event) {
            event.preventDefault();
            const {getTenant} = this.props;
            const tenantId = tenant._id;
            getTenant(tenantId);
      }


}

export default tenantList
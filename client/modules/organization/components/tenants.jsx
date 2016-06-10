/**
 * Created by mk on 04.05.16.
 */

import React from 'react';

//react-bootstrap
import {Row, Col} from 'react-bootstrap';

//Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem'
import FlatButton from 'material-ui/FlatButton';
import Add from 'material-ui/svg-icons/content/add'

//redux-form
import {reduxForm} from 'redux-form';
import {TenantsFields} from '/lib/schemas/organizations/tenants'

const lightMuiTheme = getMuiTheme(lightBaseTheme);



class tenants extends React.Component {
      
      componentWillReceiveProps() {
            const {tenant} = this.props
            const {editTenantStatus} = this.props;
            editTenantStatus(tenant)

      }

      render() {

            const {tenants, tenant, error} = this.props;

            this.addTenant = this.addTenant.bind(this)
            /*this.updateTenant = this.updateTenant.bind(this)*/
            /*this.handleChange = this.handleChange.bind(this)*/


            return (
                  <MuiThemeProvider muiTheme={lightMuiTheme}>
                        <Paper className="FormInput" zDepth={3}>

                              {error? <p style = {{color: 'red'}}>{error}</p> :null}

                              <Row>
                                    <Col lg={5} className="form-padding-5-left">


                                          <TextField ref="code" hintText="Tenant code" floatingLabelText= "Code" name="code" autoFocus/>
                                          <TextField ref="description" hintText="Tenant name/description" floatingLabelText= "Description" />

                                          <div className="col-align-right form-padding-15-right">
                                                <FlatButton  onMouseUp={this.addTenant} label="Add" labelPosition="after" icon={<Add/>} primary={true}/>
                                          </div>
                                    </Col>

                                    <Col xs={6} >
                                          <Paper zDepth={0} >
                                                <List>
                                                      {tenants ? tenants.map(tenant => (

                                                            <ListItem key={tenant._id} primaryText= {tenant.code} onClick={this.selectItem.bind(this,tenant)}/>

                                                      )): null}

                                                </List>
                                          </Paper>
                                    </Col>


                              </Row>

                        </Paper>

                  </MuiThemeProvider>
            )
      }

      addTenant(event) {
            event.preventDefault();
            const {addTenant}=this.props;
            const {code, description} = this.refs;
            addTenant(code.getValue(), description.getValue());
            
      }


      selectItem(tenant, event) {
            event.preventDefault();
            const {getTenant} = this.props;
            const tenantId = tenant._id;
            getTenant(tenantId);
      }

      // handleChange (event) {
      //       event.preventDefault();
      //       const {handleChange}=this.props;
      //       const {code} = this.refs;
      //       handleChange('code', code.getValue())
      // };


};
export default tenants
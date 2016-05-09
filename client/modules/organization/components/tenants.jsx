/**
 * Created by mk on 04.05.16.
 */

import React from 'react';

import OltAdress from './../../oltTemplates/components/oltAdress.jsx';
import {Row, Col} from 'react-bootstrap';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem'
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Add from 'material-ui/svg-icons/content/add'


const lightMuiTheme = getMuiTheme(lightBaseTheme);

class tenants extends React.Component {


      render() {

            const {tenants, organizations, error} = this.props;


            this.addTenant = this.addTenant.bind(this)

            return (
                  <MuiThemeProvider muiTheme={lightMuiTheme}>
                        <Paper className="FormInput" zDepth={3}>
                              <Row>
                                    <Col lg={5} className="form-padding-5-left">

                                          <TextField ref="tenant" hintText="Tenant" floatingLabelText= "Tenant"  autoFocus/>

                                    </Col>

                                    <Col lg={7}  className="form-padding-5-left">
                                          <OltAdress addressType="tenant" />
                                    </Col>
                              </Row>

                              <Row>
                                    <Divider inset={true} />
                              </Row>

                              <Row>
                                    <Col lg={5} className="form-padding-5-left">

                                          <TextField ref="organization" hintText="Organization" floatingLabelText= "Organization" />

                                    </Col>

                                    <Col lg={7}  className="form-padding-5-left">
                                          <OltAdress addressType= "org"/>
                                    </Col>
                              </Row>

                              <Row>
                                    <div className="col-align-right form-padding-15-right">
                                          <FlatButton  onMouseUp={this.addTenant} label="Add" labelPosition="after" icon={<Add/>} primary={true}/>
                                    </div>
                              </Row>

                              <Row>

                                    <Divider inset={true} />
                              </Row>

                              <Row>
                                    <Col xs={6} >
                                          <Paper className="cell-half-form form-padding-10-left" zDepth={0} >


                                                <List>
                                                      {tenants ? tenants.map(tenant => (

                                                            <ListItem key={tenant._id} primaryText= {tenant.tanant} />

                                                      )): null}

                                                </List>
                                          </Paper>
                                    </Col>

                                    <Col xs={6}>
                                          <Paper className="cell-half-form" zDepth={0} >

                                                <List>

                                                      {organizations ? organizations.map(organization => (
                                                            <ListItem key={organization._id} primarytext = {organization.org} />
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
            const {
                  tenant, tenantcompany, tenantstreet, tenantstreet2, tenantcounty, tenantzip, tenantcity, tenantphonetype, tenantphonenumber,
                  organization, orgcompany, orgstreet, orgstreet2, orgcounty, orgzip, orgcity, orgphonetype, orgphonenumber
            } = this.refs;
            const ten = {
                  tenant: tenant.getValue(),
                  address: {
                        company: tenantcompany.getValue(),
                        street: tenantstreet.getValue(),
                        street2: tenantstreet2.getValue(),
                        county: tenantcounty.getValue(),
                        zip: tenantzip.getValue(),
                        city: tenantcity.getValue(),
                        phonetype: tenantphonetype.getValue(),
                        phonenumber: tenantphonenumber.getValue()
                  }
            }

            const org = {
                  org: organization.getValue(),
                  address: {
                        company: orgcompany.getValue(),
                        street: orgstreet.getValue(),
                        street2: orgstreet2.getValue(),
                        county: orgcounty.getValue(),
                        zip: orgzip.getValue(),
                        city: orgcity.getValue(),
                        phonetype: orgphonetype.getValue(),
                        phonenumber: orgphonenumber.getValue()
                  }

            }

            addTenant(ten, org);
      }




};
export default tenants
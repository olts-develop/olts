/**
 * Created by mk on 04.05.16.
 */

import React from 'react';

import OltAddress from './../../oltTemplates/container/oltAddress';
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
            this.tentantId = tenants? this.props.tenants._id:undefined
            this.organizationId = organizations? this.props.organizations._id: undefined

            this.addTenant = this.addTenant.bind(this)


            return (
                  <MuiThemeProvider muiTheme={lightMuiTheme}>
                        <Paper className="FormInput" zDepth={3}>

                              {error ? <p style = {{color: 'red'}}>{error}</p> :null}

                              <Row>
                                    <Col lg={5} className="form-padding-5-left">

                                          <TextField ref="tenant" hintText="Tenant" floatingLabelText= "Tenant"  autoFocus/>

                                    </Col>

                                    <Col lg={7}  className="form-padding-5-left">
                                          <TextField ref="company" hintText="Company name" floatingLabelText="Company"/>
                                          <TextField ref="street" hintText="Street" floatingLabelText="Street"/>
                                          <TextField ref="street2" hintText="c/o" floatingLabelText="c/o"/>
                                          <TextField ref="county" hintText="Country" floatingLabelText="Country"/>
                                          <TextField ref="zip" hintText="Zip" floatingLabelText="Zip"/>
                                          <TextField ref="city" hintText="City" floatingLabelText="City"/>
                                          <TextField ref="phonetype" hintText="Phone type" floatingLabelText="Phone type"/>
                                          <TextField ref="phonenumber" type="tel" hintText="Number" floatingLabelText="Phonenumber"/>
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
                                          <TextField ref="orgAdrcompany" hintText="Company name" floatingLabelText="Company"/>
                                          <TextField ref="orgAdrstreet" hintText="Street" floatingLabelText="Street"/>
                                          <TextField ref="orgAdrstreet2" hintText="c/o" floatingLabelText="c/o"/>
                                          <TextField ref="orgAdrcounty" hintText="Country" floatingLabelText="Country"/>
                                          <TextField ref="orgAdrzip" hintText="Zip" floatingLabelText="Zip"/>
                                          <TextField ref="orgAdrcity" hintText="City" floatingLabelText="City"/>
                                          <TextField ref="orgAdrphonetype" hintText="Phone type" floatingLabelText="Phone type"/>
                                          <TextField ref="orgAdrphonenumber" type="tel" hintText="Number" floatingLabelText="Phonenumber"/>
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

:
                        </Paper>

                  </MuiThemeProvider>
            )
      }

      addTenant(event) {
            event.preventDefault();
            const {addTenant}=this.props;
            const {
                  tenant, company, street, street2, county, zip, city, phonetype, phonenumber,
                  organization, orgAdrcompany, orgAdrstreet, orgAdrstreet2, orgAdrcounty, orgAdrzip, orgAdrcity, orgAdrphonetype, orgAdrphonenumber
            } = this.refs;

            const tentantId = this.props.tentantId;
            const organizationId = this.props.organizationId
            const ten = {
                  tenant: tenant.getValue(),
                  address: {
                        company: company.getValue(),
                        street: street.getValue(),
                        street2: street2.getValue(),
                        county: county.getValue(),
                        zip: zip.getValue(),
                        city: city.getValue(),
                        phonetype: phonetype.getValue(),
                        phonenumber: phonenumber.getValue()
                  }
            }

            const org = {
                  org: organization.getValue(),
                  address: {
                        company: orgAdrcompany.getValue(),
                        street: orgAdrstreet.getValue(),
                        street2: orgAdrstreet2.getValue(),
                        county: orgAdrcounty.getValue(),
                        zip: orgAdrzip.getValue(),
                        city: orgAdrcity.getValue(),
                        phonetype: orgAdrphonetype.getValue(),
                        phonenumber: orgAdrphonenumber.getValue()
                  }

            }

            addTenant(tentantId, ten, organizationId, org);
      }




};
export default tenants
/**
 * Created by mk on 04.05.16.
 */

import React from 'react';

import Tenants from './../../../../lib/schemas/organizations/Tenants';
import {Row, Col} from 'react-bootstrap';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton  from 'material-ui/FlatButton';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem'
import Divider from 'material-ui/Divider';


const lightMuiTheme = getMuiTheme(lightBaseTheme);

class tenants extends React.Component {


      getDefaultOrganisation(){


      }


      render() {

            const {tenants, error} = this.props;


            /**
             * define events here
             *
             * this.function = this.function.bind(this);
             */


            return (
                  <MuiThemeProvider muiTheme={lightMuiTheme}>
                        <Paper className="form-input-small" zDepth={3}>
                              <Row>
                                    <TextField ref="tenant" hintText="Tenant" floatingLabelText= "Tenant" className="form-padding-10-left" autoFocus/>
                              </Row>
                              <Row>
                                    <TextField ref="organization" hintText="Organization" floatingLabelText= "Organization" className="form-padding-10-left" />
                              </Row>
                              <Row>
                                    <span>   </span>
                              </Row>

                              <Row>
                                    <Col xs={6} >
                                          <Paper className="cell-half-form form-padding-10-left" zDepth={0} >


                                                <List>
                                                      {tenants.map(tenant => (

                                                            <ListItem primaryText= {tenant.tanant} />

                                                      )
                                                            

                                                </List>
                                          </Paper>
                                    </Col>

                                    <Col xs={6}>
                                          <Paper className="cell-half-form" zDepth={0} >


                                                <List>
                                                      <ListItem primaryText="martin" />

                                                </List>
                                          </Paper>
                                    </Col>

                              </Row>


                        </Paper>

                  </MuiThemeProvider>
            )
      }


};
export default tenants
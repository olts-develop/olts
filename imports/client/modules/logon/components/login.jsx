/**
 * Created by martin on 14.04.2016.
 */

import React from 'react';
import {Row, Col} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper'
import FlatButton  from 'material-ui/FlatButton';
import PersonAdd from 'material-ui/svg-icons/social/person-add';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

class login extends React.Component {


      render() {

            const {error} = this.props;
            this.login = this.login.bind(this);
            this.logout= this.logout.bind(this);


            return (
                  <MuiThemeProvider muiTheme={lightMuiTheme}>
                        <Paper className="FormInput" zDepth={3}>

                              <Row>
                                    <Col lg={6} className="logon-right-col">
                                          <h3>Online Travel</h3>
                                    </Col>

                                    <Col lg={6}>
                                          <Row >
                                                <div className="col-align-right form-padding-15-right">
                                                      <FlatButton onMouseUp={this.register}  linkedButton = {true} label="New User" labelPosition="after" icon={<PersonAdd/>} secondary={true}/>
                                                </div>
                                          </Row>
                                          <Row>
                                                <TextField ref="user" hintText="User / Email" floatingLabelText="User" className="form-padding-10-left" autoFocus/>
                                          </Row>
                                          <Row>
                                                <TextField ref="password" hintText="password" floatingLabelText="Password" type="password" className="form-padding-10-left"/>
                                          </Row>
                                          <Row>
                                                <div className="col-align-right form-padding-15-right">

                                                      <FlatButton onClick={this.login} primary={true} type="submit" label="Login"/>
                                                      <FlatButton onMouseUp={this.logout} primary={true} type="submit" label="Logout"/>
                                                </div>

                                          </Row>
                                          <Row>
                                                <Col lg={8} className="col-align-right">
                                                      {error ? <p style = {{color: 'red'}}>{error}</p> :null}
                                                </Col>
                                          </Row>

                                    </Col>

                              </Row>

                        </Paper>
                  </MuiThemeProvider>
            )
      }

      login(event) {
            event.preventDefault();
            const {loginUser}=this.props;
            const {user, password} = this.refs;
            console.log("user: "+user.getValue() + '  '+"password: "+password.getValue())
            loginUser(user.getValue(),password.getValue())
      }

      logout(event) {
            event.preventDefault();
            const{logoutUser}=this.props;
            logoutUser();
      }
      
      register() {
            FlowRouter.go('/register')
      }

};
export default login
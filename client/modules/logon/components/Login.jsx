/**
 * Created by martin on 14.04.2016.
 */

import React from 'react';
import {Row, Col, Panel, Button, Glyphicon, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const loginVals = {}

class login extends React.Component {

      handleChange(event){

            loginVals[event.target.id] = event.target.value
      }

      render() {

            const {error} = this.props;

            return (
                  <Panel className="FormInput" >

                        <Row>
                              <Col lg={6} className="logon-right-col">
                                    <h3>Online Travel</h3>
                              </Col>
                              <Form>
                                    <Col lg={6}>
                                          <Row >
                                                <Col lg={4} xsOffset={8}>
                                                      <a href="/register"><Glyphicon glyph="plus"></Glyphicon> New User</a>
                                                </Col>
                                          </Row>

                                          <FormGroup controlId="user">
                                                <ControlLabel>User</ControlLabel>
                                                <FormControl type="user" placeholder="User / Email" onChange={this.handleChange} autofocus/>
                                          </FormGroup>
                                          <FormGroup controlId="password">
                                                <ControlLabel>Password</ControlLabel>
                                                <FormControl type="password" placeholder="Password" onChange={this.handleChange}/>
                                          </FormGroup>
                                          <Row>

                                                <Col lg={6}>
                                                      <FormGroup>
                                                            <Button onClick={this.login.bind(this)} bsStyle="primary" bsSize="small" type="submit">Login</Button>
                                                      </FormGroup>
                                                </Col>

                                                <Col lg={6} className="col-align-right">
                                                      <FormGroup>
                                                            <Button onClick={this.logout.bind(this)} bsStyle="primary" bsSize="small" type="submit">Logout</Button>
                                                      </FormGroup>
                                                </Col>

                                          </Row>
                                          <Row>
                                                <Col lg={6} className="col-align-right">
                                                      {error ? <p style = {{color: 'red'}}>{error}</p> :null}
                                                </Col>
                                          </Row>

                                    </Col>
                              </Form>
                        </Row>

                  </Panel>
            )
      }

      login(event) {
            event.preventDefault();
            const {loginUser}=this.props;
            loginUser(loginVals.user, loginVals.password);
      }

      logout(event) {
            event.preventDefault();
            const{logoutUser}=this.props;
            logoutUser();
      }

};
export default login
/**
 * Created by martin on 14.04.2016.
 */

import React from 'react';
import {Grid, Row, Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';

class login extends React.Component {

      render() {

            const {error} = this.props;

            return (
                  <Panel className="FormInput" >

                        <form >
                              <Row>
                                    <Col lg={6} className="logon-right-col">
                                          <h3>Online Travel</h3>
                                    </Col>
                                    <Col lg={6}>
                                          <Row >
                                                <Col xs={4} xsOffset={8}>
                                                      <a href="/register"><Glyphicon glyph="plus"></Glyphicon> New User</a>
                                                </Col>
                                          </Row>
                                          <Input ref="user" type="user" label="User" placeholder="User / Email" autofocus/>
                                          <Input ref="password" type="password" label="Password" placeholder="Password" />

                                          <Row>
                                                <Col lg={6}>
                                                      <ButtonInput onClick={this.login.bind(this)} bsStyle="primary" type="submit" value="Login"/>
                                                </Col>
                                                <Col lg={6} className="col-align-right">
                                                      <ButtonInput onClick={this.logout.bind(this)} bsStyle="primary" type="submit" value="Logout" />
                                                </Col>
                                          </Row>
                                          <Row>
                                                <Col lg={6} className="col-align-center">
                                                      {error ? <p style = {{color: 'red'}}>{error}</p> :null}
                                                </Col>
                                          </Row>

                                    </Col>
                              </Row>
                        </form>

                  </Panel>


            )
      }

      login(event) {
            event.preventDefault();
            const {loginUser}=this.props;
            const {user, password} = this.refs;
            loginUser(user.getValue(), password.getValue());
            user.getInputDOMNode().value = '';
            password.getInputDOMNode().value = '';
      }

      logout(event) {
            event.preventDefault();
            const{logoutUser}=this.props;
            logoutUser();
      }

};
export default login
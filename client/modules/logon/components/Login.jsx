import React from 'react';
import {Grid, Row, Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';

import AppConfig from '../../../configs/app'

class login extends React.Component {

    render() {

        const {error} = this.props;

        return (
            <Col lg={6} lgOffset={3}>

                <Panel>
                    <h1>Login</h1>
                    {error ? <p style = {{color: 'red'}}>{error}</p> :null}

                    <form>
                        <Row >
                            <Col xs={3} xsOffset={9}>
                                <a href="/register"><Glyphicon glyph="plus"></Glyphicon> New User</a>
                            </Col>
                        </Row>
                        <Input ref="user" type="user" label="User" placeholder="User / Email" />
                        <Input ref="password" type="password" label="Password" placeholder="Password" />
                        <Grid>
                            <Row>
                                <Col xs={12} md={4}>
                                    <ButtonInput onClick={this.login.bind(this)} bsStyle="primary" type="submit" value="Login"/>
                                </Col>
                                <Col xs={6} md={1}>
                                    <ButtonInput onClick={this.logout.bind(this)} bsStyle="primary" type="submit" value="Logout"/>
                                </Col>
                            </Row>
                        </Grid>


                    </form>

                </Panel>

            </Col>
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

}

export default login;
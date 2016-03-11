import React from 'react';
import {Row, Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';

import AppConfig from '../../../configs/app'

class Login extends React.Component {

    render() {

        const {error} = this.props;

        return (
            <Col lg={6} lgOffset={3}>

                <Panel>
                    <h1>Login</h1>
                    {error ? <p style = {{color: 'red'}}>{error}</p> :null}

                    <form>
                        <Row className="show-grid">
                            <Col xs={3} xsOffset={9}>
                                <a href="/register"><Glyphicon glyph="plus"></Glyphicon> New User</a>
                            </Col>
                        </Row>
                        <Input ref="user" type="user" label="User" placeholder="User / Email" />
                        <Input ref="password" type="password" label="Password" placeholder="Password" />
                        <ButtonInput onClick={this.login.bind(this)} bsStyle="primary" type="submit" value="Login"/>

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


}

export default Login;
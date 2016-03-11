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
                        <Input ref="user" type="user" placeholder="User / Email" />
                        <Input ref="password" type="password" placeholder="Password" />


                        {AppConfig.isDevelop ?
                            <Input ref="password2" type="password" placeholder="retype password" />
                            : null}
                        <Row>
                            <Col lg={3}>
                                <ButtonInput onClick={this.login.bind(this)} bsStyle="primary" type="submit" value="Login"/>
                            </Col>
                            <Col lg={3}>
                                {AppConfig.isDevelop ?
                                    <ButtonInput onClick={this.createUser.bind(this)} bsStyle="primary" type="submit" value="Create"/>
                                    : null}
                            </Col>
                        </Row>

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

    createUser(event) {
        event.preventDefault();
        const {create}=this.props;
        const {user, password, password2} = this.refs;
        create(user.getValue(),password.getValue(), password2.getValue());
        user.getInputDOMNode().value = '';
        password.getInputDOMNode().value = '';
        password2.getInputDOMNode().value = '';
    }

}

export default Login;
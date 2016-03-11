import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';

class NewUser extends React.Component {

    render() {
        const {error} = this.props;

        return (
            <Col xs={12} sm={6} smOffset={3}>

                <Panel>

                    <h1>Register</h1>
                    {error ? <p style={{color: 'red'}}>{error}</p> : null}
                    <form>
                            <Col xs={3} xsOffset={9}>
                                <a href="/"><Glyphicon glyph="arrow-left"></Glyphicon> Back</a>
                            </Col>

                        <Input ref="user" type="user" label="UserID" placeholder="UserID" />
                        <Input ref="email" type="email" label="Email" placeholder="Email" />
                        <Input ref="password" type="password" label="Password" placeholder="Password" />
                        <Input ref="password2" type="password" label="Confirm password" placeholder="Confirm password" />
                        <ButtonInput onClick={this.createUser.bind(this)} bsStyle="primary" type="submit" value="Sign Up"/>

                    </form>

                </Panel>

            </Col>
        )
    }

    createUser(e) {
        e.preventDefault();
        const {create} = this.props;
        const {user, email, password, password2} = this.refs;
        create(user.getValue(), email.getValue(), password.getValue(), password2.getValue());
        user.getInputDOMNode().value = '';
        email.getInputDOMNode().value = '';
        password.getInputDOMNode().value = '';
        password2.getInputDOMNode().value = '';
    }
}

export default NewUser;
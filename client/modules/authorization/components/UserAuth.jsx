import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';

class UserAuth extends React.Component {

    render() {

        const {error} = this.props;
        const {user} = this.props;

        return (
            <div>
                <h1>Assign role to user {user.name}</h1>
            </div>

        )

    }
}

export default UserAuth;

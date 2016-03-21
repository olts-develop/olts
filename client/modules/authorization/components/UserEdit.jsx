import React from 'react';
import {Table, Row, Col, Panel, Glyphicon, Input } from 'react-bootstrap';

class UserEdit extends React.Component {


    render() {

        const {user}= this.props;

        return (

            <form>

                <Row>
                    <Col md={6}>

                        </Col>
                    <Col md={6}>
                        <input type="select" label="Groups">

                        </input>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <input type="text" label="UserId" value={user.username} readOnly/>
                        </Col>
                    <Col md={4}>
                        <input type="text" label="email" value={user.emails[0].address} readOnly/>
                    </Col>
                    <Col md={4}>
                        <input type="text" label="Roles/Groups" value={user.roles} readOnly/>
                    </Col>
                </Row>

            </form>

        )
    }

    onChange(event) {
        let role = e.target.value;
        console.log('UserEdit role: ' + role);
    }
};

export default UserEdit;
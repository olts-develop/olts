import React from 'react';
import {Table, Row, Col, Panel, Glyphicon, Input } from 'react-bootstrap';


class UserEdit extends React.Component {


    render() {

        const {user, baseroles}= this.props;

        return (

            <form>

                <Row>
                    <Col md={6}>

                        </Col>
                    <Col md={6}>
                        <Input type="select" label="Roles">
                            {baseroles.map(baserole => (
                                <option key={baserole._id} value={baserole.role}>{baserole.description}</option>
                            ) )}
                        </Input>
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


};

export default UserEdit;
import React from 'react';
import {Table, Row, Col, Panel, Glyphicon, Input } from 'react-bootstrap';

class UserList extends React.Component {


    render() {

        const {user, baseroles, groups}= this.props;

        return (

            <form>

                <Row>
                    <Col md={6}>
                        <input type="select" label="Roles">
                            {baseroles.map(baserole =>(
                                <option key={baserole._id} value={baserole.role}/>
                            ))}
                            </input>
                        </Col>
                    <Col md={6}>
                        <input type="select" label="Groups">
                            {groups.map(group =>(
                                <option key={group._id} value={group.group}/>
                            ))}
                        </input>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <input type="text" label="UserId" value={user.username} readonly/>
                        </Col>
                    <Col md={4}>
                        <input type="text" label="email" value={user.emails[0].address} readonly/>
                    </Col>
                    <Col md={4}>
                        <input type="text" label="Roles/Groups" value={user.roles} readonly/>
                    </Col>
                </Row>

            </form>

        )
    }
}
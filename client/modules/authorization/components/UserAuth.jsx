import React from 'react';
import {Panel, Table,  Row, Col, Glyphicon } from 'react-bootstrap';

import UserEdit from './UserEdit.jsx';


class UserAuth extends React.Component {

    render() {

        const {users, totalUsers }= this.props;

        return(



            <Panel>
                <Col xs={12} sm={6}>
                    <Row>
                        <Col xs={3}>
                            <h1>Users</h1>
                        </Col>

                        <UserAuth/>

                        <Table striped bordered condensed hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>Roles</th>
                            </tr>
                            </thead>


                            <tbody>
                            {users.map(user => (
                                <tr key={user._id} onClick ={this.selectUser.bind(this)} ref="userline">
                                    <th>#</th>
                                    <th>{user.username}</th>
                                    <th>{user.emails[0].address}</th>
                                    <th>Roles</th>
                                </tr>
                            ))}
                            </tbody>

                        </Table>

                    </Row>
                </Col>
            </Panel>

        )

    }

 selectUser() {

     console.log('userlist clicked: ' + this.refs)

 }






};

export default UserAuth;

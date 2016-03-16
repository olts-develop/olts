import React from 'react';
import {Table,  Row, Col, Glyphicon } from 'react-bootstrap';

import UserList from './UserList.jsx';

const UserAuth  = ({users, totalUsers}) => (


            <Row>
                <Col xs={12}>
                   <h1>Users</h1>
                </Col>


                <Table>
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

                        <tr>
                            <th>#</th>
                            <th>{user.username}</th>
                            <th>{user.emails[0].address}</th>
                            <th>Roles</th>
                        </tr>
                    ))}
                    </tbody>

                </Table>

                ))}
            </Row>

);

export default UserAuth;

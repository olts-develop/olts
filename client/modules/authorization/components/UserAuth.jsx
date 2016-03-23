import React from 'react';
import {Panel, Table,  Row, Col, Glyphicon } from 'react-bootstrap';



class UserAuth extends React.Component {

    render() {

        const {users, totalUsers, user }= this.props;

        return(



            <Panel>
                <Col xs={12} sm={6}>
                    <Row>
                        <Col xs={3}>
                            <h1>Users</h1>
                        </Col>

                        

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
                                <tr key={user._id} onClick ={this.selectUser.bind(this,user)} ref={user._id}>
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

    selectUser(user, e) {
        e.preventDefault();
        const {selectSingleUser} = this.props;
        const userId = user._id;
        selectSingleUser(userId);

        console.log('userlist clicked: ' + user._id)

    }

};

export default UserAuth;

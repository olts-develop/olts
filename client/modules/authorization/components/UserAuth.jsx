import React from 'react';
import {Panel, Table,  Row, Col, Glyphicon } from 'react-bootstrap';

class userAuth extends React.Component {

    render() {

        const {users, currUserId }= this.props;

        return(


              <Panel>
                  <Row>
                      <Col lg={12}>


                      </Col>



                      <Col xs={12} sm={6}>
                          <Row>
                              <Col xs={3}>
                                  <h1>Users</h1>
                              </Col>


                              <Col>
                                  <Table striped bordered condensed hover responsive>
                                      <thead>
                                      <tr>
                                          <th>Name</th>
                                          <th>Email</th>
                                          <th>Role</th>
                                      </tr>
                                      </thead>


                                      <tbody>
                                      {users.map(user => (

                                            <tr key={user._id} onClick ={this.selectUser.bind(this,user)} ref={user._id}>
                                                <th>{user.username}</th>
                                                <th>{user.emails[0].address}</th>
                                                <th>Roles</th>
                                            </tr>
                                      ))}
                                      </tbody>

                                  </Table>
                              </Col>
                          </Row>
                      </Col>
                  </Row>
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

export default userAuth;

import React from 'react';
import {Table, Row, Col, Panel, Glyphicon, Input } from 'react-bootstrap';


class userEdit extends React.Component {



    render() {

        const {user, baseroles,groups}= this.props;

        return (

            <form>

                <Row>
                    <Col md={6}>
                        <Input type="select" label="Roles"  ref="role" onChange={this.setRole.bind(this)}>
                            <option selected value="NONE">-----</option>
                            {baseroles.map(baserole => (
                                <option key={baserole._id} value={baserole._id}>{baserole.description}</option>
                            ) )}
                        </Input>
                    </Col>
                    <Col md={6}>
                        <Input type="select" label="Groups"  ref="group" onChange={this.setGroup.bind(this)}>
                            <option selected value="NONE">-----</option>
                            {groups.map(group => (
                                <option key={group._id} value={group._id}>{group.description}</option>
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
    setRole(e) {
       e.preventDefault();
        const {assignRole} = this.props;
        const userId = this.props.user._id;
        const groupId= this.refs.role.getInputDOMNode().value;

        assignRole(userId, groupId);

        console.log('role clicked: ' + userId + 'role: ' + role)

    }

    setGroup(e) {
        e.preventDefault();
        const {assignGroup} = this.props;
        const userId = this.props.user._id;
        const groupId= this.refs.group.getInputDOMNode().value;

        assignGroup(userId, groupId);

        console.log('role clicked: ' + userId + 'groupId: ' + group)

    }

};

export default userEdit;
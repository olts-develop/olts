import React from 'react';
import {Table, Row, Col, Panel, Glyphicon, Input } from 'react-bootstrap';

class UserList extends React.Component {


    render() {

        const {user}= this.props;

        console.log('UserList')

        return (
            <div>

                <tbody>

                <tr>
                    <th>#</th>
                    <th>user.username</th>
                    <th>user.email</th>
                    <th>Roles</th>
                </tr>

                </tbody>

            </div>

        )
    }
}
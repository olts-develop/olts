/**
 * Created by martin on 11.03.2016.
 */
import UserAuth from '../components/UserAuth.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
    const {Meteor} = context();
    if (Meteor.subscribe('users.list').ready()){
        const users = Meteor.users.find({},{sort: {createdAt: 1}}).fetch();
        const totalUsers = Meteor.users.find().count();
        onData(null, {users, totalUsers});
    }
};


export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(UserAuth);
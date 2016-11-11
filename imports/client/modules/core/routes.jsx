
import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './containers/mainLayout';
import Login from '../logon/containers/login';
import NewUser from '../logon/containers/newUser';


export default function (injectDeps, {FlowRouter}){
    const MainLayoutCtx = injectDeps(MainLayout);


    FlowRouter.route('/', {
        name:'mainLayout',
        action() {
            console.log("MainLayout")
            mount(MainLayoutCtx, {
                content: () => (<MainLayout />)
            });
        }
    });
    
    FlowRouter.route('/', {
        name:'users.login',
        action() {
            console.log("login route")
            mount(MainLayoutCtx, {
                content: () => (<Login />)
            });
        }
    });

    FlowRouter.route('/register', {
        name: 'users.new',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<NewUser />)
            });
        }
    });

    
}

import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/MainLayout.jsx';
import AppLayout from '../layout/containers/AppLayout';
import Login from '../logon/containers/Login';
import NewUser from '../logon/containers/NewUser'
import UserAuth from '../authorization/components/UserAuth.jsx'

export default function (injectDeps, {FlowRouter}){
    const MainLayoutCtx = injectDeps(Layout);


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

    FlowRouter.route('/userauth', {
        name: 'users.auth',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<UserAuth />)
            });
        }
    });

    FlowRouter.route('/app',{
        name:'app',
        action(){
            console.log("applayout route")
            mount(MainLayoutCtx,{
                content: () => (<AppLayout />)
            });
        }
    });


}

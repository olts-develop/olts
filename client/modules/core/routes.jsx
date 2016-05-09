import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/mainLayout.jsx';
import AppLayout from '../appLayout/containers/appLayout';
import Login from '../logon/containers/login';
import NewUser from '../logon/containers/newUser';
import Tenants from '../organization/containers/tenants'


export default function (injectDeps, {FlowRouter}){
    const MainLayoutCtx = injectDeps(MainLayout);

    
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
    

    FlowRouter.route('/useredit/:userId', {
        name: 'users.edit',
        action({userId}) {
            console.log('/useredit/:' + userId);
            mount(MainLayoutCtx, {
                content: () => (<UserEdit userId={userId} />)
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

    FlowRouter.route('/tenant',{
        name:'tenant',
        action(){
            console.log("tenant")
            mount(MainLayoutCtx,{
                content: () => (<Tenants />)
            });
        }
    });

    
}

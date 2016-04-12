import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/MainLayout.jsx';
import AppLayout from '../appLayout/containers/appLayout';
import Login from '../logon/containers/login';
import NewUser from '../logon/containers/newUser';
import UserAuth from '../authorization/containers/userAuth';
import UserEdit from '../authorization/containers/userEdit';
import Order from '../order/components/order.jsx';


export default function (injectDeps, {FlowRouter}){
    const MainLayoutCtx = injectDeps(Layout);
    const AppLayoutCtx = injectDeps(AppLayout);

    const appSection = FlowRouter.group({
        prefix: "/app"
    })

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
                content: () => (<UserAuth/>)
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

    appSection.route('/order', {
        name: 'app.order',
        action(){
            console.log("Order route: "+  FlowRouter.getRouteName())
            mount(AppLayoutCtx,{
                modulecontent: () => (<Order />)
            });
        }
    });

}

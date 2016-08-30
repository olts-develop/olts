/**
 * Created by martin on 12.04.2016.
 */

import React from 'react';
import {mount} from 'react-mounter';

import AppLayout from './containers/appLayout';
import Order from '../order/components/order.jsx';
import Agenda from '../agenda/components/agenda.jsx';
import ActionList from '../order/components/actionList.jsx';
import UserAuth from '../authorization/containers/userAuth';
import UserEdit from '../authorization/containers/userEdit';
import Employee from '../authorization/containers/employee';

export default function (injectDeps, {FlowRouter}) {
      const AppLayoutCtx = injectDeps(AppLayout);

      const appSection = FlowRouter.group({
            prefix: "/app"
      });

      appSection.route('/order', {
            name: 'app.order',
            action(){
                  mount(AppLayoutCtx,{
                        modulecontent: () => (<Order />)
                  });
            }
      });

      appSection.route('/agenda', {
            name: 'app.agenda',
            action(){
                  mount(AppLayoutCtx,{
                        modulecontent: () => (<Agenda />)
                  });
            }
      });

      appSection.route('/actionlist', {
            name: 'app.actionlist',
            action(){
                  mount(AppLayoutCtx,{
                        modulecontent: () => (<ActionList />)
                  });
            }
      });

      appSection.route('/userauth', {
            name: 'app.usersauth',
            action() {
                  mount(AppLayoutCtx, {
                        modulecontent: () => (<UserAuth/>)
                  });
            }
      });

      appSection.route('/employee', {
            name: 'app.employee',
            action() {
                  mount(AppLayoutCtx, {
                        modulecontent: () => (<Employee/>)
                  });
            }
      });

      appSection.route('/useredit/:userId', {
            name: 'users.edit',
            action({userId}) {
                  console.log('/useredit/:' + userId + '  '+FlowRouter.current().path);
                  mount(AppLayoutCtx, {
                        modulecontent: () => (<UserEdit userId={userId} />)
                  });
            }
      });
}
/**
 * Created by martin on 12.04.2016.
 */

import React from 'react';
import {mount} from 'react-mounter';

import AppLayout from '../appLayout/containers/appLayout';
import Order from '../order/components/order.jsx';
import Agenda from '../agenda/components/agenda.jsx';
import ActionList from '../order/components/actionlist.jsx';

export default function (injectDeps, {FlowRouter}) {
      const AppLayoutCtx = injectDeps(AppLayout);

      const appSection = FlowRouter.group({
            prefix: "/app"
      })

      appSection.route('/order', {
            name: 'app.order',
            action(){
                  console.log("Order route: "+  FlowRouter.getRouteName())
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

}
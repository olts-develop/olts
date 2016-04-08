/**
 * Created by martin on 08.04.2016.
 */

import React from 'react';
import {mount} from 'react-mounter';

import AppLayout from '../appLayout/containers/appLayout';
import Order from './components/order.jsx';


export default function (injectDeps, {FlowRouter}) {

      const AppLayoutCtx = injectDeps(AppLayout);


      FlowRouter.route('/app/order', {
            name: 'app.order',
            action(){
                  console.log("order route")
                  mount(AppLayoutCtx, {
                        content: () => (<Order />)
                  });
            }
      });
};
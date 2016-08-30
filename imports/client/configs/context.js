/**
 * Application Context is available to all actions and containers,
 * so this is the place for shared variables in your app.
 *
 *
 * reducers comes from main,js --> const context = initContext({reducers});
 * defaultState stets the Store to an empty state
 * window.devToolsExtension ? window.devToolsExtension() : undefined  is used for redux component in Browser
 *
 * @param reducers
 * @returns {{Meteor: Meteor, FlowRouter: *, LocalState: *, Tracker: Tracker, AppConfig, StateFlags, Store: *, dispatch: *}}
 */


import * as Collections from '/imports/lib/collections';

import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {Tracker} from 'meteor/tracker';

/**Apollo*/
import ApolloClient from 'apollo-client';
import {meteorClientConfig} from 'meteor/apollo';

/**Redux*/
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';


/**global vars and helper methods for the app*/
import * as AppConfig from './app';
import * as StateFlags from './appStateFlags'; //TODO How to use in reducers without import



/**Material-ui
 * TODO this should go in future version of Materieal-UI
 **/
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//init defaultState for Redux
const defaultState = {};

export default function ({reducers}){

      //powered by the Meteor Atmosphere Package.. "meteorClientConfig"
      const Client = new ApolloClient(meteorClientConfig());

      //define all reducers
      const reducer = combineReducers({
            ...reducers,
            apollo: Client.reducer()
      });

      // put all Redux middleware here
      const middleware = [
            createLogger(),
            Client.middleware(),
            ReduxThunk
      ];

      const Store = createStore(reducer, defaultState, compose(
            applyMiddleware(...middleware),
            window.devToolsExtension ? window.devToolsExtension() : undefined
      ));

      return {
            Meteor,
            FlowRouter,
            Collections,
            Tracker,
            AppConfig,
            StateFlags,
            Client,
            Store: Store,
            dispatch: Store.dispatch

      };
}
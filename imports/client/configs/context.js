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

/** Meteor */
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Tracker} from 'meteor/tracker';

/**global vars and helper methods for the app*/
/**TODO dont know if this realy works */
import * as DateHelper from '/imports/helpers/dateHelper';
import * as AppConfig from './app';
import * as StateFlags from './appStateFlags'; //TODO How to use in reducers without import

/**Redux*/
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

/**Apollo*/
import ApolloClient from 'apollo-client';
import {meteorClientConfig} from 'meteor/apollo';


/**Material-ui
 * TODO this should go in future version of Materieal-UI
 * TODO Not shure if this is still needed
 **/
/*import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();*/


const defaultState = {};

export default function ({reducers}){

    const Client = new ApolloClient(meteorClientConfig);

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


    const Store = createStore(
          reducer,
          defaultState,
          compose(
                applyMiddleware(...middleware),
                window.devToolsExtension ? window.devToolsExtension() : undefined
          ));

    return {
        Meteor,
        FlowRouter,
        Collections,
        Tracker,
        DateHelper,
        AppConfig,
        StateFlags,
        Client,
        Store,
        dispatch: Store.dispatch

    };
}
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


import * as Collections from '/lib/collections';

import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {ReactiveDict} from 'meteor/reactive-dict'; //TODO to be removed
import {Tracker} from 'meteor/tracker';

/**global vars and helper methods for the app*/

import * as DateHelper from '/helpers/dateHelper';
import * as AppConfig from './app';
import * as StateFlags from './appStateFlags'; //TODO How to use in reducers without import

/**Redux*/
import {createStore} from 'redux';

/**Material-ui
 * TODO this should go in future version of Materieal-UI
 **/
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const defaultState = {};

export default function ({reducers}){

      //console.log('reducers: '+reducers)

    const Store = createStore(reducers, defaultState, window.devToolsExtension ? window.devToolsExtension() : undefined);

    return {
        Meteor,
        FlowRouter,
        Collections,
        //LocalState: new ReactiveDict(), //TODO to be removed
        Tracker,
        DateHelper,
        AppConfig,
        StateFlags,
        Store: Store,
        dispatch: Store.dispatch

    };
}
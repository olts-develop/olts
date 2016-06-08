
import * as Collections from '/lib/collections';
import * as AppMethods from '/lib/appMethods'
import * as DateHelper from '/helpers/dateHelper';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import * as AppConfig from './app';
import * as StateFlags from './appStateFlags';


/**Redux*/
import {createStore} from 'redux';



/**Material-ui
 * TODO this should go in future version of Materieal-UI
 **/
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()

/**
 * reducers comes from main,js --> const context = initContext({reducers});
 *
 * @param reducers
 * @returns {{Meteor: Meteor, FlowRouter: *, LocalState: *, Tracker: Tracker, AppConfig, StateFlags, Store: *}}
 */

export default function ({reducers}){

    const Store = createStore(reducers, {}, window.devToolsExtension ? window.devToolsExtension() : undefined)

    return {
        Meteor,
        FlowRouter,
        Collections,
        LocalState: new ReactiveDict(),
        Tracker,
        DateHelper,
        AppConfig,
        StateFlags,
        Store: Store,
        dispatch: Store.dispatch,
        AppMethods

    };
}
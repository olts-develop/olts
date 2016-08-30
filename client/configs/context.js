
import * as Collections from '/lib/collections';
import * as DateHelper from '/helpers/dateHelper';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import * as AppConfig from './app';


export default function () {
    return {
        Meteor,
        FlowRouter,
        Collections,
        LocalState: new ReactiveDict(),
        Tracker,
        DateHelper,
        AppConfig,

    };
}
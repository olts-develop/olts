
import * as Collections from '/lib/collections';
import * as DateHelper from '/general/helper/dateHelper'
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';


export default function () {
    return {
        Meteor,
        FlowRouter,
        Collections,
        LocalState: new ReactiveDict(),
        Tracker,
        DateHelper
    };
}
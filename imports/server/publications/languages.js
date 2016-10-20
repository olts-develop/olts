/**
 * Created by martin on 27.04.2016.
 */
import {Languages} from '/imports/lib/collections';
import globalSelector from '/imports/lib/globalSelector'
import  {Meteor} from 'meteor/meteor';


export default function () {

      Meteor.publish('languages.list', function(){
            console.log('SERVER users.list')
            return Languages.find()
      });
}
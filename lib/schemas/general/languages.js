/**
 * Created by martin on 27.04.2016.
 */
import {Mongo} from 'meteor/mongo';


const Schema={};

const Languages = new Mongo.Collection('languages');

Schema.Languages = new SimpleSchema({

      langCode:{
            type: String
      },
      
      language: {
            type: String
      },

      sortTop:{
            type: Boolean,
            optional:true
      }
});

Languages.attachSchema(Schema.Languages);

export default Languages;

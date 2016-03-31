/**
 * Created by martin on 09.03.2016.
 */
import {Mongo} from 'meteor/mongo';

const Organisations = new Mongo.Collection('organisations');

const Schema={};

Schema.Organisations = new SimpleSchema({

    fullName:{
        type: String
    },

    shortName: {
        type: String
    }

});

Organisations.attachSchema(Schema.Organisations);

export default Organisations;
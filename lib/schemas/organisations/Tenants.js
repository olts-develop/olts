import {Mongo} from 'meteor/mongo';

const Tenants = new Mongo.Collection('tenants');

const Schema={};

Schema.Tenants = new SimpleSchema({

    fullName:{
        type: String
    },

    shortName: {
        type: String
    },

    typeof:{
        type: String,

        allowedValues:['prod','educ','test', 'dev']
    }
});

Tenants.attachSchema(Schema.Tenants);

export default Tenants;
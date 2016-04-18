/**
 * Created by martin on 29.01.2016.
 */


const BasePerson=new SimpleSchema({

    name: {
        type: String,
        /*label: function () {
            return Session.get("lang") == "de"
                ? "Name" : "Name";
        }*/
    },

    firstName: {
        type: String,
      /*  label: function () {
            return Session.get("lang") == "de"
                ? "Vorname" : "first name";
        }*/
    },

    gender:{
        type:String,
        /*label: function () {
            return Session.get("lang") == "de"
                ? "Vorname" : "first name";
        },*/
        allowedValues:['m','w','M','W',undefined],
    },

    birthday:{
        type:Date,
        optional:true
    },

    mail:{
        type: String,
        optional:true
    },

    telefone:{
        type: String,
        optional:true
    },

    lang:{
        type:String,
    }
});

export default BasePerson;
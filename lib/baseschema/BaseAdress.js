/**
 * Created by martin on 29.01.2016.
 */


const BaseAddress=new SimpleSchema({

    street:{
        type:String,
        optional:true
    },

    street2:{
        type:String,
        optional:true
    },

    country:{
        type:String

    },

    zip:{
        type:String
    },

    city:{
        type:String
    }


});

export default BaseAddress;

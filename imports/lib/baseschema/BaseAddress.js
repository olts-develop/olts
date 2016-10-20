/**
 * Created by martin on 29.01.2016.
 */

import OltPhone from '../oltTypes/OltPhone';

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
        type:String,
        optional: true

    },

    zip:{
        type:String,
        optional: true
    },

    city:{
        type:String,
        optional: true
    },
    
    phone:{
        type:[OltPhone],
        optional: true
    }


});

export default BaseAddress;

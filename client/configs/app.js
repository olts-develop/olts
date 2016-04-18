/**
 * Created by martin on 09.03.2016.
 */
export default{

    name: 'OLTS',
    version:'0.0.1',
    isDevelop: function(){
        if (Meteor.absoluteUrl("http://localhost:3000/")) {
            return true
        } else false
    }

}
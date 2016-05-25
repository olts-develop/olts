/**
 * Created by mk on 11.05.16.
 */


export default function () {
      
      Meteor.startup(function () {

            console.log("Client Startup Lang: ")

            TAPi18n.setLanguage('en')
                  .done(function () {
                       console.log("Client Startup Lang: "+ TAPi18n.getLanguage())
                  })
            
                  .fail(function (error) {
                        
                        console.log("ERROR --> Client Startup Lang: "+error.message)
                        
                  })
                  
            
            
      })
      
}
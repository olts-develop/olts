
//import devEmplyees from './../developinit/devEmployees';
//import devTenants from './../developinit/devTenants';
//import devBaseRoles from './../developinit/devBaseRoles';
//import devGroups from './../developinit/devGroups';
import devLanguages from './../developinit/devLanguages';



export default function () {

    Meteor.startup(function () {

        if (Meteor.absoluteUrl("http://localhost:3000/")) {

            console.log("startup.js says: i start develop");

           // devEmplyees();
           // devTenants();
           //devBaseRoles();
           //devGroups();
            devLanguages();

        }
    });

}

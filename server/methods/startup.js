
import devEmplyees from './../developinit/devEmployees';
import devTenants from './../developinit/devTenants';
import devOrganisations from './../developinit/devOrganisations';
import devBaseRoles from './../developinit/devBaseRoles';
import devGroups from './../developinit/devGroups'


export default function () {

    Meteor.startup(function () {

        if (Meteor.absoluteUrl("http://localhost:3000/")) {

            console.log("startup.js says: i start develop");

            devEmplyees();
            devTenants();
            devOrganisations();
            devBaseRoles();
            devGroups();

        }
    });

}

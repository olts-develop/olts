/**
 * Created by martin on 09.03.2016.
 */

import Organisations from '/lib/schemas/organisations/Organisations';

export default function () {

    if (Organisations.find().count() == 0) {


        Organisations.insert({
            userID: "martin",
            createUser: "martin",
            modUser: "martin",
            fullName: "Development",
            shortName: "DEV"
        });

        Organisations.insert({
            userID: "martin",
            createUser: "martin",
            modUser: "martin",
            fullName: "Default",
            shortName: "DEFAULT"
        });

        Organisations.insert({
            userID: "martin",
            createUser: "martin",
            modUser: "martin",
            fullName: "Org1",
            shortName: "ORG1"
        });

        Organisations.insert({
            userID: "martin",
            createUser: "martin",
            modUser: "martin",
            fullName: "Org2",
            shortName: "ORG2"
        });


        console.log("startup.js says: Organisations  " + Organisations.find().count());
    }
}

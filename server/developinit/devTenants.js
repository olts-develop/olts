/**
 * Created by martin on 09.03.2016.
 */
import Tenants from '/lib/schemas/organisations/Tenants';

export default function () {

    if (Tenants.find().count() == 0) {


        Tenants.insert({
            createUser: "martin",
            modUser: "martin",
            fullName: "Online Travel Service",
            shortName: "OLTS",
            typeof: "dev"
        });

        Tenants.insert({
            createUser: "martin",
            modUser: "martin",
            fullName: "Tourasia",
            shortName: "TOU",
            typeof: "prod"
        });

        Tenants.insert({
            createUser: "martin",
            modUser: "martin",
            fullName: "Switzerland Travel Center",
            shortName: "STC",
            typeof: "test"
        });


        console.log("startup.js says: Tenants "  + Tenants.find().count());
    }
}

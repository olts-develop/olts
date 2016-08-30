/**
 * Created by martin on 11.03.2016.
 */
import BaseRoles from '/lib/schemas/authorizations/BaseRoles';

export default function () {

    if (BaseRoles.find().count() == 0) {


        BaseRoles.insert({
            createUser: "martin",
            modUser: "martin",
            role: "dev",
            description: "olts_develop",
            visible: false
        });

        BaseRoles.insert({
            createUser: "martin",
            modUser: "martin",
            role: "support",
            description: "olts_support",
            visible: false
        });

        BaseRoles.insert({
            createUser: "martin",
            modUser: "martin",
            role: "SuperAdmin",
            description: "all rights for Tenent",
            visible: false
        });

        BaseRoles.insert({
            createUser: "martin",
            modUser: "martin",
            role: "Admin",
            description: "all rights for Organisation",
            visible: false
        });

        BaseRoles.insert({
            createUser: "martin",
            modUser: "martin",
            role: "user",
            description: "User",
            visible: false
        });

        BaseRoles.insert({
            createUser: "martin",
            modUser: "martin",
            role: "Bookkeeping",
            description: "Bookkeeping department",
            visible: false
        });


        console.log("startup.js says: BaseRoles "  + BaseRoles.find().count());
    }
}

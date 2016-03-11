/**
 * Created by martin on 11.03.2016.
 */
/**
 * Created by martin on 11.03.2016.
 */
import Groups from '/lib/schemas/authorizations/Groups';

export default function () {

    if (Groups.find().count() == 0) {


        Groups.insert({
            createUser: "martin",
            modUser: "martin",
            group: "AgentOnlineUser",
            description: "Agent Online User",
        });

        Groups.insert({
            createUser: "martin",
            modUser: "martin",
            group: "AgentOnlineAdmin",
            description: "AgentOnlineAdmin",
        });

        Groups.insert({
            createUser: "martin",
            modUser: "martin",
            group: "SuperAdmin",
            description: "SuperAdmin",
        });

        Groups.insert({
            createUser: "martin",
            modUser: "martin",
            group: "Admin",
            description: "Admin",
        });


        console.log("startup.js says: Groups "  + Groups.find().count());
    }
}

import Employees from '/lib/schemas/Employee';

export default function () {

    if (Employees.find().count() == 0) {

        var empl = {
            userID: "martin",
            createUser: "martin",
            modUser: "martin",
            name: "Krüger",
            firstName: "Martin",
            mail: "krueger@onlinetravel.ch",
            lang: 'de-ch',
            gender: 'm'

        };

        Employees.insert(empl);

        console.log("startup.js says: Employees  " + Employees.find().count());
    }
}

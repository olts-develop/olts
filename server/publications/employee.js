import {Employees} from '/lib/collections'

export default function() {
    Meteor.publish('employee', function(employeeId){
        const selector = {_id: employeeId};
        return Employee.find(selector);
    });

    Meteor.publish('employees', function(){
        return Employee.find();
    });
}

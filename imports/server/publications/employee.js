import {Employees} from '/imports/lib/collections'

export default function() {
    Meteor.publish('employee.single', function(employeeId){
        const selector = {_id: employeeId};
        return Employees.find(selector);
    });

    Meteor.publish('employees.list', function(){
        return Employees.find();
    });
    
    Meteor.publish('employee.select', function(selector){
        console.log('SERVER employee selector: ' + selector)
        return Employees.find(selector);
    })
}

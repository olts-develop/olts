export default {
    userlogedin({Meteor, LocalState, FlowRouter}, userId) {
        if (!userID) {
            console.log("/login")
            FlowRouter.go('/login');
        }
    }
}

mongoExamApp.factory('UserServcie', ['$http', function($http){
    
    var UserServcie = {};
    
    UserServcie.getUsers = function(){
        return [{firstName:"first0",lastName:"last0",userName:"user0",email:"user@email.com",password:"pass0"},
                      {firstName:"first0",lastName:"last0",userName:"user0",email:"user@email.com",password:"pass0"},
                      {firstName:"first0",lastName:"last0",userName:"user0",email:"user@email.com",password:"pass0"},
                      {firstName:"first0",lastName:"last0",userName:"user0",email:"user@email.com",password:"pass0"}];
    }
    
    return UserServcie;
});
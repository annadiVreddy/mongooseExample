mongoExamApp.factory('UserServcie', ['$http', function($http){
    
    var UserServcie = {};
    
    UserServcie.getUsers = function(){
        
        var promise = $http.get('').then(function (response) {
        // The then function here is an opportunity to modify the response
        console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
        
        
        var arry =  [{firstName:"first0",lastName:"last0",userName:"user0",email:"user@email.com",password:"pass0"},
                      {firstName:"first0",lastName:"last0",userName:"user0",email:"user@email.com",password:"pass0"},
                      {firstName:"first0",lastName:"last0",userName:"user0",email:"user@email.com",password:"pass0"},
                      {firstName:"first0",lastName:"last0",userName:"user0",email:"user@email.com",password:"pass0"}];
        
        return arry;
    };
    
    return UserServcie;
}])
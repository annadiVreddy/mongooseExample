mongoExamApp.factory('UserServcie', ['$http', function($http){
    
    var UserServcie = {};
    
    UserServcie.getUsers = function(resp){
        var promise = $http.get('/api/users').then(function (response) {
            resp(response.data,'200');
      });
 
    };
    
    function resp(data,status){
        return data;
    }
    
    return UserServcie;
}])


var add = function(a,b){
    return a+b;
}

add(a,3);
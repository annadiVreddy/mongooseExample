mongoExamApp.controller('userCntrl', function($scope, UserServcie){
        
       console.log("mongo controlle::::");
       UserServcie.getUsers(function(response,status){
           console.log('in controller::::'+JSON.stringify(response));
           console.log('in controller::::'+status);
           $scope.users = response;
       });
});
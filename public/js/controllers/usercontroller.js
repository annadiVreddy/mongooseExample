mongoExamApp.controller('userCntrl', function($scope, UserServcie){
        
       console.log("mongo controlle::::");
       $scope.users = UserServcie.getUsers();
       
});
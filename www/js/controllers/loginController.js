angular.module('login.controllers', [])
  .controller('LoginCtrl', ['$scope', '$location','login','$cookies',function($scope, $location,login,$cookie) {
    $scope.user={};
    $scope.login = function () {
      login.fun($scope.user,'login').success(function (data) {
        if(data.code==1) {
          $location.path('/tab/mine');
          var expireDate = new Date();
          expireDate.setDate(expireDate.getDate() + 7);
          $cookie.put('u_name',$scope.user.u_name,{'expires':expireDate});
        }
      })
    }
  }])
  .controller('RegisterCtrl', ['$scope','$location','login',function($scope,$location,login) {
    $scope.user={};
    $scope.register = function () {
      login.fun($scope.user,'sign').success(function (data) {
        console.log(data);
        alert(data.msg);
        if(data.code==1) {
          $location.path('/tab/login');

        }
      })
    }
  }])
  .controller('ResetCtrl', ['$scope','$location','login','$cookies',function($scope,$location,login,$cookies) {
  $scope.user={};
  $scope.user.u_name=$cookies.get('u_name');

      $scope.reset = function () {
      login.fun($scope.user,'update').success(function (data) {
        alert(data.msg);
        if(data.code==1) {
          $location.path('/tab/login');
        }
      })
    }


}]);

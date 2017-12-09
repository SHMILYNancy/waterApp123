angular.module('mine.controllers', [])
  .controller('MineCtrl', function($scope, $stateParams, Chats) {
  })
  .controller('yeCtrl', function($scope, $stateParams, Chats) {

  })
  .controller('SetCtrl', function($scope, $stateParams, Chats) {

  })
  .controller('myMoneyCtrl', function($scope, $stateParams, Chats) {

  })
  .controller('myTicketCtrl', function($scope, $stateParams, Chats) {

  })
  .controller('myIntegCtrl', function($scope, $stateParams, Chats) {

  })

  .controller('addressCtrl',['$scope', '$stateParams', 'Address', function($scope, $stateParams, Address) {
    $scope.user={uname:'',usex:'',uphone:'',uaddress:''};
    $scope.addrsubmit=function () {
      console.log($scope.user);
      Address.submit($scope.user).success(function (data) {
        console.log(data);

      });
    }
  }]);

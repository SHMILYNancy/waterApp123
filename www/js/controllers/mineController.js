angular.module('mine.controllers', [])
  .controller('MineCtrl',  ['$scope','$location', '$cookies',function($scope,$location,$cookies) {
    console.log($location.path());
    $scope.user={};
    var name=$cookies.get('u_name');
    if(name){
      $scope.user=$cookies.get('u_name');
    }else{
      $scope.user='立即登录';
    }
    console.log($scope.user);
  }])

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

  .controller('addressCtrl',['$scope','$cookies','Address', function($scope,$cookies, Address) {
      $scope.user={u_name:$cookies.get('u_name'),a_name:'',a_sex:'',a_phone:'',a_addr:''};
      $scope.addrsubmit=function () {
        console.log($scope.user);
        if($cookies.get('u_name')){
          Address.submit($scope.user).success(function (data) {
            console.log(data);

          });
        }else{
          alert('请登录');
        }

      }


  }]);

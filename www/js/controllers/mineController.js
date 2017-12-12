angular.module('mine.controllers', [])
  .controller('MineCtrl',  ['$scope','$location', '$cookies',function($scope,$location,$cookies) {
    $scope.user='立即登录';
    $scope.$on('$ionicView.enter',function (event) {
      var name=$cookies.get('u_name');
      if(name){
        $scope.user=$cookies.get('u_name');
      }else{
        $scope.user='立即登录';
      }
    })
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
          Address.fun($scope.user,'submit').success(function (data) {
            console.log(data);
          });
        }else{
          alert('请登录');
        }
      }
  }])
  .controller('shdzCtrl',['$scope','$cookies','Address', function($scope,$cookies, Address) {
    $scope.$on('$ionicView.enter',function (event){
      $scope.user=$cookies.get('u_name');
      $scope.flag=false;
      if($scope.user){
        $scope.flag=true;
        Address.fun($scope.user,'select').success(function (data) {
          $scope.addrs=data;
          console.log($scope.addrs);
        })
      }
    })


  }])
  .controller('resetaddrCtrl', ['$scope','$cookies', '$stateParams','$location', 'Address',function($scope,$cookies, $stateParams, $location,Address) {
    $scope.user=$cookies.get('u_name');
    console.log($stateParams.id);
    Address.fun($scope.user,'select').success(function (data) {
       data.forEach(function (a,b) {
        if(a.a_id==$stateParams.id){
          $scope.user=a;
        }
      });
    });
    $scope.update=function () {
      Address.fun($scope.user,'update').success(function (data) {
        if(data.code==1){
          alert(data.msg);
          $location.path('/tab/shdz');
        }else{
          alert(data.msg);
        }
      })
    }
}]);

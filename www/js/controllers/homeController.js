angular.module('home.controllers', [])

  .controller('HomeCtrl', function($scope,$location) {
    $scope.title='首页';
    $scope.go=function () {
      $location.path('/tab/nofu');
    };
    $scope.liss = [
      {href:'#/tab/nofu',img:'./img/index_img/yjds.png',txt:'一键订水',id:1},
      {href:'#/tab/cooperate',img:'./img/index_img/hzpp.png',txt:'合作品牌',id:2},
      {href:'#/tab/chong',img:'./img/index_img/zxcz.png',txt:'在线充值',id:3},
      {href:'#/tab/discount',img:'./img/index_img/hdzq.png',txt:'活动专区',id:4}
    ]
  })
  // .controller('GeolocationCtrl', function($scope,$cordovaGeolocation) {
  //   $cordovaGeolocation.getCurrentPosition().then(function (position) {
  //     console.log(position);
  //   }).catch(function (err) {
  //     console.log(err);
  //   })
  //
  // })
  // 坐标
  .controller( 'banner2Ctrl',['$scope','$ionicActionSheet','$timeout' ,function($scope,$ionicActionSheet,$timeout){
    $scope.show = function() {

      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '<span class="icon ion-share"></span>微信好友' },
          { text: '朋友圈' },
          { text: 'QQ' },
          { text: 'QQ空间' }
        ],
        // destructiveText: 'Delete',
        titleText: '分想到:',
        cancelText: '取消',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          return true;
        }
      });


    };
  }])
  .controller( 'PhCtrl',['$scope','$ionicActionSheet','$timeout' ,function($scope,$ionicActionSheet,$timeout){
    $scope.show = function() {

      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '<span class="icon ion-share"></span>微信好友' },
          { text: '朋友圈' },
          { text: 'QQ' },
          { text: 'QQ空间' }
        ],
        // destructiveText: 'Delete',
        titleText: '分想到:',
        cancelText: '取消',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          return true;
        }
      });


    };
  }])
  .controller('NofuCtrl', function($scope, $stateParams, Chats) {

  })
  .controller('CooperateCtrl', function($scope, $stateParams, Chats) {

  })
  .controller('DiscountCtrl', function($scope, $stateParams, Chats) {

  });

angular.module('starter.controllers', [])

  .controller('DashCtrl', function($scope) {})
  .controller('HomeCtrl', function($scope,$stateParams) {
    $scope.title='首页';
    $scope.liss = [
      {href:'#/tab/nofu',img:'./img/index_img/yjds.png',txt:'一键订水',id:1},
      {href:'#/tab/cooperate',img:'./img/index_img/hzpp.png',txt:'合作品牌',id:2},
      {href:'#/tab/nofu',img:'./img/index_img/zxcz.png',txt:'在线充值',id:3},
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

.controller('ChatsCtrl','$scope', function($scope, Chats) {


  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

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


  .controller('LoginCtrl', function($scope, $stateParams, Chats) {

  })
  .controller('NofuCtrl', function($scope, $stateParams, Chats) {

  })
  .controller('CooperateCtrl', function($scope, $stateParams, Chats) {

  })
  .controller('DiscountCtrl', function($scope, $stateParams, Chats) {

  })
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

angular.module('starter.controllers', [])

  .controller('DashCtrl', function($scope) {})
  .controller('HomeCtrl', function($scope) {
    $scope.title='首页';

  })


.controller('ChatsCtrl', function($scope, Chats) {


  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

  .controller('MineCtrl', function($scope, $stateParams, Chats) {

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

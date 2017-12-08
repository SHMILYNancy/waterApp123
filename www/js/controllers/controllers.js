angular.module('starter.controllers', ['mine.controllers','login.controllers','home.controllers','cart.controllers'])

  .controller('DashCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

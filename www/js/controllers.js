angular.module('starter.controllers', [])

  .controller('DashCtrl', function($scope) {})
  .controller('HomeCtrl', function($scope) {
    $scope.title='首页';

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
  .controller('RegisterCtrl', function($scope) {
    $scope.register = function () {
      var use=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g;
      var user=use.test($('#num').val());
      var pass= $('#pass').val().length >= 6 ;
      var again =$('#pass').val() == $('#again').val();
      if (!user){
        alert('请输入正确的手机号');
      }
      if (!pass){
        alert('密码不能少于6位');
      }
      if (!again){
        alert('请确认密码');
      }
      // ajax请求
      if (user && pass && again){
        $.ajax({
          type:"post",
          url:"http://10.0.29.80/demo/waterApp/www/php/index.php?a=Login&b=sign",
          async:true,
          dataType:'json',
          data:{
            'username':user.val(),
            'pass':pass.val()
          },
          success:function (data) {
            // alert(data.msg)
            console.log(data);
          }
        });
      }
    }
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

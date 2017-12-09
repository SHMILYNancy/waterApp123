angular.module('login.controllers', [])
  .controller('LoginCtrl', function($scope, $location) {

    $scope.login = function () {
      var use=/^1[3|4|5|7|8]\d{9}$/g;
      var user=use.test($('#num').val());
      var pass= $('#pass').val().length >= 6 ;
      if (!user){
        alert('请输入正确的手机号');
      }
      if (!pass){
        alert('密码不能少于6位');
      }
      // ajax请求
      if (user && pass){
        $.ajax({
          type:"post",
          url:"http://10.0.29.80/demo/waterApp/www/php/index.php?a=Login&b=login",
          async:true,
          dataType:'json',
          data:{
            'u_name':$('#num').val(),
            'u_password':$('#pass').val()
          },
          success:function (data) {
            // alert(data.msg);
            console.log(data.code);
            if(data.code==1){

              $scope.$apply(function () {
                $location.path('/tab/mine');
                document.cookie='u_name='+$('#num').val();
              })
            }

          }
        });
      }
    }
  })
  .controller('RegisterCtrl', function($scope) {
    $scope.register = function () {
      var use=/^1[3|4|5|7|8]\d{9}$/;
      var user=use.test($('#num').val());
      var pass= $('#pass').val().length >= 6 ;
      console.log($('#pass').val());
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
          // dataType:'json',
          data:{
            'u_name':$('#num').val(),
            'u_password':$('#pass').val()
          },
          success:function (data) {
            // alert(data.msg);
            console.log(data);
          }
        });
      }
    }
  })

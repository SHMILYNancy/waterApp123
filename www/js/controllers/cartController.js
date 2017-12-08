angular.module('cart.controllers', [])

  .controller('ChatsCtrl',['$scope','Chats', function($scope, Chats) {

    $scope.arr=[
      {name:"农夫山泉（适合婴儿喝）",price:12.9,number:2,state:false},
      {name:"新思源纯净水",price:23.9,number:1,state:false},
      {name:"爱上茶纯净水",price:99.9,number:1,state:false},
      {name:"大牌专业纯净水",price:1000.9,number:5,state:false},
      {name:"农夫山泉（适合婴儿喝）",price:12.9,number:2,state:false},
      {name:"新思源纯净水",price:23.9,number:1,state:false},
      {name:"爱上茶纯净水",price:99.9,number:1,state:false},
      {name:"大牌专业纯净水",price:1000.9,number:5,state:false}
    ];
    $scope.jian=function (index) {
      if($scope.arr[index].number>1){
        $scope.arr[index].number--;
      }
      else if($scope.arr[index].number==1){
        if(confirm("用户是否删除该商品")){
          $scope.arr.splice(index,1);
        }
      }
    }

    $scope.jia=function (index) {
      $scope.arr[index].number++;
    }
    $scope.allSum=function () {
      var allPrice=0;
      for(var i=0;i<$scope.arr.length;i++){
        allPrice+=$scope.arr[i].price*$scope.arr[i].number;
      }
      return allPrice;
    };


}])
  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  });

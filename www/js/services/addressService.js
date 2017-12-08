angular.module('address.services', [])

  .factory('Address',function ($http) {
    return {
      submit:function (data) {
        return $http({
          method:"POST",
          url:"http://10.0.29.80/demo/waterApp/www/php/index.php?a=Address&b=submit",
          data:data,
          headers:{'Content-Type': 'application/x-www-form-urlencoded'}
        })
      }
    }
  });

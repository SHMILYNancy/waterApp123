// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js




angular.module('starter', ['ionic','ionic.native', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

//显示或隐藏底部导航栏
  .directive('hideTabs',function($rootScope){
    return {
      restrict: 'AE',
      link: function ($scope) {
        $rootScope.hideTabs = 'tabs-item-hide';
        $scope.$on('$destroy',function(){
          $rootScope.hideTabs = ' ';
        })
      }
    }
  })


  .config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-home.html',
          controller: 'HomeCtrl'
        }
      }
    })
    .state('tab.banner1', {
      url: '/banner1',
      views: {
        'tab-home': {
          templateUrl: 'templates/home-banner1.html'
        }
      }
    })
    .state('tab.banner2', {
      url: '/banner2',
      views: {
        'tab-home': {
          templateUrl: 'templates/home-banner2.html',
          controller:'banner2Ctrl'
        }
      }
    })
    .state('tab.mine', {
      url: '/mine',
      views: {
        'tab-mine': {
          templateUrl: 'templates/tab-mine.html',
          controller: 'MineCtrl'
        }
      }
    })
    .state('tab.set', {
      url: '/set',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine/mine-set.html',
          controller: 'SetCtrl'
        }
      }
    })
    .state('tab.news', {
      url: '/news',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine/mine-news.html'
        }
      }
    })
    .state('tab.myMoney', {
      url: '/myMoney',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine/mine-myMoney.html',
          controller: 'myMoneyCtrl'
        }
      }
    })
    .state('tab.ye', {
      url: '/ye',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine/myMoney-ye.html',
          controller: 'yeCtrl'
        }
      }
    })
    .state('tab.chong', {
      url: '/chong',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine/myMoney-chong.html'
        }
      }
    })
    .state('tab.myTicket', {
      url: '/myTicket',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine/mine-myTicket.html',
          controller: 'myTicketCtrl'
        }
      }
    })
    .state('tab.myInteg', {
      url: '/myInteg',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine/mine-myInteg.html',
          controller: 'myIntegCtrl'
        }
      }
    })
    .state('tab.shdz', {
      url: '/shdz',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine/mine-shdz.html'
        }
      }
    })
    .state('tab.address', {
      url: '/address',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine/new-address.html',
          controller:'addressCtrl'
        }
      }
    })
    .state('tab.yjqgl', {
      url: '/yjqgl',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine/mine-yjqgl.html'
        }
      }
    })
    .state('tab.smyz', {
      url: '/smyz',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine/mine-smyz.html'
        }
      }
    })
    .state('tab.kfp', {
      url: '/kfp',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine/mine-kfp.html'
        }
      }
    })
    .state('tab.jfsc', {
      url: '/jfsc',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine/mine-jfsc.html'
        }
      }
    })
    .state('tab.yjfk', {
      url: '/yjfk',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine/mine-yjfk.html'
        }
      }
    })
    .state('tab.zxkf', {
      url: '/zxkf',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine/mine-zxkf.html'
        }
      }
    })
    .state('tab.wdfx', {
      url: '/wdfx',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine/mine-wdfx.html'
        }
      }
    })
    .state('tab.gywm', {
      url: '/gywm',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine/mine-gywm.html'
        }
      }
    })


    .state('tab.login', {
      url: '/login',
      views: {
        'tab-mine': {
          templateUrl: 'templates/tab-login.html',
          controller: 'LoginCtrl'
        }
      }
    })
    .state('tab.regist', {
      url: '/regist',
      views: {
        'tab-mine': {
          templateUrl: 'templates/tab-regist.html',
          controller: 'RegisterCtrl'
        }
      }
    })
    .state('tab.reset', {
      url: '/reset',
      views: {
        'tab-mine': {
          templateUrl: 'templates/tab-reset.html'
        }
      }
    })


  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  })


  .state('tab.nofu', {
    url: '/nofu',
    views: {
      'tab-home': {
        templateUrl: 'templates/home-nofu.html',
        controller: 'NofuCtrl'
      }
    }
  })

  .state('tab.cooperate', {
    url: '/cooperate',
    views: {
      'tab-home': {
        templateUrl: 'templates/home-cooperate.html',
        controller: 'CooperateCtrl'
      }
    }
  })
  .state('tab.discount', {
    url: '/discount',
    views: {
      'tab-home': {
        templateUrl: 'templates/home-discount.html',
        controller: 'DiscountCtrl'
      }
    }
  })
  .state('tab.ph', {
    url: '/ph',
    views: {
      'tab-home': {
        templateUrl: 'templates/home-ph.html'
      }
    }
  })
  .state('tab.active', {
    url: '/active',
    views: {
      'tab-home': {
        templateUrl: 'templates/home-active-details.html'
      }
    }
  })
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

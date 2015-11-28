angular.module('contactListApp.controllers', [])

.controller("DashCtrl", function($scope, 
      $rootScope, 
      $ionicPlatform, 
      $cordovaBatteryStatus) {
  $scope.message="Wellcome";
  $ionicPlatform.ready(function() {
    $rootScope.$on("$cordovaBatteryStatus:status",
     function(event, args){
        $scope.batteryLevel = args.level;
        $scope.isPluggedIn = args.isPlugged;
        // if(args.isPlugged) {
        //   alert("Charging -> " + args.level + " %");
        // } else {
        //   alert("Battery -> " + args.level + " %");
        // }
      });          
  });
})
.controller('ContactsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })
.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
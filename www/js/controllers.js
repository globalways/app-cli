angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('StationsCtrl', function($scope, $state, Stations, Register, $ionicModal, $timeout) {
  $scope.stations = Stations.all();

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.forget = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
     alert($scope.loginData.phone);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.doRefresh = function() {
    $timeout(function() {
       $scope.stations.push({ id: 0, name: 'Scruff McGruff', from: '1.5km' });
       $scope.$broadcast('scroll.refreshComplete');
    }, 1000);
  };

  $scope.toRegister = function() {
  alert("register");
    $state.go('register-step-one');
  };
})

.controller('RegisterOneCtrl', function($scope, $state, Register){
  $scope.registerData1 = {};
  $scope.doNext = function() {
    Register.savePhone($scope.registerData1.phone);
    alert(Register.getPhone());
    $state.go('register-step-two');
  };
  $scope.backToLogin = function() {
    $state.go('more');
  };
})

.controller('RegisterTwoCtrl', function($scope, $state, Register){
  $scope.registerData2 = {};
  $scope.doRegister = function() {
    alert("phone:"+Register.getPhone()+" nick:"+$scope.registerData2.nick);
  };
  $scope.backToStepOne = function() {
    $state.go('register-step-one');
  };
})

.controller('StationDetailCtrl', function($scope, $stateParams, Stations) {
  $scope.station = Stations.get($stateParams.stationId);
})

.controller('AccountCtrl', function($scope, $state) {
  $scope.toRegister = function() {
    $state.go('register-step-one');
  };
});
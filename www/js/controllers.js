var app = angular.module('test.controllers', []);

var AppCtrl =  function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
    $scope.loginData = {};

  // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
     });

  // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

  // Open the login modal
    $scope.login = function() {
         $scope.modal.show();
    };

  // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
        $scope.closeLogin();
            }, 1000);
        };
    };

var addCtrl = function($scope,$firebase){
    var ref = new Firebase("https://luminous-fire-844.firebaseio.com/");
    $scope.cards = $firebase(ref).$asArray();
    $scope.card = {};
    $scope.addcard = function (){
        $scope.cards.$add({
            bank: $scope.card.bank,
            name: $scope.card.name,
            annual_fee: $scope.card.annual_fee,
//            reward:  $scope.card.reward
        });
         $scope.card = {};
        };
    };


var PlaylistsCtrl = function($scope) {
    $scope.playlists = [
        { title: 'Reggae', id: 1 },
        { title: 'Chill', id: 2 },
        { title: 'Dubstep', id: 3 },
        { title: 'Indie', id: 4 },
        { title: 'Rap', id: 5 },
        { title: 'Cowbell', id: 6 }
        ];
    };

var PlaylistCtrl = function($scope, $stateParams) {
    };


AppCtrl.$inject = ['$scope', '$ionicModal', '$timeout'];
addCtrl.$inject = ['$scope','$firebase'];
PlaylistsCtrl.$inject = ['$scope'];
PlaylistCtrl.$inject = ['$scope'];

app.controller('AppCtrl',AppCtrl)
 .controller('addCtrl',addCtrl)
 .controller('PlaylistsCtrl',PlaylistsCtrl)
 .controller('PlaylistCtrl', PlaylistCtrl);



















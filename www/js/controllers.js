angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, Elections) {
  $scope.elections = Elections.all();
})


.controller('ElectionsCtrl', function($scope, Elections) {
  $scope.elections = Elections.all();
})

.controller('ElectionsDetailCtrl', function($scope, $stateParams, Elections) {
  $scope.election = Elections.get($stateParams.id);
})

.controller('CreateCtrl', function($scope) {
});

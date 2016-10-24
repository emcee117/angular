(function () {
'use strict';

angular.module('MyDependencyApp', [])
.controller('MyDependencyController',MyDependencyController);

function MyDependencyController ($scope, $filter) {
  $scope.name = "Cecil";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}
})();

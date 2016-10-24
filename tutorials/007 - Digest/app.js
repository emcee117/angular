(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {
  $scope.onceCounter = 0;
  $scope.counter = 0;
  $scope.name = "Yaakov";
  $scope.showNumberOfWatchers = function () {
    console.log("# of watchers: " + $scope.$$watchersCount);
  };

  $scope.countOnce = function () {
    $scope.onceCounter = 1;
  };

  $scope.upCounter = function () {
    $scope.counter++;
  }

  // $scope.$watch('onceCounter', function (newvalue, oldValue) {
  //   console.log("onceCounter old value ", oldValue);
  //   console.log("onceCounter new value", newvalue);
  // });
  //
  // $scope.$watch('counter', function (newvalue, oldValue) {
  //   console.log("counter old value ", oldValue);
  //   console.log("counter new value", newvalue);
  // });

  $scope.$watch(function () {
    console.log("Digest loop fired.");
  });
}
})();

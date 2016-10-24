(function () {
'use strict';

angular.module('MyNameApp', [])
.controller('MyNameController', MyNameController);

function MyNameController ($scope) {
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.displayNumeric = function () {
    var totalNameValue = calculateNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
  };
}

function calculateNumericForString (string) {
  var total = 0;

  for (var i = 0; i < string.length; i++) {
    total += string.charCodeAt(i);
  }

  return total;
}

})();

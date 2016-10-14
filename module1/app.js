(function () {
'use strict';

angular.module('ModuleOneApp', [])
.controller('ListController', ListController);

ListController.$inject = ['$scope'];

function ListController($scope) {
	$scope.list = "";
	$scope.listMessage = "Please enter data first.";

	$scope.checkList = function () {
		checkItems($scope.list);
	};

	function checkItems(list) {
		var a_list = list.split(',');
		var len = 0;
		
		for (var i = a_list.length - 1; i >= 0; i--) {
			if (a_list[i].length > 0) {
				len += 1;
			}
		}

		if (len > 0 && len < 4) {
			$scope.listMessage = "Thanks!";
		} else if (len > 3){
			$scope.listMessage = "Too much!";
		}
	}
}

})();
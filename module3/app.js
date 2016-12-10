(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;

  list.isEmpty = function () {
    return list.found != undefined && list.found.length === 0;
  }
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.search = "";

  menu.narrowIt = function () {
    if (menu.search.length === 0) {
      menu.found = [];
    } else {
      var promise = MenuSearchService.getMatchedMenuItems(menu.search);
      promise.then(function (response) {
        menu.found = response;
        console.log(menu.found);
      })
      .catch(function(error) {
          console.log("Something went wrong", error);
      });
    }
  };

  menu.removeItem = function (index) {
    menu.found.splice(index, 1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    }).then(function (response) {
      var allMenu = [];
      var foundItems = [];
      allMenu = response.data.menu_items;
      for (var i = 0; i < allMenu.length; i++) {
        if (allMenu[i]["name"].toLowerCase().includes(searchTerm.toLowerCase())) {
          foundItems.push(allMenu[i]);
        }
      }

      return foundItems;
    });
  };
}
})();

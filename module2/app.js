(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.toBuyItems();
  buyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.alreadyBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuy = [
    {name: "cookies", quantity: 10},
    {name: "carbonated drinks", quantity: 5},
    {name: "chocolate bars", quantity: 2},
    {name: "powdered milk", quantity: 10},
    {name: "apples", quantity: 7}
  ];

  var alreadyBought = [];
  var started = false;

  service.toBuyItems = function () {
    return toBuy;
  };

  service.alreadyBoughtItems = function () {
    return alreadyBought;
  };

  service.buyItem = function (itemIndex) {
    var item = {name: toBuy[itemIndex].name, quantity: toBuy[itemIndex].quantity};

    toBuy.splice(itemIndex, 1);
    alreadyBought.push(item);
  };
}

})();

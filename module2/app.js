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

  //return buy list length is empty
  buyList.buyAll = function () {
    return (buyList.items.length === 0);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.alreadyBoughtItems();

  //return bought list length is not empty
  boughtList.buyNotStarted = function () {
    return (boughtList.items.length === 0);
  };
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

  service.toBuyItems = function () {
    return toBuy;
  };

  service.alreadyBoughtItems = function () {
    return alreadyBought;
  };

  service.buyItem = function (itemIndex) {
    //push item to bought list
    alreadyBought.push(toBuy[itemIndex]);
    //remove item from buy list
    toBuy.splice(itemIndex, 1);
  };
}

})();

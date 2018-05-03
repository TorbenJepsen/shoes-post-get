app.controller('ShoeController', ['ShoeService', function (ShoeService) {
    console.log('ShoeController loaded');

    var self = this;

    self.shoes = ShoeService.shoes;
    self.getShoes = ShoeService.getShoes;
    self.getShoes();
    self.editShoe = ShoeService.editShoe;
    self.deleteShoe = ShoeService.deleteShoe;
    self.addShoes = ShoeService.addShoes;
}]);
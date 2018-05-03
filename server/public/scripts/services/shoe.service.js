app.service('ShoeService', ['$http', function ($http) {
    console.log('ShoeService is loaded');
    var self = this;
    self.shoes={data:''};

    self.getShoes = function() {

        $http({
            method: 'GET',
            url: '/shoes'
        })
        .then(function (response) {
            self.shoes.data = response.data;
        })
        .catch(function (error) {
            console.log('Not working', error);
        })
    };

    self.addShoes = function(newShoe) {
        $http({
            method: 'POST',
            url: '/shoes',
            data: newShoe
        })
        .then(function (response) {
            console.log(response);
            self.getShoes();
        })
    }

    self.editShoe = function(shoe) {
        $http({
            method: 'PUT',
            url: '/shoes',
            data: shoe
        })
        .then(function (response) {
            self.getShoes();
        })
        .catch(function (error) {
            console.log('Nope Not Working', error);
        })
    };

    self.deleteShoe = function(shoe) {
        $http({
            method: 'DELETE',
            url: '/shoes',
            params: shoe
        })
        .then( function (response) {
            self.getShoes();
        })
        .catch(function (error) {
            console.log('Nope Not Working', error);
        })
    }
}]);
app.controller('MainController', ['$scope', 'Teas', function($scope, Teas){
      $scope.teas = Teas.teas;
      $scope.add = Teas.add;
    }])

app.controller('CartController', ['$scope', 'Teas', function($scope, Teas){
      $scope.cart = Teas.cart;
    }])

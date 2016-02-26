app.controller('MainController', ['$scope', 'Teas', function($scope, Teas){
      $scope.teas = Teas.teas;
      $scope.add = Teas.add;
      $scope.cart = Teas.cart; 
    }])

app.controller('CartController', ['$scope', 'Teas', function($scope, Teas){
      $scope.cart = Teas.cart;

      // $scope.toggleEdit = function(){
        // $scope.toggleEdit = !$scope.toggleEdit;
      // }



    }])

app.controller('MainController', ['$scope', 'Teas', function($scope, Teas){
      $scope.teas = Teas.teas;
      $scope.add = Teas.add;
      $scope.cart = Teas.cart;
      // $scope.cart.length = Teas.cart.length
      if ($scope.cart.length === 0) {
        return "empty"
      }
      if ($scope.cart.length > 0) {
        return $scope.cart.length
      }
      // $scope.cart.length = Teas.cart.length;
      // $scope.cartLength = cartLength();

    //   function cartLength() {
    //     var cartLength = $scope.cart.length
    //     if (cartLength === 0) {
    //       return "Empty";
    //     if (cartLength > 0) {
    //       return cartLength;
    //     }
    //   }
    // }

    }]);

app.controller('CartController', ['$scope', 'Teas', function($scope, Teas){
      $scope.cart = Teas.cart;
      $scope.grandTotal = grandTotal();

      function grandTotal() {
        var cartTotalArray = []
        for (var i = 0; i < Teas.cart.length; i++) {
          var cartTotal = Teas.cart[i].total
          cartTotalArray.push(cartTotal)
          var grandTotal = cartTotalArray.reduce((prev, curr) => prev + curr);
        }
        if(grandTotal === undefined) {
          return '$0.00'
        } else
          return '$' + parseFloat(grandTotal).toFixed(2);
      };

      // $scope.toggleEdit = function(){
        // $scope.toggleEdit = !$scope.toggleEdit;
      // }

    }]);

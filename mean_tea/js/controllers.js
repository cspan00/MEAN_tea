app.controller('MainController', ['$scope', 'Teas', function($scope, Teas){
      $scope.teas = Teas.teas;
      $scope.add = Teas.add;
      $scope.cart = Teas.cart;
    }]);

app.controller('CartController', ['$scope', 'Teas', function($scope, Teas){
      $scope.cart = Teas.cart;
      $scope.showEdit = false;

      // update quantity


      // gets grand total
      $scope.total = function () {
        var cartTotalArray = []
        for (var i = 0; i < Teas.cart.length; i++) {
          var cartTotal = Teas.cart[i].total
          cartTotalArray.push(cartTotal)
          var total = cartTotalArray.reduce((prev, curr) => prev + curr);
        }
        if(total === undefined) {
          return '$0.00'
        } else {
          return '$' + parseFloat(total).toFixed(2);
        }
      };

      // remove item from cart
      $scope.remove = function (index) {
        $scope.cart.splice(index, 1);
      }

      // show edit quantity select box
      $scope.toggleEdit = function() {
        $scope.showEdit = !$scope.showEdit
        $scope.hideQty = !$scope.hideQty
        $scope.hideSave = !$scope.hideSave
      }



    }]);

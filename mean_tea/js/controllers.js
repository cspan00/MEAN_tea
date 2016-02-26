app.controller('MainController', ['$scope', 'Teas', function($scope, Teas){
      $scope.test= Teas.teas
    }])

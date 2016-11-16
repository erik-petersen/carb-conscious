myApp.controller( "ControllerFood", [ "$scope", "$http", function( $scope, $http ) {
  $scope.meals = [ "Breakfast", "Brunch", "Lunch", "Dinner", "Dessert", "Snack" ];
  console.log( $scope.meals );
}]); // end controller ControllerFood

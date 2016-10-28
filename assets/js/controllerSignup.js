myApp.controller( "ControllerSignup", [ "$scope", "$http", function( $scope, $http ) {

  $scope.submitForm = function() {

    $scope.form = {
      "email": $scope.customerEmail,
      "password": $scope.customerPassword
    };

    console.log( $scope.form );
  } // end submitForm function
}]); // end controller ControllerSignup

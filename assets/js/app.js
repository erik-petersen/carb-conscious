var myApp = angular.module( "myApp", ["ngRoute"] );

myApp.config( function( $routeProvider ) {
  $routeProvider
  .when( "/home", {
    templateUrl: "pages/home.html"
  })
  .when( "/signup", {
    templateUrl: "pages/signup.html",
    controller: "ControllerSignup"
  })
  .otherwise({
    redirectTo: "/home"
  });

}); // end myApp.config

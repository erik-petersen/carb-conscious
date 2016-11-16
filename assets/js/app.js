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
  .when( "/activity", {
    templateUrl: "pages/activity.html"
  })
  .when( "/blood-sugar", {
    templateUrl: "pages/blood-sugar.html"
  })
  .when( "/food", {
    templateUrl: "pages/food.html",
    controller: "ControllerFood"
  })
  .when( "/groceries", {
    templateUrl: "pages/groceries.html"
  })
  .when( "/symptoms", {
    templateUrl: "pages/symptoms.html"
  })
  .when( "/water", {
    templateUrl: "pages/water"
  })
  .when( "/weight", {
    templateUrl: "pages/weight.html"
  })
  .otherwise({
    redirectTo: "/home"
  });

}); // end myApp.config

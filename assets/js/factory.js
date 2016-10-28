// thank you, http://weblogs.asp.net/dwahlin/using-an-angularjs-factory-to-interact-with-a-restful-service, for your help!!!

  myApp.factory( "dataFactory", [ "$http", function( $http ) {

    var signupUrl = ""; // empty at the moment

    dataFactory.postSignup = function() {
      return $http.post( signupUrl );
    };

    return dataFactory;
  }]) // end factory

(function(module) {
  var theDatabase= {};
  var newPerson = new Firebase('https://queue-you.firebaseio.com/database');

  //new profile constructor
  theDatabase.NewProfile = function(first, last, email, course) {
    this.first = first;
    this.last = last;
    this.email = email;
    this.course = course;
    // this.admin = admin;
  }

  //add user new user profile to the DOM as JSON data



  //populate current array of users with a callback function

  theDatabase.populateUsers = function(NewProfile) {
    $.getJSON('data/test.json', function(data) {

    });
  }
  //separate teachers and students via the filter and map methods
  theDatabase.separateUsers = function(totalUsers) {

  }

  theDatabase.loadUsers = function(teachers, students) {
    //add teachers to the DOM
    //add students to the DOM
  }
  
  module.theDatabase = theDatabase;
})(window);

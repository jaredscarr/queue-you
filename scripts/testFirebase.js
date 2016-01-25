// (function(module, firebase) {
  var db= {};
  var ref = new Firebase('https://queue-you.firebaseio.com/users');

  //new profile contructor for basic level user
  db.NewProfile = function(name, email, course) {
    this.name = name;
    this.email = email;
    this.course = course;
  };

  db.createNewUser = function() {
    var $name = $('#name').val();
    var $email = $('#email').val();
    var $course = $('select option:selected').val();
    console.log($name, $email, $course);
    var user = db.NewProfile($name, $email, $course);
    return user;
  }
  //sign up event listener
  db.signUp = function (user) {
    $('#signup').on('click', function (e) {
      ref.createUser(
        user
      , function(error, userData) {
        if (error) {
          console.log('Error creating user: ' + error);
        }  else {
            console.log('successfully created account with uid: ', userData.uid);
        }
      });
    }
  )};
db.signUp();
  //sign in event lister

  //admin info?

  //create user


  //add user new user profile to the DOM as JSON db



  //populate current array of users with a callback function

  db.populateUsers = function(NewProfile) {
    $.getJSON('db/test.json', function(db) {

    });
  };
  //separate teachers and students via the filter and map methods
  db.separateUsers = function(totalUsers) {

  };

  db.loadUsers = function(teachers, students) {
    //add teachers to the DOM
    //add students to the DOM
  };

  // module.theDatabase = theDatabase;
  // firebase.ref = ref;

var newPerson = new Firebase('https://queue-you.firebaseio.com/');

//new profile constructor
function NewProfile(first, last, email, course) {
  this.first = first;
  this.last = last;
  this.email = email;
  this.course = course;
}

//add user new user profile to the DOM as JSON data



//populate current array of users with a callback function

function populateUsers (NewProfile) {
  $.getJSON('data/test.json', function(data) {

  });
}
//separate teachers and students via the filter and map methods
function separateUsers (totalUsers) {

}

function loadUsers (teachers, students) {
  //add teachers to the DOM
  //add students to the DOM
}

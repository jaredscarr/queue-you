var newPerson = new Firebase('https://queue-you.firebaseio.com/');

function NewProfile(first, last, email, course) {
  this.first = first;
  this.last = last;
  this.email = email;
  this.course = course;
}

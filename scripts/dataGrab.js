// var Firebase = require('firebase');

var ref = new Firebase('https://queue-you.firebaseio.com/');

function Profile(name, issue, desc) {
  this.name = name;
  this.issue = issue;
  this.desc = desc;
};

var getFormData = function() {
  $('#submit-button').on('click', function(e){
    e.preventDefault();
    $name = $('#name').val();
    $issue = $('input:checked').val();
    $desc = $('#desc').val();
    var newUser = new Profile ($name, $issue, $desc);
    var usersRef = ref.child('users');
    var newUserRef = usersRef.push();
    newUserRef.set(newUser);
  });
};

getFormData();

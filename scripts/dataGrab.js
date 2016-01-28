// var Firebase = require('firebase');

var ref = new Firebase('https://queue-you.firebaseio.com/');

function Profile(name, issue, desc) {
  this.name = name;
  this.issue = issue;
  this.desc = desc;
};

// var getFormData = function() {
//   $('#submit-button').on('click', function(e){
//     e.preventDefault();
//     $name = $('#name').val();
//     $issue = $('input:checked').val();
//     $desc = $('#desc').val();
//     var newUser = new Profile ($name, $issue, $desc);
//     console.log($name, $issue, $desc);
//     console.log(newUser);
//     var usersRef = ref.child('users');
//     var newUserRef = usersRef.push();
//     newUserRef.set(newUser);
//   });
// };

//modified from above for authorization
var login = function() {
  $('#submit-button').on('click', function(e){
    e.preventDefault();
    $name = $('#name').val();
    $issue = $('input:checked').val();
    $desc = $('#desc').val();
    var $selected = false; // set bolean for not being selected by a TA
    var newUser = new Profile ($name, $issue, $desc);
    var usersRef = ref.child('users');
    var newUserRef = usersRef.push();
    newUserRef.set(newUser);
    // ref.authAnonymously(function(error, authData) {
    //
    //   if (error) {
    //     console.log('Login Failed!', error);
    //   } else {
    //     console.log('Authenticated successfully with payload:', authData);
    //   }
    // });
    // var userid = snapshot.key();
    // track.storeLocal(userid);
  });
};

login();
// getFormData();

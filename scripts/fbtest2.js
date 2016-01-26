var ref = new Firebase('https://queue-you.firebaseio.com/');

// var profiles = [{name : 'jared'}, {name : 'brandon'}, {name : 'Carson'}, {name : 'Michael'}];

//this pushes the array of objects into the firebase database!!!!!
// var pushProfiles = function() {
//   profiles.forEach(function (user) {
//     console.log(user);
//     ref.push(user);
//     }
//   );
// }

function Profile (name, issue, desc) {
  this.name = name;
  this.issue = issue;
  this.desc = desc;
};

var getFormData = function() {
  $('#').on('click', function(e) {
    $name
    $issue
    $desc
    var newUser = new Profile($name, $issue, $desc);
    ref.push(newUser);
  })
};

// var pushProfile = function(profile) {
//   ref.push(profile);
// };

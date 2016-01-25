var ref = new Firebase('https://queue-you.firebaseio.com/');


var profiles = [{name : 'jared'}, {name : 'brandon'}, {name : 'Carson'}, {name : 'Michael'}];

//this pushes the array of objects into the firebase database!!!!!
// var pushProfiles = function() {
//   profiles.forEach(function (user) {
//     console.log(user);
//     ref.push(user);
//     }
//   );
// }

var newProfile = function (name) {
  this.name = name;
}

var pushProfiles = function() {
  profiles.forEach(function (user) {
    console.log(user);
    ref.push(user);
    }
  );
}

var ref = new Firebase('https://queue-you.firebaseio.com/');


var profiles = [{name : 'jared'}, {name : 'brandon'}, {name : 'Carson'}, {name : 'Michael'}];

var pushProfiles = function() {
  profiles.forEach(function (user) {
    console.log(user);
    ref.push(user);
    }
  );
}

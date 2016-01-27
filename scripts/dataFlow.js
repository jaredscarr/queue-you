// (function (module) {
  console.log('dataFlow Ready');
  var db = {};
  //reference to firebase
  var ref = new Firebase('https://queue-you.firebaseio.com/');
  var ref2 = new Firebase('https://queue-you.firebaseio.com/users');

  //get snapshot of the database
  // db.getSnap = function() {
  //   ref.on('value', function(snapshot) {
  //     console.log('Snapshot' + snapshot.val());
  //   }, function (errorObject) {
  //     console.log('The read failed: ' + errorObject.code);
  //   });
  // };

  //childAppend
  // old function that we were working on to append not currently working

  db.childAppend = function(){
    ref.on('child_added', function(snapshot, prevChildKey) { //change back to child-append
      var newStudent = snapshot.val();
      turtle = newStudent;
      console.log('turtle: ' + turtle);
    });
  };

  //on child added I guess would append the child to the database and update the database or is that two functions

  db.childAdded = function(){
    ref.on('child_added', function(snapshot, prevChildKey) {
      var newStudent = snapshot.val();
      frog = newStudent;
      console.log('frog: ' + frog);
    });
  };

  //on child removed

  db.childRemoved = function(){
    ref2.on('child_removed', function(snapshot, prevChildKey) {
      var newStudent = snapshot.val();
      rabbit = newStudent;
      console.log('rabbit' + rabbit);
      
    });
  };

  //initialize functions

  db.init = function() {
    // db.getSnap();
    db.childAppend();
    db.childAdded();
    db.childRemoved();
  };

  db.init();
  console.log('ready');

  // module.db = db;
  // module.ref = ref;
// })(window);

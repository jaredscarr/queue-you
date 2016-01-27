// (function(module) {

  var teacherView = {};
  var ref = new Firebase('https://queue-you.firebaseio.com/');
  var ref2 = new Firebase('https://queue-you.firebaseio.com/users');
  var userRef = new Firebase('https://queue-you.firebaseio.com/users/-K93Euc0QOzGSr_rcx0Z');
  var profileList = [];

  teacherView.showList = function() {
    $('#teacher-button').on('click', function() {
      $('#teacher').show().siblings().hide();
      teacherView.post();
    });
  };

  teacherView.storagePull = function(){
    ref2.on('child_added', function(snapshot, prevChildKey) {
      var newStudent = snapshot.val();
      sheep = snapshot.key();
      pig = newStudent;
      console.log('pig: ' + pig);
      profileList.push(snapshot.val());
    });
  };

  teacherView.post = function(){
    console.log('run');
    for (var i = 0; i < profileList.length; i++) {
      $('ol').append('<li>Name: ' + profileList[i].name + '</li>');
      teacherView.removeStudent();
      // '</br>' +
      // profileList[i].issue + '</br>' +
      // profileList[i].desc +'</br>' + '</br>' + '</li>');
    }
  };

  teacherView.removeStudent = function() {
    console.log('reached removeStudent');
    $('li').on('click', function() {
      $(this).remove();
      db.childRemoved();
    });
  };

  teacherView.showList();
  teacherView.storagePull();


//   module.teacherView = teacherView;
// })(window);

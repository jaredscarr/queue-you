// (function(module) {

  var teacherView = {};
  var ref = new Firebase('https://queue-you.firebaseio.com/');
  var ref2 = new Firebase('https://queue-you.firebaseio.com/users/');
  // var ref3 = new Firebase('https://queue-you.firebaseio.com/users/-K93F-mA76dCgyazMeEG');
  var profileList = [];
  var keys = [];

  teacherView.showList = function() {
    $('#teacher-button').on('click', function(e) {
      e.preventDefault();
      $('#teacher').show().siblings().hide();
      $('#chosen-one').hide();
      $('#current').hide();
      teacherView.post();
    });
  };

  teacherView.storagePull = function(){
    ref2.on('child_added', function(snapshot, prevChildKey){
      var newPost = snapshot.val();
      profileList.push(snapshot.val());
      keys.push(snapshot.key());
      console.log(snapshot.key());
      // storeLocal(userid);
    });
  };
  teacherView.post = function(){
    for (var i = 0; i < profileList.length; i++) {
      $('ol').append('<li>Name: ' + profileList[i].name + '</br>' +
      profileList[i].issue + '</br>' +
      profileList[i].desc +'</br>' + '</br>' + '</li>');
      teacherView.selected();
    }
  };

//show selected student in different part of the page

  // teacherView.remove = function() {
  //   $('li').click(function() {
  //     var $key = $(this).index();
  //     console.log($key);
  //     console.log(keys[$key]);
  //     var deleteRef = new Firebase('https://queue-you.firebaseio.com/users/' + keys[$key]);
  //     console.log(deleteRef);
  //     console.log($(this).index());
  //     deleteRef.remove();
  //     $(this).remove();
  //   });
  // };

// modifying above to remove from different part of page
  teacherView.removeFromdb = function() {
    $('#solved').on('click', function(e) { //on button click remove from db
      e.preventDefault();
      var $key = $(this).index();
      console.log($key);
      var deleteRef = new Firebase('https://queue-you.firebaseio.com/users/' + keys[$key]);
      deleteRef.remove();
      $(this).remove();
    });
  };

//copy the
  teacherView.selected = function() {
    $('li').on('click', function(e) {
      e.preventDefault();
      var $chosen = $(this).clone();
      $(this).hide();
      $('#current').show();
      $('#chosen-one').append($chosen).show();
      teacherView.removeFromdb();
    });
  };

  teacherView.showList();
  teacherView.selected();
  teacherView.storagePull();
//   module.teacherView = teacherView;
// })(window);

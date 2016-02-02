(function(module) {

  var teacherView = {};
  var ref = new Firebase('https://queue-you.firebaseio.com/');
  var ref2 = new Firebase('https://queue-you.firebaseio.com/users/');
  var profileList = [];
  var keys = [];

  teacherView.showList = function() {
    $('#teacher-button').on('click', function() {
      // $('#teacher').show().siblings().hide();
      // $('#current').hide();
      teacherView.post();
    });
  };

  teacherView.storagePull = function(){
    ref2.on('child_added', function(snapshot, prevChildKey){
      var newPost = snapshot.val();
      profileList.push(snapshot.val());
      keys.push(snapshot.key());
    });
  };

  teacherView.post = function(){
    for (var i = 0; i < profileList.length; i++) {
      $('ol').append('<li>Name: ' + profileList[i].name + '</br>' +
      profileList[i].issue + '</br>' +
      profileList[i].desc +'</br>' + '</br>' + '</li>');
      teacherView.remove();
    }
  };

  teacherView.remove = function() {
    $('li').click(function() {
      var $key = $(this).index();
      // console.log($key);
      // console.log(keys[$key]);
      var deleteRef = new Firebase('https://queue-you.firebaseio.com/users/' + keys[$key]);
      // console.log(deleteRef);
      // console.log($(this).index());
      deleteRef.remove();
      $(this).remove();
    });
  };

  // teacherView.showList();
  teacherView.post();
  teacherView.storagePull();
  module.teacherView = teacherView;
})(window);

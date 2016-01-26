// (function(module) {

  var teacherView = {};
  var ref = new Firebase('https://queue-you.firebaseio.com/users');
  var profileList = [];

  teacherView.showList = function() {
    $('#teacher-button').on('click', function() {
      $('#teacher').show().siblings().hide();
    });
  };


  teacherView.storagePull = function(){
    ref.on('child_added', function(snapshot, prevChildKey){
      var newPost = snapshot.val();
      console.log(newPost);
      profileList.push(snapshot.val());
    });
  };


  teacherView.showList();
  teacherView.storagePull();

//   module.teacherView = teacherView;
// })(window);

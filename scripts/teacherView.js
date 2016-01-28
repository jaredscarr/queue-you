// (function(module) {

  var teacherView = {};
  var ref = new Firebase('https://queue-you.firebaseio.com/');
  var ref2 = new Firebase('https://queue-you.firebaseio.com/users/');
  // var ref3 = new Firebase('https://queue-you.firebaseio.com/users/-K93F-mA76dCgyazMeEG');
  var profileList = [];
  var keys = [];

  teacherView.showList = function() {
    $('#teacher-button').on('click', function() {
      $('#teacher').show().siblings().hide();
      teacherView.post();
    });
  };


  // /////////////////////////////////////
  //
  //
  // teacherView.test = function() {
  //   $('#teacher-test').on('click', function() {
  //     // e.preventDefault();
  //     $('#form').show().siblings().hide();
  //   });
  // };
  //
  //
  // /////////////////////////////////////


  teacherView.storagePull = function(){
    ref2.on('child_added', function(snapshot, prevChildKey){
      var newPost = snapshot.val();
      // console.log(newPost);
      // console.log(snapshot.key());
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
      console.log($key);
      console.log(keys[$key]);
      var deleteRef = new Firebase('https://queue-you.firebaseio.com/users/' + keys[$key]);
      console.log(deleteRef);
      console.log($(this).index());
      deleteRef.remove();
      $(this).remove();


      // ref2.child.key.remove();
    });
  };

  teacherView.showList();
  teacherView.storagePull();
  // teacherView.test();
//   module.teacherView = teacherView;
// })(window);

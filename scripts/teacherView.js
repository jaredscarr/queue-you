// (function(module) {

  var teacherView = {};
  var ref = new Firebase('https://queue-you.firebaseio.com/');

  teacherView.showList = function() {
    $('#teacher-button').on('click', function() {
      $('#teacher').show().siblings().hide();
      teacherView.post();
    });
  };

  teacherView.storagePull = function(){
    ref.on('value', function(snapshot, prevChildKey) { //change back to child-append
      var newStudent = snapshot.val();
      console.log(newStudent);
      console.log(snapshot);
    });
  };


  // teacherView.post = function(){
  //   for (var i = 0; i < profileList.length; i++) {
  //     $('ol').append('<li>Name: ' + profileList[i].name + '</br>' +
  //     profileList[i].issue + '</br>' +
  //     profileList[i].desc +'</br>' + '</br>' + '</li');
  //   }
  // };


  teacherView.showList();
  teacherView.storagePull();

//   module.teacherView = teacherView;
// })(window);

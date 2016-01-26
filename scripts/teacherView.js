// (function(module) {

  var teacherView = {};
  var ref = new Firebase('https://queue-you.firebaseio.com/users');
  var profileList = [];

  teacherView.showList = function() {
    $('#teacher-button').on('click', function() {
      $('#teacher').show().siblings().hide();
      // teacherView.post();
    });
  };

  teacherView.storagePull = function(){
    ref.on('child_added', function(snapshot, prevChildKey){
      var newStudent = snapshot.val();
      console.log(newStudent);
      // profileList.push(snapshot.val());
      console.log('Name: ' + newStudent.name);
    });
  };


  // teacherView.post = function(){
  //   for (var i = 0; i < profileList.length; i++) {
  //     $('ol').append('<li>Name: ' + profileList[i].name + '</br>' +
  //     profileList[i].issue + '</br>' +
  //     profileList[i].desc +'</br>' + '</br>' + '</li');
  //   }
  // };
  //   profileList.forEach(function(name, issue, desc) {
  //     $('ol').append('<li>' + this.name + this.issue + this.desc + '</li>').toHtml();
  //   });
  // };


  teacherView.showList();
  teacherView.storagePull();

//   module.teacherView = teacherView;
// })(window);

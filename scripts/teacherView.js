// (function(module) {

  var teacherView = {};
  var ref = new Firebase('https://queue-you.firebaseio.com/');
  var ref2 = new Firebase('https://queue-you.firebaseio.com/users');
  var profileList = [];

  teacherView.showList = function() {
    $('#teacher-button').on('click', function() {
      $('#teacher').show().siblings().hide();
      teacherView.post();
    });
  };


  /////////////////////////////////////


  teacherView.test = function() {
    $('#teacher-test').on('click', function() {
      // e.preventDefault();
      $('#form').show().siblings().hide();
    });
  };


  /////////////////////////////////////


  teacherView.storagePull = function(){
    ref2.on('child_added', function(snapshot, prevChildKey){
      var newPost = snapshot.val();
      console.log(newPost);
      profileList.push(snapshot.val());
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
  //   profileList.forEach(function(name, issue, desc) {
  //     $('ol').append('<li>' + this.name + this.issue + this.desc + '</li>').toHtml();
  //   });
  // };
  teacherView.remove = function() {
    $('li').click(function() {
      $( this ).remove();
    });
  };

  teacherView.showList();
  teacherView.storagePull();
  teacherView.test();
//   module.teacherView = teacherView;
// })(window);

(function(module) {

  var teacherView = {};
  var ref = new Firebase('https://queue-you.firebaseio.com/');

  ref.on('value', function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.lgot('The read failed: ' + errorObject.code);
  });

  teacherView.showList = function() {
    $('#teacher-button').on('click', function() {
      $('#teacher').show().siblings().hide();
    });
  };

  teacherView.showList();

  module.teacherView = teacherView;
})(window);

(function(module) {

  var teacherView = {};

  teacherView.showList = function() {
    $('#teacher-button').on('click', function() {
      $('#teacher').show().siblings().hide();
    });
  };

  teacherView.showList();

  module.teacherView = teacherView;
})(window);

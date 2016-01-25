(function(module) {

  var studentView = {};

  studentView.showForm = function() {
    $('#student-button').on('click', function() {
      $('#student').show().siblings().hide();
    });
  };

  studentView.showForm();

  module.studentView = studentView;
})(window);

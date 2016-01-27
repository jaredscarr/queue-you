(function(module) {

  var studentView = {};

  studentView.waiting = function() {
    $('#submit-button').on('click', function(e) {
      e.preventDefault();
      $('#student').show().siblings().hide();
      // $('#student').show();
    });
  };


  studentView.waiting();

  module.studentView = studentView;
})(window);

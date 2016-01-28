(function(module) {

  var studentView = {};

  studentView.waiting = function() {
    $('#submit-button').on('click', function(e) {
      e.preventDefault();
      $('#student').show().siblings().hide();
    });
  };


  studentView.showOnSelect = function() {
    $('#').on('click', function() {
      $('#mypage').show().siblings().hide();
    });
  };

  studentView.waiting();

  module.studentView = studentView;
})(window);

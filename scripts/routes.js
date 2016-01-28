(function(module) {

  var view = {};

  view.landing = function() {
    $('#landing-test').on('click', function() {
      $('#landing').show().siblings().hide();
    });
  };

  view.form = function() {
    $('#form-test').on('click', function() {
      $('#form').show().siblings().hide();
    });
  };

  view.teacher = function() {
    $('#teacher-test').on('click', function(e) {
      e.preventDefault();
      $('#teacher').show().siblings().hide();
    });
  };

  view.student = function() {
    $('#student-test').on('click', function(e) {
      e.preventDefault();
      $('#student').show().siblings().hide();
    });
  };

  view.init = function() {
    view.landing();
    view.form();
    view.teacher();
    view.student();
  };

  view.init();

  module.view = view;
})(window);

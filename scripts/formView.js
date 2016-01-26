(function(module) {

  var formView = {};

  formView.showForm = function() {
    $('#student-button').on('click', function() {
      $('#form').show().siblings().hide();
    });
  };

  formView.showForm();

  module.formView = formView;
})(window);

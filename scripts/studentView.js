(function(module) {

  var studentView = {};

  studentView.waiting = function() {
    $('#submit-button').on('click', function(e) {
      e.preventDefault();
      $('#student').show().siblings().hide();
      // $('#student').show();
    });
  };

//   /////////////////////////////////////
//
//
//
//   studentView.test = function() {
//     $('#student-test').on('click', function(e) {
//       e.preventDefault();
//       $('#teacher').show().siblings().hide();
//       teacherView.post();
//     });
//   };
//
//
// /////////////////////////////////////

  studentView.waiting();
  // studentView.test();

  module.studentView = studentView;
})(window);

page.base('');
page('/', landingView.initPage, landingCallback);
page('/form', formView.showForm);
page('/student', studentView.waiting);
page('/teacher', teacherCallback);
page();

function landingCallback() {
  $('ol').empty();
  $('#landing').show().siblings().hide();
};

function teacherCallback() {
  $('#teacher').show().siblings().hide();
  $('#current').hide();
  $('ol').empty();
  teacherView.post();
};

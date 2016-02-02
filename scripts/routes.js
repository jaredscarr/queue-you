page.base('');
page('/', landingView.initPage, landingCallback);
page('/form', formView.showForm);
page('/student', studentView.waiting);
page('/teacher', teacherView.showList);
page();

function landingCallback() {
  $('ol').empty();
  $('#landing').show().siblings().hide();
};

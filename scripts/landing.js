(function(module) {

  var landingView = {};

  landingView.initPage = function() {
    $('#landing').show().siblings().hide();
  };

  landingView.nav = function() {
    $('header').on('click', function(e) {
      e.preventDefault();
      $('ol').empty();
      $('#landing').show().siblings().hide();
    });
  };

  landingView.nav();
  landingView.initPage();

  module.landingView = landingView;
})(window);

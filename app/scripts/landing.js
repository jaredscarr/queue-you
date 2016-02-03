(function(module) {

  var landingView = {};

  landingView.initPage = function() {
    $('#landing').show().siblings().hide();
  };

  landingView.initPage();

  module.landingView = landingView;
})(window);

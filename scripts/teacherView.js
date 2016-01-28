// need to add to html:
// 1. a div inside teacher view below the
// ol tag that says current and has a ul tag with the id of chosen-one
// p tag that says click to remove.
(function(module) {

  var teacherView = {};
  var ref = new Firebase('https://queue-you.firebaseio.com/');
  var ref2 = new Firebase('https://queue-you.firebaseio.com/users/');
  var profileList = [];
  var keys = [];

  teacherView.dataSync = function() {
    ref2.on('value', function(snapshot) {
      console.log('yup');
      $('ol').empty();
      teacherView.post();
    }), function (errorObject) {
      console.log('nope');
    };
  };

  teacherView.showList = function() {
    $('#teacher-button').on('click', function(e) {
      teacherView.dataSync();
      e.preventDefault();
      $('#teacher').show().siblings().hide();
      $('#chosen-one').hide();
      $('#current').hide();
      // teacherView.post();
    });
  };

  teacherView.storagePull = function(){
    ref2.on('child_added', function(snapshot, prevChildKey){
      var newPost = snapshot.val();
      profileList.push(snapshot.val());
      keys.push(snapshot.key());
    });
  };

  teacherView.post = function(){
    for (var i = 0; i < profileList.length; i++) {
      $('ol').append('<li>Name: ' + profileList[i].name + '</br>Category: ' +
      profileList[i].issue + '</br>Description: ' +
      profileList[i].desc +'</br>' + '</br>' + '</li>');
      teacherView.removeFromdb();
      // teacherView.selected();
    }
  };

  teacherView.removeFromdb = function() {
    $('li').on('click', function(e) { //on button click remove from db
      // teacherView.dataSync();
      e.preventDefault();
      var $key = $(this).index();
      console.log($key);
      var deleteRef = new Firebase('https://queue-you.firebaseio.com/users/' + keys[$key]);
      deleteRef.remove();
      $(this).remove();
      console.log(this);
    });
  };
  // teacherView.removeFromdb = function() {
  //   $('#chosen').on('click', function(e) { //on button click remove from db
  //     // teacherView.dataSync();
  //     e.preventDefault();
  //     var $key = $(this).index();
  //     console.log($key);
  //     var deleteRef = new Firebase('https://queue-you.firebaseio.com/users/' + keys[$key]);
  //     deleteRef.remove();
  //     $(this).remove();
  //   });
  // };

  // teacherView.selected = function() {
  //   $('li').on('click', function(e) {
  //     teacherView.dataSync();
  //     e.preventDefault();
  //     var $chosen = $(this).clone();
  //     $(this).hide();
  //     $('#current').show();
  //     $('#chosen-one').append($chosen).show();
  //     $('#chosen-one li').attr('id', 'chosen');
  //     var $key = $(this).index();
  //     console.log($key);
  //     var deleteRef = new Firebase('https://queue-you.firebaseio.com/users/' + keys[$key]);
  //     deleteRef.remove();
  //     $(this).remove();
  //     teacherView.removeFromdb();
  //   });
  // };

  teacherView.showList();
  // teacherView.selected();
  teacherView.storagePull();
  module.teacherView = teacherView;
})(window);

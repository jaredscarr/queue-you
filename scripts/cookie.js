var track = {};
var userid ='';

track.storeLocal = function (userid) {
  localStorage.set('firebaseid', JSON.stringify(userid));
};

track.compareLocal = function (userid) {
  var id = userid;
  var compare = JSON.parse(localStorage.getItem(firebaseid));
  if (id === compare) {
    track.showView();
  }
};

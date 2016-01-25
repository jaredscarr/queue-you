var ref = new Firebase('https://queue-you.firebasio.com/');

function Profile(name, issue, desc) {
  this.name = name;
  this.issue = issue;
  this.desc = desc;
};

var getFormData = function() {
  $('#submit-button').on('click', function(e){
    $name
    $issue
    $desc
    var newUser = new Profile ($name, $issue, $desc);
    ref.push(newUser);
  })
};

var postButton = $('button');
//var commentButton = $('#comments')
var allPosts = [];

// On submitting the form, the user's post stacks
$(postButton).on('click', function () {

  // This is where we would empty $(.post-list)

    // Getting user input into HTML format
  var postHTML = $('#message').val() + '<span style="display:none;"><br>blue</span>' + '<br>Posted by: <strong> ' + $('#name').val() + '<strong><br><hr>';

  // I want this button to be bound to only its list item.

  var postComments = $('<a href="#comments" data-toggle="collapse" id="comment-button">comments </a>').find('#comment-button').click(function() {alert('click');}).end();

  // I can't let go of this test case!
  // var postComments = $('<a/>',
  //   {
  //       text: 'comment ',
  //       click: function () { alert('hi'); }
  //   });

    var post = $('<li><p>' + postHTML + '</p></li>').children().first().prepend(postComments).end();


  // This is where using allPosts might come in handy. We create a separate ID above using a for loop,
  // and then prepend in a loop down here. The ID would be for matching dropdowns.
    $('.post-list').prepend(post);

});

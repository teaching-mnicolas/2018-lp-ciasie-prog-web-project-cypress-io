if (email !== "") {
    $('#logged').html('You are logged in as ' + email);
    $('#login').hide();
    $('#logout').show();
} else {
    $('#logged').html('You are not logged in');
    $('#logout').hide();
    $('#login').show();
}
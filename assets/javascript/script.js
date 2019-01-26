var teams = ['Chicago Bulls', 'Tottenham Hotspur', 'Pittsburgh Steelers', 'Colorado Avalanche', 'Golden State Warriors', 'San Francisco Giants'];

console.log('js working');

function teamInfo() {
    var team = $(this).attr('data-name');
    var key = 'B1F06nTfUTYMBISSZxr268GfnDFn0UK7'
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + team + "&api_key=" + key + "&limit=10";
 

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response);

        $('<div id="created">').appendTo('#gifsList');

        $('button').on('click', function() {
        for (var i = 0; i < queryURL.length; i++) {
        var title = response.data[i].title;
        $('<p id="title">').appendTo('#created');
        $('#title').text(title);
        console.log(title);
        var gif = response.data[i].bitly_url;
        $('<p id="gif">').appendTo('#created');
        $('#gif').text(gif);
        console.log(gif);
        }
    })
    })
    
}
teamInfo();

function showButtons() {
    $('.teamList').empty();
    for (var i = 0; i < teams.length; i++) {
        var a = $('<button>'); 
        a.addClass('team');
        a.attr('data-name', teams[i]);
        a.text(teams[i]);
        $('.teamList').append(a);
    }

}


$('#add-team').on('click', function(event) {
    // console.log("click")
event.preventDefault();
var team = $('#team-input').val().trim();
console.log(team)
teams.push(team);
showButtons();
})

$(document).on('click', '.team', teamInfo);

showButtons();

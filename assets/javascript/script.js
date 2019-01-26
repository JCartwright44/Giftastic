var teams = ['Chicago Bulls', 'Tottenham Hotspur', 'Pittsburgh Steelers', 'Colorado Avalanche', 'Golden State Warriors', 'San Francisco Giants'];

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
    console.log("click")
event.preventDefault();
var class1 = 'team';
var team = $('#team-input').attr('class', class1).val();
console.log(team)
teams.push(team);
showButtons();
// console.log(teams)
})

showButtons();

console.log('js working');

$('.team').on('click', function(){
    event.preventDefault();
    console.log('click');
    var currTeam = $(this).attr('data-name').trim();
    currTeam = currTeam.replace(/\s/g, '+');
    console.log(currTeam);

    $('#gifsHere').html('');

    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + currTeam + '&api_key=B1F06nTfUTYMBISSZxr268GfnDFn0UK7&limit=10"'

    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            var gifDiv = $('<div>')

            var titleURL = response.data[i].title;
            var p = $('<p id="title">').text('Title: ' + titleURL)

            var ratingURL = response.data[i].rating;
            var q = $('<p id="rating">').text('Rating: ' + ratingURL)        

            var gifURL = response.data[i].bitly_url;
            var gifImage = $('<img>');
            gifImage.attr('src', gifURL)

            gifDiv.prepend(p);
            gifDiv.prepend(q);
            gifDiv.prepend(gifImage);
            $('#gifsHere').prepend(gifDiv);
        }

    })



})

// After I click on 'Enter', I can't click on the buttons on the right
// I am getting that Cross Orgin Read Blocking error again.
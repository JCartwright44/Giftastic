var teams = ['Chicago Bulls', 'Tottenham Hotspur', 'Pittsburgh Steelers', 'Colorado Avalanche', 'Golden State Warriors', 'San Francisco Giants'];

console.log('js working');

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

showButtons();

function addTeam() {
$('#add-team').on('click', function(event) {
    console.log("click")
event.preventDefault();
var class1 = 'team';
var team = $('#team-input').val();
console.log(team)
teams.push(team);
showButtons();
teamClick();
})
}

addTeam();



function teamClick(){
$('.team').on('click', function(){
    event.preventDefault();
    console.log('click');
    var currTeam = $(this).attr('data-name').trim();
    currTeam = currTeam.replace(/\s/g, '+');
    console.log(currTeam);

    if ($('#check').checked = true) {
    }else {
    $('#gifsHere').html('');
    }

    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + currTeam + '&api_key=B1F06nTfUTYMBISSZxr268GfnDFn0UK7&limit=12"'

    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            var gifDiv = $('<div class="teamShow">');

            var titleURL = response.data[i].title;
            var p = $('<p id="title">').text('Title: ' + titleURL);

            var ratingURL = response.data[i].rating;
            var q = $('<p id="rating">').text('Rating: ' + ratingURL.toUpperCase());        

            var gifURL = response.data[i].images.downsized_still.url;
            var gifStill = response.data[i].images.downsized_still.url;
            var gifAnimate = response.data[i].images.downsized_large.url;

            var gifImage = $('<img>');
            gifImage.attr('src', gifURL);
            gifImage.attr('data-still', gifStill);
            gifImage.attr('data-animate', gifAnimate);
            gifImage.attr('data-state', 'still');
            gifImage.attr('id', 'gif');
            gifImage.attr('width', '200px');



            gifDiv.prepend(gifImage);
            gifDiv.prepend(q);
            gifDiv.prepend(p);
  
            $('#gifsHere').prepend(gifDiv);






            $("#gif").on("click", function() {
                console.log('gifclick');
                var state = $(this).attr('data-state');
                console.log(state);
                if (state === 'still') {
                    $(this).attr('src', $(this).attr('data-animate'));
                    $(this).attr('data-state', 'animate');
                  } else {
                    $(this).attr('src', $(this).attr('data-still'));
                    $(this).attr('data-state', 'still');
                  }

              });

        }

    })

})
}

teamClick();

// After I click on 'Enter', I can't click on the buttons on the right



var queryURL1 = 'https://api.openbrewerydb.org/breweries?by_name=device&per_page=10';
console.log(queryURL1);
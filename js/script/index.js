// card array

const cardImages = ["assets/images/fish1.JPG", "assets/images/fish2.JPG", "assets/images/fish3.JPG", "assets/images/fish4.JPG", "assets/images/fish5.JPG", "assets/images/fish6.JPG", "assets/images/fish7.JPG", "assets/images/fish8.JPG", ];

const game = {};

// button start game

$('.start').click(startGame);

// card flip/click event listener

$('.game-container').on('click', '.active', function (event) {
    console.log($(this).data('val'));
    game.clicks++;
    $('#move-counter').text(game.clicks);
    game.pickedCards.push($(this));
    $(this).removeClass('.active');
    $(this).find('.card-back').hide();
    $(this).find('.card-front').show();

    if (game.pickedCards.length === 2) {
        // is it a match?
    }
})


// shuffle function


function shuffleArray(shuffle) {
    shuffle.sort(function () {
        return .5 - Math.random();
    })
}

// what happens when the button is clicked

function startGame() {
    console.log('start');
    $('.start').hide('.start');
    game.clicks = 0;

    // array to store the selected card

    game.pickedCards = [];

    // concat of the initial card array, makes things easier if I want to ammend anything later

    game.cardArray = cardImages.concat(cardImages);
    console.log(game.cardArray);
    shuffleArray(game.cardArray);
    $('.game-container').html('');
    $.each(game.cardArray, function (key, value) {
        console.log(key);
        console.log(value);
        let card = $('<div>');
        console.log(card);
        card.addClass('card active');
        card.data('cnt', key + 1);
        card.data('val', value);

        // cards

        let cardBack = $('<div>');
        cardBack.addClass('card-back playing-card');
        //$('.card-back').prepend($('<img src="assets/images/beach.JPG" alt="beach pic">'));
        card.append(cardBack);
        let cardFront = $('<div>');
        cardFront.addClass('card-front playing-card');
        //$('.card-front').prepend($('<img>', src: 'cardArray'));
        card.append(cardFront);
        // game container


        $('.game-container').append(card);
    })
}

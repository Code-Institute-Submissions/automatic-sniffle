// card array

const cardImages = ["assets/images/fish1.JPG", "assets/images/fish2.JPG", "assets/images/fish3.JPG", "assets/images/fish4.JPG", "assets/images/fish5.JPG", "assets/images/fish6.JPG", "assets/images/fish7.JPG", "assets/images/fish8.JPG", ];

const game = {};

// button start game

$('.start').click(startGame);

// what happens when the button is clicked

function startGame() {
    console.log('start');
    $('.start').hide();
    game.clicks = 0;

    // array to store the selected card

    game.pickedCards = [];

    // concat of the initial card array, makes things easier if I want to ammend anything later

    game.cardArray = cardImages.concat(cardImages);
    console.log(game.cardArray);
    $.each(game.cardArray, function (key, value) {
        console.log(key);
        console.log(value);
        let card = $('<div>');
        console.log(card);
        card.addClass('card');
        card.data('count', key + 1);
        card.data('val', value);

        // cards

        let cardBack = $('div');
        cardBack.addClass('.playing-card');
        cardBack.addClass('.card.back');

        let cardFront = $('div');
        cardFront.addClass('.playing-card');
        cardFront.addClass('.card-front');

        // game container

        $('.game-container').append(card);
    })
}

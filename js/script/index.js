// card array

const cardImages = ["assets/images/fish1.JPG", "assets/images/fish2.JPG", "assets/images/fish3.JPG", "assets/images/fish4.JPG", "assets/images/fish5.JPG", "assets/images/fish6.JPG", "assets/images/fish7.JPG", "assets/images/fish8.JPG", "assets/images/fish9.JPG", ];

const game = {};

// button start game

$('.start').click(startGame);

// card flip/click event listener

$('.game-container').on('click', '.active', function (event) {
    console.log($(this).data('val'));
    if (!game.stop) {
        game.clicks++;
        $('#move-counter').text(game.clicks);
        game.pickedCards.push($(this));
        $(this).removeClass('.active');
        $(this).find('.card-back').hide();
        $(this).find('.card-front').show();

        if (game.pickedCards.length === 2) {
            // is it a match?
            console.log(game.pickedCards);
            if (game.pickedCards[0].data('val') == game.pickedCards[1].data('val')) {
                game.stop = false;
                console.log('match');
                removeCards(game.pickedCards[0].data('val'));
                if (game.cardArray.length == 0) {
                    console.log('finis');
                }
            } else {
                game.stop = true;
                game.timer = setInterval(returnCard, 500);
            }
        }
    }
})

// remove the cards from the pickedCards array

function removeCards(val) {
    console.log(game.cardArray);
    game.cardArray = game.cardArray.filter(function (element) {
        return element != val;
    })
    console.log(game.cardArray);
}

// return card to back position

function returnCard() {
    console.log('not a match');
    flipBack(game.pickedCards[0]);
    flipBack(game.pickedCards[1]);
    clearInterval(game.timer);
    game.pickedCards = [];
    game.stop = false;
}

function flipBack(element) {
    element.addClass('.active');
    element.find('.card-back').show();
    element.find('.card-front').hide();
}


// shuffle function


function shuffleArray(shuffle) {
    shuffle.sort(function () {
        return .5 - Math.random();
    })
}

// what happens when the button is clicked

function startGame() {
    console.log('start');
    $('.start').hide();
    $('.reset').removeClass('.visible');
    game.clicks = 0;
    game.stop = false;

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
        cardBack.addClass('card-back playing-card active');
        $('.card-back').append($('<img src="assets/images/beach.JPG" alt="beach pic">'));
        card.append(cardBack);
        let cardFront = $('<div>');
        cardFront.addClass('card-front playing-card');

        // card front image

        $('.card-front').append('<img src=' + 'value' + '>');
        card.append(cardFront);

        // game container


        $('.game-container').append(card);
    })
}

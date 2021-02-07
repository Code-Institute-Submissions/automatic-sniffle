// card array

const cardImages = ["assets/images/fish1.JPG", "assets/images/fish2.JPG", "assets/images/fish3.JPG", "assets/images/fish4.JPG", "assets/images/fish5.JPG", ];

const game = {};

// access modal

const modal = document.getElementById('modal');

// access reset

const reset = document.querySelector('.reset');
const playAgain = document.querySelector('.again-btn');

// timer

const timer = document.querySelector('#timer');
let time;
let minutes = 0;
let seconds = 0;
let timeStart = false;

// start the timer once start has been pressed or reset

function timer() {
    time = setInterval(function () {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        // updating html
        timer.innerHTML = ' Time Elapsed: ' + minutes + ' Mins ' + seconds + ' Secs';
    }, 1000);
)
}

// stop the timer at the end

function timerStop() {
    clearInterval(time)
}

// button start game

$('.start').click(startGame);

// card flip/click event listener

$('.game-container').on('click', '.active', function (event) {
    console.log($(this).data('val'));
    if (!game.stop) {
        game.clicks++;
        $('#move-counter').text(game.clicks);
        game.pickedCards.push($(this));
        $(this).removeClass('active');
        $(this).find('.card-back').hide();
        $(this).find('.card-front').show();

        if (game.pickedCards.length === 2) {
            // is it a match?
            console.log(game.pickedCards);
            if (game.pickedCards[0].data('val') == game.pickedCards[1].data('val')) {
                game.stop = false;
                console.log('match');
                removeCards(game.pickedCards[0].data('val'));
                game.pickedCards = [];
                if (game.cardArray.length == 0) {
                    console.log('over');
                    displayModal();
                }
            } else {
                game.stop = true;
                game.timer = setInterval(returnCard, 500);
            }
        }
    }
});

// remove the cards from the pickedCards array

function removeCards(val) {
    console.log(game.cardArray);
    game.cardArray = game.cardArray.filter(function (element) {
        return element != val;
    });
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
    element.addClass('active');
    element.find('.card-back').show();
    element.find('.card-front').hide();
}



// shuffle function


function shuffleArray(shuffle) {
    shuffle.sort(function () {
        return '.5' - Math.random();
    });
}

// what happens when the start button is clicked

function startGame() {
    console.log('start');
    $('.start').hide();
    $('.reset').removeClass('visible');
    game.clicks = 0;
    timer();
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
        card.addClass('cards active');
        card.data('cnt', key + 1);
        card.data('val', value);

        // cards

        let cardBack = $('<img src="assets/images/beach.JPG" alt="beach pic">');
        cardBack.addClass('card-back active');
        card.append(cardBack);
        let cardFront = $('<img src=' + value + '>');
        cardFront.addClass('card-front');

        // card front image

        card.appendTo(cardFront);


        // game container


        $('.game-container').append(card);
    });
}



// display modal

function displayModal() {
    const modalClose = document.getElementsByClassName('close')[0];

    // winning modal

    modal.style.display = 'block';

    // close modal

    modalClose.onclick = function () {
        modal.style.display = 'none';
    };

    // close modal by clicking outside of window

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}

// reset button and play again

reset.addEventListener('click', resetAll);
playAgain.addEventListener('click', function () {
    modal.style.display = 'none';
    resetAll();
});

function resetAll() {
    game.clicks = 0;
    game.timer = 60;
    game.pickedCards = [];
    startGame();
}

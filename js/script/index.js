$(document).ready(function () {

    // card array

    const cardImages = ["assets/images/fish1.JPG", "assets/images/fish2.JPG", ];

    const game = {};

    // access modal

    const modal = document.getElementById('modal');


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


    // access reset

    const reset = document.querySelector('.reset');
    const playAgain = document.querySelector('.again-btn');

    // timer

    const timerCount = document.querySelector('.timer');
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
            timerCount.innerHTML = ' Time Elapsed: ' + minutes + ' Mins ' + seconds + ' Secs';
        }, 1000);
    }

    // stop the timer at the end

    function timerStop() {
        clearInterval(time);
    }

    // button start game

    $('.start').click(startGame);

    // card flip/click event listener

    $('.game-container').on('click', '.active', function (event) {
        console.log($(this).data('val'));
        if (!game.stop) {
            if (timeStart === false) {
                timeStart = true;
                timer();
            }
            game.clicks++;
            $('#move-counter').text(game.clicks);
            game.pickedCards.push($(this));
            $(this).removeClass('active');
            $(this).addClass('flip');
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
                        timerStop();
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
        element.removeClass('flip');
        element.find('.card-front').hide();
    }



    // shuffle function


    function shuffleArray(array) {
        let currentIndex = array.length,
            temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    // what happens when the start button is clicked

    function startGame() {
        console.log('start');
        $('.start').hide();
        $('.reset').removeClass('visible');
        game.clicks = 0;

        game.stop = false;
        // array to store the selected card

        game.pickedCards = [];

        // concat of the initial card array, makes things easier if I want to ammend anything later

        game.cardArray = cardImages.concat(cardImages);
        console.log(game.cardArray);
        shuffleArray(game.cardArray);
        for (let i = 0; i < shuffleArray.length; i++) {

            $('.game-container').html('');


            $.each(game.cardArray, function (key, value) {
                console.log(key);
                console.log(value);
                let card = $('<li>');
                console.log(card);
                card.addClass('cards active');
                card.data('cnt', key + 1);
                card.data('val', value);

                // cards

                const cardFront = document.createElement('img');
                cardFront.setAttribute('src', 'img/' + shuffleArray[i]);
                cardFront.setAttribute('alt', 'image of a fish');

                card.append(cardFront);


                // add the card to the container


                $('.game-container').append(card);

            });
        }
    }



    // reset button and play again

    reset.addEventListener('click', resetAll);
    playAgain.addEventListener('click', function () {
        modal.style.display = 'none';
        resetAll();
    });

    function resetAll() {
        // return clicks to 0
        game.clicks = 0;

        // return time to 0 and stop timer
        timerStop();
        timeStart = false;
        seconds = 0;
        minutes = 0;
        timerCount.innerHTML = ' Time Elapsed: 00:00';
        startGame();
    }
});

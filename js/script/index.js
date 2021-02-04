// card array

const cardImages = ["assets/images/fish1.JPG", "assets/images/fish1.JPG", "assets/images/fish2.JPG", "assets/images/fish2.JPG", "assets/images/fish3.JPG", "assets/images/fish3.JPG", "assets/images/fish4.JPG",
 "assets/images/fish4.JPG", "assets/images/fish5.JPG", "assets/images/fish5.JPG", "assets/images/fish6.JPG", "assets/images/fish6.JPG", "assets/images/fish7.JPG", "assets/images/fish7.JPG", "assets/images/fish8.JPG", "assets/images/fish8.JPG"];

const game = {};

$('.start').click(startGame);

function startGame() {
    console.log('start');
    $('.start').hide();
    game.clicks = 0;
    game.pickedCards = [];
    game.cardArray = cardImages.concat(cardImages);
    console.log(game.cardArray);
}

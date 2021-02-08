# automatic-sniffle aka Aquatic Snap 
##Milestone Project 2: Memory Card Game - https://olliemedley.github.io/automatic-sniffle/

This allowed me to demonstrate my ability with HTML, CSS, Bootstrap and my new found knowledge of JavaScript and JQuery. 

## UX:

### 1. Strategy

This is for children primarily or for people who just want to test their memory by using a memory card game. 

### 2. Scope

I wanted to build something that would span a single page and wouldn't inundate the user with a great deal of text, the idea of a memory game is already very intuitive and paired with the user being confronted with upturned cards it didn't seem necessary. 


### 3. Structure

The main aim with this site was to have everything placed intuitively in front of the user, and not introduce a great deal of change. 

I did this by using modals to interact with the user and JQuery to build the board. 

I also want everything to be responsive, so I used Bootstrap and flexbox to help with this. 

Initially I wanted to use HTML to build the board, however found that there would be too many moving parts and I wanted to build up my jQuery knowledge, this proved to be a challenge in a lot of ways. 

In the finished project the structure was a start button which led to the jQuery generating the board whilst the start button became a reset. 
Upon finishing the game the Congratulations modal appears and gives the option to play again and the clicks remain on screen until the first card is clicked and it resets. 

### 4. Skeleton

I used Balsamiq to build the wireframes for desktop, tablet and mobile device. 

xxxxxxxxxxxxxxx


### 5. Surface

Colors: 

I chose the colors based on beach type colors, given that the image on the otherside of the card is fish.  

Fonts:

I chose the fonts based on what seemed playful, but also legible at a quick glance. I wanted fonts that would stand out and complement eachother. So I went for Potta One and Poppins (Poppins I used to relay information to give it authority).

Imagery:

The images that I chose were based on colourful images of fish, I wanted it to be something that would catch a childs eye, but also I needed the images to be memorable enough in their own right. The back of the card was a CSS style that reminded me of the ocean, this was doen by: Laura Sage aka The Pixel Pixie https://codepen.io/ThePixelPixie/pen/dXwEqp

The Fish images were taken from https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Ftropical-fish-icons-set_4187135.htm%3Ffbclid%3DIwAR03pdgXNp3cle4mqFSDict3sAiNpYWhg1WLZ-cLhVZ38Zm4ZqrmHpGxu2U%23page%3D3%26query%3DOcean%26position%3D44&h=AT1Am51ZkpyztDRUimuhw2YYpuZ2w1btQVBZJ875BIzenf5skNz3bHhN56ehNZymwgD2WyTQbqvGtKdbA9o6G3OsrR15FoeBGe2CToWwkeOjDrIrp1YSNiNHfwx_VYmJxms7Nw
https://www.freepik.com/vectors/business Business vector created by macrovector - www.freepik.com

### User stories:

Below are user stories for visitors to the site.

- As a player, I want to be able to find the game easily
- As a player, I want the images to be memorable
- As a player, I want the game to be intuitive 
- As a player, I want to have the choice to play again
- As a player, I want it to be fun

### Wireframes: 

The only changes I made to the original design were the placement of the number of clicks and the timer. 

Please find the wireframes in the link below and the responsive screenshot 

https://github.com/OllieMedley/automatic-sniffle/tree/master/assets/wireframe
https://github.com/OllieMedley/automatic-sniffle/blob/master/assets/images/Responsive%20Screenshot.JPG

### Features

- 18 cards to choose from 
- Congratulatory modal with the option to play again 
- A timer displaying in Minutes and Seconds
- A click counter
- Reset button to restart the game
- Media query to help the responsive design
- 3D cards

### Features Left to Implement

- I'd like to add a feature that allows for usernames
- A difficulty modal
- A how to guide
- The card doens't quite flip how I'd like, the front becomes blank as it flips, I'd like to solve this. 

### Technologies Used
Languages:
-HTML
-CSS
-Javascript
-jQuery
-Bootstrap

### Libraries and Integrations: 
-Google fonts (for typography)
-FontAwesome (for the icons)
-Bootstrap (used for the header, jumbotron, grid layout and cards)
-jQuery https://jquery.com/


### Workspace: 
-Brackets.IO

-GitHub 

-Git

-Balsamiq

## Testing
### Validation
I used W3C validation for HTML, this brought up an error related to a bad value:

Error: Bad value start for attribute type on element input.
From line 40, column 17; to line 40, column 62 

I've corrected this. 
 
the errors that were found with Jigsaw validator related to Bootstrap Library and unknown vendor extensions. 

For JavaScript validation I used JSHint page:

Metrics
There are 17 functions in this file.

Function with the largest signature take 2 arguments, while the median is 0.

Largest function has 24 statements in it, while the median is 4.

The most complex function has a cyclomatic complexity value of 6 while the median is 1.

There are 15 warnings relating to ES6 and one for possibly confusing semantics. 


I used Lighthouse audits against mobile and desktop, mobile came out completely in the green, desktop I fell down on SEO which I will aim to solve later by adding a meta description. 

### Manual Testing

I have been testing from start to finish as well as making sure that my code follows best practice. 

I used breakpoints in Google Dev Tools to ensure that everything loaded in as it should, and to test any bugs that I had along the way. All of which is documented in the commits. 

I also used dev tools frequently to check the responsive nature of the site, going through the mobile and tablet options and changing orientation. I'm not too happy with the mobile portrait display, not sure how I would lay it out to be better though. 

I ensured with my jQuery that there were console.logs planted throughout so I could ensure that each function worked correctly. 

These testing behaviours went alongside myself and partner playing the game multiple times and ensuring it worked fully, clicking everywhere and trying to break it by leaving the timer running, trying to click the same card, clicking multiple cards in fast succession, we also made sure it was fun. 

### User Story Tests:

- As a player, I want to be able to find the game easily

The start button begins the jQuery that begins the game. 

https://github.com/OllieMedley/automatic-sniffle/blob/master/assets/images/startScreenShot.JPG

- As a player, I want the images to be memorable

I asked Neices and Nephews to select from a range of images before settling on the ones I chose. 

- As a player, I want the game to be intuitive 

There is a brief description of what the game is, the rest is standard for other games of its type from what I've seen on Google. I didn't want to change the norm unless I could improve on it. 

- As a player, I want to have the choice to play again

The reset button and the modal both have options to either restart or replay the game. I wanted to leave the reset button up there as you can leave the modal with everything restarting. I wanted the choice in multiple places. 

https://github.com/OllieMedley/automatic-sniffle/blob/master/assets/images/CongratsScreenshot.JPG

- As a player, I want it to be fun

My partner, neices and nephews tried the game on multiple occassions to test this, the children (who are between 5 and 11) played it again and again, as did my partner. 

Throughout the process I've kept these questions in mind, making sure that everything I wanted to achieve was kept simple and then compared the results across platforms using Dev Tools on Chrome. 

### Bugs: 

I had a number of bugs throughout, I changed my approach a number of times becuase of this. 

#### Bug 1

For a long time the click counter registered a click on the card-back img as being 2 clicks, this is why I built the card back using CSS. 

#### Bug 2

After incorrectly assigning the div value, all of the elements feel inside a single card 
       
       - let cardBack = $('div');
        - cardBack.addClass('playing-card').addClass('card-back');
        + let cardBack = $('<div>');
 
#### Bug 3

The cardFront wouldn't register in previous attempts, it was appended properly, as far as I could tell, to the card but refused to display. 

## Deployment
To write the code I used Brackets.IO 

All of the written code was pushed to the master branch of github repository.

I selected the master branch as a source file in the settings menu. 

Once selected, this publishes the project to GitHub Pages and displays the site URL.

There aren't any differences between the deployed version and the source. 

The code can be run locally through clone or download.

You can do this by opening the repository, clicking on the 'Code' button, and selecting either 'clone or download'.

HTTPS: https://github.com/OllieMedley/automatic-sniffle.git

Clone: gh repo clone OllieMedley/automatic-sniffle

### The site is published at https://olliemedley.github.io/automatic-sniffle/


## Credits
### Media

https://www.freepik.com/vectors/business Business vector created by macrovector - www.freepik.com

Laura Sage aka The Pixel Pixie https://codepen.io/ThePixelPixie/pen/dXwEqp

### Balsamiq
Used to create the wireframes

### Bootstrap
(used for responsive design)

### jQuery

### Acknowledgements

Shuffling cards: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

Modal help https://www.w3schools.com/howto/howto_css_modals.asp

Card flip help https://stackoverflow.com/questions/31132848/flip-cards-using-jquery-and-css

### Evaluation 

I believe the project fills the criteria of the design, it works and it's simple to understand and doesn't try to add anyhting superfluous to the site.

All of it comes with comments with descriptors of what it is meant for and there were manual tests used throughout, through Developer tools and console.logs. I would have loved to have used Jasmine testing, unfortunately I fell short on time having to rewrite most of the jQuery due to the card front not displaying and being too unfamilar with Jasmine to have figured out how to fix the issue whilst using it. This is something I will spend my time studying between now and my next project so that I can utilise TDD. 

I've really enjoyed gettingto grips with jQuery and will happily use this in the future. 

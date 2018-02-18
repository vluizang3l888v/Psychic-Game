/* First I will do my Variables*/
//.split('') =if an empty string ("") is used as the seperator, the string is split between each character.
//.split('') =the string in JavaScript allows you to store information within a string or an object. 
var ComputerAllowedtopick = 'abcdefghijklmnopqrstuvwxyz'.split('');
var magicWin = 0;
//the wins. starts at 0.
var magicLosses = 0;
//the losses. starts at 0.
var leftguess;
// will make a magical array with no stuff in it but when you press a key the computer will store the numbers inside here [ ? ? ? ? ? ].
var guessesSoFar;
// will make another magical array [ ? ? ? ?] & hold your guess. 
var userGuess;
var computerLETTER = '';
//this will hold computer letter.
// & now it's time for a function. 
// we need to reset game --> then makes a new computer letter and reset the guess words.
// GOBACK is my function. 
function GOBACK() {

        computerLetter = ComputerAllowedtopick[Math.floor(Math.random() * ComputerAllowedtopick.length)];
        // hold this letter computer = pick from the above ABC's[round to nearest whole number down(pick number between 0 & 1 () * view the ABC array and measure it.)];
        leftguess = 12;
        guessesSoFar = []; //computer hold them guesses inside this [box]
        userGuess = ''; //computer hold that letter you want player to guess. 
}

/*how will this work */

GOBACK();
//starts the game...

document.onkeyup = function (event) {
// this here will determine what key was pressed. 
        userGuess = event.key;

        // Check the user's guessdoc.
            //
            //
            ///
            ///
            ////
            ////
            /////
            /////

if (typeof userGuess === 'string') {  // IF FALSE IT SKIPS TO LINE 81......
        if ((userGuess.toLowerCase() === computerLETTER)) {
            numWins++;
            GOBACK();
        }
        else {
            leftguess--;
            if (leftguess> 0) {
                guessesSoFar.push(userGuess);
            } else {
                numLosses++;
                GOBACK();
            }
        }
        // Update HTML with variable values
        document.querySelector('#numWins').innerHTML = "" + magicWin;
        document.querySelector('#numLosses').innerHTML = "" + magicLosses;
        document.querySelector('#guessLeft').innerHTML = "" + leftguess;
        document.querySelector('#currentGuesses').innerHTML = guessesSoFar;
        document.querySelector('#userGuess').innerHTML = userGuess;
}
};


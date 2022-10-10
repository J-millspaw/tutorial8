// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;

let counter = 0;



function check() {
    counter = counter + 1
    
    // your code here.

    console.log("your code here!");
    let userGuess = document.querySelector('#guess').value;
    console.log(userGuess);
    userGuess = Number(userGuess);
    if (userGuess === secret) {
        console.log('You win!!')
        document.querySelector('#message').innerHTML =  'You Win!!'
        document.querySelector('#celebrate').className = ''
    } else if (userGuess < secret) {
        console.log('Too low')
        document.querySelector('#message').innerHTML =  'Too low!'
    } else if (userGuess > secret) {
        console.log('Too high')
        document.querySelector('#message').innerHTML =  'Too high!'
        }
        document.querySelector('#num-guesses').innerHTML = 'You took ' + counter + ' guess(es)!!'
    
        

    
}

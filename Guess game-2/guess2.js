var maximum_number = parseInt(prompt("Enter the maximum number"));

const random_number = Math.floor(Math.random()*maximum_number)+1;

while(!maximum_number){
   maximum_number = parseInt(prompt("Enter some valid number"));
}

let guess = prompt("Enter your first guess");
var attempt = 1;
while(parseInt(guess) !== random_number){
    attempt++;
    if(guess === 'q'){
        break;
    }
    if (guess > random_number) {
        guess = prompt("Too high! Enter a new guess:");
    } else if (guess < random_number) {
        guess = prompt("Too low! Enter a new guess:");
    } else {
        guess = prompt(`Your guess is ${guess}, which is not higher or lower, please guess a number value:`);
    }
}
if(guess==='q'){
    console.log("quiting the game");
}
else{
    console.log("You win");
    console.log(random_number);
    console.log(`You used ${attempt} attempts to guess the number`);
}
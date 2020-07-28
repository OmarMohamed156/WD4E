let secretNumber = 4;

let guess = prompt("Enter your guess!!");

Number(guess);

if (guess === secretNumber){
 console.log("you guessed it right")
}

else if(guess < secretNumber){
 alert("Sorry!!. lower the number");
}

else{
 alert("Sorry!!. raise the number");
}
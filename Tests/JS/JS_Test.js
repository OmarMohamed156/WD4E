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
 var num1 = -10;
 while (num1 < 19){
  console.log(num1);
  num1++;
 }

 var num2 = 10;
 while (num2 < 40 ) {
  if (num2 % 2 === 0) {
   console.log(num2);
  }
  num2++;
 }

 var num3 = 300;
 while (num3 < 333 ) {
  if (num3 % 2 !== 0) {
   console.log(num3);
  }
  num3++;
 }

 var num3 = 300;
 while (num3 < 333 ) {
  if (num3 % 2 !== 0) {
   console.log(num3);
  }
  num3++;
 }

 var num4 = 5;
 while (num4 < 50 ) {
  if (num4 % 5 === 0) {
   console.log(num4);
  }
  num4++;
 }

 let annoyMessage = prompt("Are we there yet?");
 while (annoyMessage.indexOf("yes") === -1 && annoyMessage.indexOf("yeah") === -1) {
  annoyMessage = prompt("Are we there yet?");
 }

 alert("yes, we made it..");
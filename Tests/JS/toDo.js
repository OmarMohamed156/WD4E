console.log("connected");

let todo =[];

let input = prompt("what do you want to do??");

while(input !== "quit"){

 if(input === "list"){
  console.log(todo);
 }
 
 else if(input === "new"){
  let newtoDo = prompt("Enter a new todo.");
  todo.push(newtoDo);
 }

 input = prompt("what do you want to do??");

}

console.log("Ok, you quit the app.");

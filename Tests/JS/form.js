var name = prompt("Enter your name");
if(name.length != 0){
document.write("Hello "+ name)
}
else{
    name = prompt("I wont repeat my self twice !!");
    document.write('Hello '+ name);
}

document.write("<br>"+document.baseURI)
var no = window.location;
document.write("<br>"+ no);
var width = window.innerWidth;
var height = window.innerHeight;
document.write("<br>"+width, "  "+ height);
var array = document.getElementsByTagName("p")
document.write("<br>"+ array.length)
console.log("hi there");

function displaydate(){
    document.getElementById('one').innerHTML = Date();
    console.log(Date());
}

function displayId(Element){
    console.log(Element.id);
}

var fruits = [" orange"," mango"," guava"];
function loadFruits(){
    document.getElementById("fruits").innerHTML = fruits;
}

function myFunction() {
    fruits.push(prompt("Enter your fruit"))
    document.getElementById("fruits").innerHTML = fruits;
}
function remove(){
    document.getElementById("fruits").innerHTML = fruits+ fruits.pop(fruits[fruits.length]);
}

let grades = [1,2,4,65,-12,7];
let sum = 0;
if(grades.length > 0){
    for(let index = 0 ; index <= grades.length; index++){
        sum+=grades[index];
    }
    document.write(sum/grades.length);
}

else{
    alert("Array is empty");
}

document.getElementById("second").innerHTML = "What does the Fox say?";

function check() {
    var email1 = document.getElementById('email_addr');
    var email2 = document.getElementById('email_repeat');
            if ( email1.value != email2.value) {
                 alert("The two emails must match!!");
       return false;
        }
}

function view(){
    if (document.getElementById('nick').checked){
        document.getElementById('n').style.display='inline';
        document.getElementById('n').setAttribute('required',true);
    }
    else{
        document.getElementById('n').removeAttribute('required')
        document.getElementById('n').style.display='none';
    }
}


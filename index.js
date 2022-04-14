'use-strict'
/* FIRST EXERCISE */

/* Triangle */
console.log("TRIANGLE");
console.log("It has no form of a triangle because the console.log gives a new line by default and it is not possible to cancel that, showing the triangle in the DOM could work, but all there excersises are designed to work in the comand console")
var i;
var j;
for (i = 0; i <= 5; i++ ){
    for ( j = 6-i; j <= 5; j++ ){
        console.log("*");
    }    
    console.log("");
}

/* Chessboard  */
console.log("CHESSBOARD");
var hash = ''
var size = 8

for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
        (i + j) % 2 ? hash += '#': hash += '_'
    }
    hash += '\n';
} 
console.log(hash);

/* SECOND EXERCISE */
/* Functions */
const min = function(num1, num2){
    if(num1<num2){
        return num1;
    }else{
        return num2;
    }
}

const recursion = function (num){
    if(num<100){
        console.log(num);
        num++;
        recursion(num);
    }else if(num == 100){
        console.log(num + "LIMIT")
    }else{
        console.log("Please give a number under 100");
    }
}

const findLetter = function (word, letter){
    var result = [];
    for(let i=0; i<word.length; i++){
        if(word[i] == letter){
            result.push(letter);
        }
    }
    return ("You have "+result.length+" letters "+letter+" in "+word);
}

const sumfunction = function(values){
    var result = 0;
    for(let i=0; i<values.length; i++){
        result = result + values[i];
    }
    return ("The sum of the values "+values+ " is = "+result);
}

const rangefunction = function(num1, num2){
    var result = [];
    for(let i=num1+1; i<=num2; i++){
        result.push(i);
    }
    return(result);
}

const reverseArray = function(value1, value2, value3, value4, value5){
    var inputArray = [value1,value2, value3, value4, value5];
    inputArray.reverse();
    return (inputArray);
}

const objectCreation = function(name, lastname, age){
    var respuestas = {
        'name': name,
        'lastname': lastname,
        'age': age
    }
    return respuestas;
}

const tryCatch = function (value){
    let a = 12, b = value
    try{
        if(b === 0){
            throw new Error('ERROR: The value shoud be different than 0');
        }
        console.log("The division of 12 / "+b+` is: ${(a/b)}`);
    }catch(e){
        console.log(e.message);
    }finally{
        console.log("The program has ended");
    }
}

//Card creation 
const DOM = document.getElementById("exampleDOM");
DOM.className="col";
const cardDOM = document.createElement('div');
cardDOM.className="card";
cardDOM.id = "card"
DOM.appendChild(cardDOM); 
const cardDOMCopy = document.getElementById("card");
const cardHeaderDOM = document.createElement("div");
cardHeaderDOM.className="card-header";
cardHeaderDOM.id ="card-header";
cardHeaderDOM.style.background = "#457b9d";
cardDOMCopy.appendChild(cardHeaderDOM);

//Card-Header creation 
const cardHeaderCopy = document.getElementById("card-header");
const cardHeaderH3 = document.createElement("h3");
const cardHeaderDiv = document.createElement("div");
cardHeaderH3.innerHTML = "DOM";
cardHeaderDiv.className = "card-subtitle mb-2";
cardHeaderDiv.id = "subtitle";
cardHeaderCopy.appendChild(cardHeaderH3);
cardHeaderCopy.appendChild(cardHeaderDiv);

//Card-subtitle creation 
const cardSubtitleCopy = document.getElementById("subtitle");
const cardSubtitle = document.createElement("p");
cardSubtitle.innerHTML = "Topic 8 from Basic block";
cardSubtitle.style.color = "white";
cardHeaderCopy.appendChild(cardSubtitle);

//Card-body creation 
const cardBodyCopy = document.getElementById("card");
const cardBody = document.createElement("div");
cardBody.className = "card-body";
cardBody.id = "body";
cardBodyCopy.appendChild(cardBody);

//Card-content creation 
const cardBodyContent = document.getElementById("body");
const cardContent = document.createElement("p");
cardContent.innerHTML = "<b>All this block was created using only Javascript DOM coding</b>";
cardBodyContent.appendChild(cardContent);

/* FORMS */
const form = document.getElementById("form");
const nameForm = document.getElementById("name");
const ageForm = document.getElementById("age");
const emailForm = document.getElementById("email");
const errorForm = document.getElementById("errorForm")
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const cities = ["Puebla", "Guadalajara", "CDMX","Monterrey","Sinaloa","Tlaxcala"];
const genders = ["Male", "Female", "Other"];

var cityForm = document.getElementById('cityForm');
var genderForm = document.getElementById('genderForm');

for (var i = 0; i<cities.length; i++){
    var opt = document.createElement('option');
    opt.value = cities[i];
    opt.innerHTML = cities[i];
    cityForm.appendChild(opt);
}

for (var i = 0; i<genders.length; i++){
    //Create different form-check
    var formCheck = document.createElement('div');
    formCheck.className = "form-check";
    formCheck.id = `form-check${i}`;
    genderForm.appendChild(formCheck);

    //Create inputs 
    var formCheckOption = document.getElementById(`form-check${i}`);
    var inp = document.createElement('input');
    inp.className = "form-check-input";
    inp.setAttribute('type','radio');
    inp.setAttribute('name','gender');
    inp.setAttribute('value',genders[i]);
    inp.setAttribute('id',genders[i]);

    //Create labels
    var inpTwo = document.createElement('label');
    inpTwo.className = `form-check-label${i}`;
    inpTwo.innerHTML = genders[i];
    formCheckOption.appendChild(inp);
    formCheckOption.appendChild(inpTwo); 
  }
  
/* Form validation */
form.addEventListener('submit', (e)=>{
    console.log(typeof(emailForm.value));
    let messages = [];
    if(nameForm.value === '' || nameForm.value == null){
        messages.push('Name fild is required');
    }
    if(ageForm.value <= 0 || ageForm.value == ''){
        messages.push('Age must be more than 0');
    }
    if(!emailForm.value.match(mailFormat)){
        messages.push('Email must have email format example@example.com')
    }
    if(messages.length>0){
        e.preventDefault()
        errorForm.innerText = messages.join('\n');
        errorForm.className="alert alert-danger";
        errorForm.role = "alert";
    }
});
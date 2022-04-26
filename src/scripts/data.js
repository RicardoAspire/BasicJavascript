'use-strict'

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

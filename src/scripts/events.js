'use-strict'

/* REGULAR EXPRESSIONS */
//Search text in a phrase
let text = "Test phrase with different words, you can try to find any of this words using regular expressions and exec method";
function regularExpression(value){
    let regExp = new RegExp(value);
    console.log(regExp.exec(text));
}

//Validate date format 
let date =  /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
function regularExpressionDate(value){
    return date.test(value);
};

/* MODULES */
function modules(name, age){
    const user = new UserModule(name,age);
    name(user);
    age(user);
}

/* EVENTS */
//Event listener 
const boxListennerDOM = document.getElementById("boxListenner");
boxListennerDOM.addEventListener("click", function(e){
    boxListennerDOM.style.background = "blue";
    alert("Clicked using event listener!");
});

//Event Object 
const boxObjectDOM = document.getElementById("boxObject");
boxObjectDOM.addEventListener("click", function(event){
    alert(event.timeStamp + "ms");
});

//Standard vs arrow 
const boxStandardDOM = document.getElementById("boxStandard");
const boxArrowDOM = document.getElementById("boxArrow");
boxStandardDOM.addEventListener("click", function(e){
    alert('Standard function');
    //this reffers to the actual div in a "standard function"
    console.log(this);
});
boxArrowDOM.addEventListener("click", e=>{
    alert('Arrow function');
    //this reffers to the global webpage in a "arrow function"
    console.log(this);
});

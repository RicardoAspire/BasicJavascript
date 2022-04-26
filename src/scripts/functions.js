'use-strict'
//import UserModule,{printName as name, printAge as age} from './advanced';

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
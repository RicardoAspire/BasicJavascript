'use-strict'
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






function fileValidation(){
    var fileInput = document.getElementById("file");
    fileInput.className = "btn btn-warning"
    var file = fileInput.value;
    var extensions =  /(\.jpg|\.jpeg|\.png|\.jfif)$/i;
    if(!extensions.exec(file)){
        alert("The file has an invalid type.");
        fileInput.value = "";
        return false;
    }else{
        if(fileInput.files && fileInput.files[0]){
            //File reader allows web aplications read asynchronously contents of files, it can only access to files that the user has explicitly selected in an input type ="file"
            var reader = new FileReader();
            reader.onload = function(e){
                document.getElementById('image').innerHTML = '<img src ="'+e.target.result+'"/>';
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}

/* HIGHER ORDER FUNCTIONS */
//Functions that received other functions as parameters, or return other functions as a result 
//Example 1 function asigned to a varibale 
let double = function(x){
    return x*2;
}

//Example 2 function that receives another function as input
let students = [
    {id:1, name:'Ricardo', status:'active'},
    {id:2, name:'Andrea', status:'active'},
    {id:3, name:'Omar', status:'inactive'},
    {id:4, name:'Magaly', status:'active'},
    {id:5, name:'Abril', status:'inactive'},
]
//If the student has an active status, Its added to activeStudents
let activeStudents = students.filter(function(students){
    return students.status === 'active';
});


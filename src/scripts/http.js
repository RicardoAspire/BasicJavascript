'use-strict'
/* FETCH API HTTP */
//GET
const userGet = document.getElementById('userGet');
const imageGet = document.getElementById('imageGet');
const idGet = document.getElementById('idGet');
const nameGet = document.getElementById('nameGet');
const emailGet = document.getElementById('emailGet');

function getRequest(){
    const url = `https://reqres.in/api/users/${userGet.value}`;
    fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
    .then(response => response.json())
    .then(data => {
        const dataGET = data.data;
        imageGet.setAttribute('src', dataGET.avatar); 
        idGet.innerHTML = "<b>The id is: </b>"+dataGET.id;
        nameGet.innerHTML = "<b>The name is: </b>"+dataGET.first_name;
        emailGet.innerHTML = "<b>The email is: </b>"+dataGET.email;
    })
}

//POST
const timePostResult = document.getElementById('timePostResult');
const namePostResult = document.getElementById('namePostResult');
const jobPostResult = document.getElementById('jobPostResult');
const namePOST = document.getElementById('namePOST');
const jobPOST = document.getElementById('jobPOST');
const submitPOST = document.getElementById('submitPOST');

submitPOST.onclick = function(event){
    var namePOSTvalue = namePOST.value;
    var jobPOSTvalue = jobPOST.value;
    event.preventDefault();

    fetch('https://reqres.in/api/users',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            name: namePOSTvalue,
            job: jobPOSTvalue
        })
    })
    .then(response => response.json())
    .then(data => {
        namePostResult.innerHTML = data.name
        jobPostResult.innerHTML = data.job
        timePostResult.innerHTML = data.createdAt
    });
}

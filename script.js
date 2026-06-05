function submitRequest() {

let name =
document.getElementById("name").value.trim();

let house =
document.getElementById("house").value.trim();

let street =
document.getElementById("street").value.trim();

let customerType =
document.getElementById("customerType").value;

let waste =
document.getElementById("waste").value;


// Validation

if(name === "" || house === "" || street === ""){

alert("Please fill all fields");

return;

}


// Request Object

let request = {

name: name,

house: house,

street: street,

customerType: customerType,

waste: waste,

status: "Pending",

date: new Date().toLocaleDateString()

};


// Existing Requests

let requests =
JSON.parse(localStorage.getItem("requests"))
|| [];

requests.push(request);


// Save

localStorage.setItem(
"requests",
JSON.stringify(requests)
);


// Success Message

document.getElementById("message")
.innerHTML =
"✅ Request Submitted Successfully!<br><br>🔔 Pickup will be scheduled shortly.";


// Clear Form

document.getElementById("name").value = "";

document.getElementById("house").value = "";

document.getElementById("street").value = "";

document.getElementById("customerType").selectedIndex = 0;

document.getElementById("waste").selectedIndex = 0;

}


// LOGIN FUNCTION

function login(){

let username =
document.getElementById("username")
.value
.trim()
.toLowerCase();

let password =
document.getElementById("password")
.value
.trim();

let role =
document.getElementById("role")
.value;


// ADMIN

if(role === "admin"){

if(

(username === "amar patil" &&
password === "12345678")

||

(username === "ravi kumar" &&
password === "admin123")

){

alert("Admin Login Successful");

window.location.href =
"admin.html";

}

else{

alert(
"Invalid Admin Username or Password"
);

}

}


// COLLECTOR

else if(role === "collector"){

if(

(username === "suresh" &&
password === "collect123")

||

(username === "mahesh" &&
password === "pickup123")

){

alert(
"Collector Login Successful"
);

window.location.href =
"collector.html";

}

else{

alert(
"Invalid Collector Username or Password"
);

}

}


// RESIDENT

else{

if(

(username === "rahul" &&
password === "user123")

||

(username === "priya" &&
password === "resident123")

){

alert(
"Resident Login Successful"
);

window.location.href =
"resident.html";

}

else{

alert(
"Invalid Resident Username or Password"
);

}

}

}
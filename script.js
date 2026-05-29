function submitRequest(){

let request = {

name:
document.getElementById("name").value,

house:
document.getElementById("house").value,

street:
document.getElementById("street").value,

waste:
document.getElementById("waste").value,

status:"Pending"

};

let requests =
JSON.parse(localStorage.getItem("requests"))
|| [];

requests.push(request);

localStorage.setItem(
"requests",
JSON.stringify(requests)
);

document.getElementById("message")
.innerHTML =
"✅ Request Submitted Successfully";

}
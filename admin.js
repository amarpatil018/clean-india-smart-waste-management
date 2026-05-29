let requests =
JSON.parse(localStorage.getItem("requests"))
|| [];

let total = requests.length;

let pending =
requests.filter(r =>
r.status==="Pending").length;

let completed =
requests.filter(r =>
r.status==="Completed").length;

document.getElementById("total")
.innerHTML = total;

document.getElementById("pending")
.innerHTML = pending;

document.getElementById("completed")
.innerHTML = completed;

let div =
document.getElementById("adminRequests");

requests.forEach((r,index)=>{

div.innerHTML += `

<div class="request-card">

<h3>${r.name}</h3>

<p>House : ${r.house}</p>

<p>Street : ${r.street}</p>

<p>Waste : ${r.waste}</p>

<p>Status :
<span class="status">
${r.status}
</span>
</p>

<button onclick="completeRequest(${index})">
Mark Completed
</button>

</div>

`;

});

function completeRequest(index){

requests[index].status =
"Completed";

localStorage.setItem(
"requests",
JSON.stringify(requests)
);

location.reload();

}
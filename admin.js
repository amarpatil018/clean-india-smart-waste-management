// Get requests from localStorage

let requests =
JSON.parse(localStorage.getItem("requests"))
|| [];

// Statistics

let total = requests.length;

let pending =
requests.filter(r =>
r.status === "Pending").length;

let completed =
requests.filter(r =>
r.status === "Completed").length;

// Update Dashboard Cards

document.getElementById("total")
.innerHTML = total;

document.getElementById("pending")
.innerHTML = pending;

document.getElementById("completed")
.innerHTML = completed;

// Show Requests

let div =
document.getElementById("adminRequests");

requests.forEach((r,index)=>{

div.innerHTML += `

<div class="request-card">

<h3>${r.name}</h3>

<p><b>House:</b> ${r.house}</p>

<p><b>Street:</b> ${r.street}</p>

<p><b>Waste:</b> ${r.waste}</p>

<p>
<b>Status:</b>

<span class="status">
${r.status}
</span>

</p>

<button onclick="startPickup(${index})">
🚛 Start Pickup
</button>

<button onclick="completeRequest(${index})">
✅ Complete Pickup
</button>

</div>

`;

});

// Start Pickup

function startPickup(index){

requests[index].status =
"In Progress";

localStorage.setItem(
"requests",
JSON.stringify(requests)
);

location.reload();

}

// Complete Pickup

function completeRequest(index){

requests[index].status =
"Completed";

localStorage.setItem(
"requests",
JSON.stringify(requests)
);

location.reload();

}

// AI Recommendation

let suggestion =

pending > 5

?

"🤖 High request volume detected. Deploy an additional collection vehicle."

:

"🤖 Normal request load. Current resources are sufficient.";

if(document.getElementById("aiSuggestion")){

document.getElementById("aiSuggestion")
.innerHTML = suggestion;

}
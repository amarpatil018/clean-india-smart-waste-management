let requests =
JSON.parse(
localStorage.getItem("requests")
) || [];

let collectorRequests =
document.getElementById("collectorRequests");

let history =
document.getElementById("history");


// Dashboard Counts

let pending =
requests.filter(
r => r.status === "Pending"
).length;

let progress =
requests.filter(
r => r.status === "In Progress"
).length;

let completed =
requests.filter(
r => r.status === "Completed"
).length;

document.getElementById("pendingCount")
.innerHTML = pending;

document.getElementById("progressCount")
.innerHTML = progress;

document.getElementById("completedCount")
.innerHTML = completed;


// Smart Route Suggestion

let routeMessage = "";

if(pending > 10){

routeMessage =
"🚛 High number of pickups today. Start from the busiest street first.";

}

else if(pending > 5){

routeMessage =
"📍 Moderate pickup load. Follow your normal collection route.";

}

else if(pending > 0){

routeMessage =
"✅ Low pickup load. One vehicle is sufficient.";

}

else{

routeMessage =
"🎉 No pending pickups today.";

}

document.getElementById("routeMessage")
.innerHTML = routeMessage;


// Active Requests

function loadRequests(){

collectorRequests.innerHTML = "";

requests.forEach((request,index)=>{

if(request.status !== "Completed"){

let statusClass = "";

if(request.status === "Pending"){

statusClass = "pending";

}
else{

statusClass = "progress";

}

collectorRequests.innerHTML += `

<div class="request-card">

<h3>${request.name}</h3>

<p><b>House:</b> ${request.house}</p>

<p><b>Street:</b> ${request.street}</p>

<p><b>Waste:</b> ${request.waste}</p>

<p><b>Date:</b> ${request.date}</p>

<p class="${statusClass}">
Status: ${request.status}
</p>

<button onclick="startPickup(${index})">
🚛 Start Pickup
</button>

<br><br>

<button onclick="completePickup(${index})">
✅ Complete Pickup
</button>

</div>

`;

}

});

}

loadRequests();


// Completed History

function loadHistory(){

history.innerHTML = "";

requests.forEach((request)=>{

if(request.status === "Completed"){

history.innerHTML += `

<div class="request-card">

<h3>${request.name}</h3>

<p><b>House:</b> ${request.house}</p>

<p><b>Street:</b> ${request.street}</p>

<p><b>Waste:</b> ${request.waste}</p>

<p class="completed">
✅ Pickup Completed
</p>

</div>

`;

}

});

}

loadHistory();


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

function completePickup(index){

requests[index].status =
"Completed";

localStorage.setItem(
"requests",
JSON.stringify(requests)
);

location.reload();

}
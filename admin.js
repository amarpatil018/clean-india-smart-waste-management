let requests =
JSON.parse(
localStorage.getItem("requests")
) || [];

let adminRequests =
document.getElementById("adminRequests");

/* ==========================
   DASHBOARD
========================== */

let total = requests.length;

let pending =
requests.filter(
r => r.status === "Pending"
).length;

let completed =
requests.filter(
r => r.status === "Completed"
).length;

document.getElementById("total").innerHTML =
total;

document.getElementById("pending").innerHTML =
pending;

document.getElementById("completed").innerHTML =
completed;

let efficiency = 0;

if(total > 0){

efficiency =
Math.round(
(completed / total) * 100
);

}

document.getElementById("efficiency").innerHTML =
efficiency + "%";

/* ==========================
   AI SUGGESTION
========================== */

let suggestion = "";

if(pending > 10){

suggestion =
"🚛 High request volume detected. Deploy extra collection vehicles.";

}
else if(pending > 5){

suggestion =
"📈 Moderate load. Increase collection frequency tomorrow.";

}
else if(pending > 0){

suggestion =
"✅ Current resources are sufficient for today's pickups.";

}
else{

suggestion =
"🎉 All pickup requests have been completed.";

}

document.getElementById(
"aiSuggestion"
).innerHTML = suggestion;

/* ==========================
   REQUESTS
========================== */

function loadRequests(){

adminRequests.innerHTML = "";

requests.forEach((request,index)=>{

let statusClass = "";

if(request.status === "Pending"){

statusClass = "pending";

}
else if(request.status === "In Progress"){

statusClass = "progress";

}
else{

statusClass = "completed";

}

adminRequests.innerHTML += `

<div class="request-card">

<h3>👤 ${request.name}</h3>

<p><b>🏠 House:</b> ${request.house}</p>

<p><b>📍 Street:</b> ${request.street}</p>

<p><b>🏢 Customer:</b> ${request.customerType || "House"}</p>

<p><b>♻ Waste:</b> ${request.waste}</p>

<p><b>📅 Date:</b> ${request.date}</p>

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

});

}

loadRequests();

/* ==========================
   STATUS UPDATE
========================== */

function startPickup(index){

requests[index].status =
"In Progress";

localStorage.setItem(
"requests",
JSON.stringify(requests)
);

location.reload();

}

function completePickup(index){

requests[index].status =
"Completed";

localStorage.setItem(
"requests",
JSON.stringify(requests)
);

location.reload();

}

/* ==========================
   LIVE CLOCK
========================== */

setInterval(()=>{

document.getElementById("datetime")
.innerHTML =
new Date().toLocaleString();

},1000);

/* ==========================
   PIE CHARTS
========================== */

function loadCharts(){

let wet = 0;
let dry = 0;

let houses = 0;
let hotels = 0;
let shops = 0;

requests.forEach(req=>{

if(req.waste === "Wet Waste"){
wet++;
}
else if(req.waste === "Dry Waste"){
dry++;
}

if(req.customerType === "House"){
houses++;
}
else if(req.customerType === "Hotel"){
hotels++;
}
else if(req.customerType === "Shop"){
shops++;
}

});

new Chart(

document.getElementById("wasteChart"),

{
type:"pie",

data:{

labels:[
"Wet Waste",
"Dry Waste"
],

datasets:[{

data:[
wet,
dry
]

}]

}

}

);

new Chart(

document.getElementById("customerChart"),

{
type:"pie",

data:{

labels:[
"Houses",
"Hotels",
"Shops"
],

datasets:[{

data:[
houses,
hotels,
shops
]

}]

}

}

);

}

loadCharts();
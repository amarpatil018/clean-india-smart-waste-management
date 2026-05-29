let requests =
JSON.parse(localStorage.getItem("requests"))
|| [];

document.getElementById("totalPickups")
.innerHTML = requests.length;

document.getElementById("completedPickups")
.innerHTML =
requests.filter(r =>
r.status==="Completed").length;

document.getElementById("pendingPickups")
.innerHTML =
requests.filter(r =>
r.status==="Pending").length;

let div =
document.getElementById("collectorList");

requests.forEach(r=>{

div.innerHTML += `

<div class="request-card">

<h3>📍 ${r.street}</h3>

<p>House : ${r.house}</p>

<p>Waste : ${r.waste}</p>

<p>Status :
<span class="status">
${r.status}
</span>
</p>

</div>

`;

});

function startRoute(){

document.getElementById("routeStatus")
.innerHTML = `

<div class="request-card">

<h2>🟢 Route Started</h2>

<p>Current Area : MG Road</p>

<p>Next Pickup : House 101</p>

<p>Estimated Time : 10 Min</p>

</div>

`;

}
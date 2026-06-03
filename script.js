function submitRequest() {

    let name =
    document.getElementById("name").value.trim();

    let house =
    document.getElementById("house").value.trim();

    let street =
    document.getElementById("street").value.trim();

    let waste =
    document.getElementById("waste").value;

    // Validation

    if(name === "" || house === "" || street === ""){

        alert("Please fill all fields");

        return;
    }

    // Create Request Object

    let request = {

        name: name,

        house: house,

        street: street,

        waste: waste,

        status: "Pending",

        date: new Date().toLocaleDateString()

    };

    // Get Existing Requests

    let requests =
    JSON.parse(
        localStorage.getItem("requests")
    ) || [];

    // Add New Request

    requests.push(request);

    // Save Back

    localStorage.setItem(
        "requests",
        JSON.stringify(requests)
    );

    // Success Message

    document.getElementById("message")
    .innerHTML =

    "✅ Request Submitted Successfully!<br><br>" +

    "🔔 Pickup will be scheduled shortly.";

    // Clear Form

    document.getElementById("name").value = "";

    document.getElementById("house").value = "";

    document.getElementById("street").value = "";

    document.getElementById("waste").selectedIndex = 0;

}


    console.log(username);
    console.log(password);

 if(

(username === "rahul" &&
password === "user123")

||

(username === "priya" &&
password === "resident123")

){

alert("Resident Login Successful");

window.location.href =
"resident.html";

}
else{

alert(
"Invalid Resident Username or Password"
);

}

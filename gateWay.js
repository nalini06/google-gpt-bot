document.getElementById("start-btn").addEventListener("click", function() {
    // Send a request to the server to trigger the Node.js application
    const meetingLink = document.getElementById("google-meetinglink").value;
    console.log("clicked the button " + meetingLink);
    fetch("/run-node-app", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: meetingLink})
    }).then(function(response) {
        if (response.ok) {
            console.log("Node app started successfully");
            
            
        } else {
            console.error("Failed to start Node app");
        }
    })
    .catch(function(error) {
        console.error("Error:", error);
    });
});
//import { GPTIntegrator } from "../gptIntegration.js"

var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var content = ''

recognition.continuous = true

recognition.onresult = function(event){
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript
    content += transcript
}

$("#mic").click(function(event){
    if(content.length > 0 || content != ''){
        content = '';
    }
        

        fetch("/run-feedback-app", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        })

        setTimeout(function(){
           recognition.start()
        }, 3000)
      
        setTimeout(function(){
   
            const userReq = content
        console.log("mic is on, processing " + userReq);
        fetch("/run-gptInt-app", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: userReq})
        }).then(function(response) {
            if (response.ok) {
                console.log("Node app started successfully");
                recognition.stop()
                content = '' 
            } else {
                console.error("Failed to start Node app");
            }
        })
        .catch(function(error) {
            console.error("Error:", error);
        });

        }, 10000)
        recognition.stop()
        
})
    


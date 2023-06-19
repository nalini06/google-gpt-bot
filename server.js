import express from "express";
import { spawn }  from "child_process";
import bodyParser from "body-parser";
import { GoogleBot } from "./googleBot.js";
import { GPTIntegrator } from "./gptIntegration.js";
import say from "say";
import serverless from "serverless-http"


const router = express.Router();
const app = express();
const port = 3000;

app.use(express.static("./public"));
app.use(bodyParser.json());



app.get("/health", (req,res)=>{
    res.send("Google bot server is running");
})

app.post("/run-node-app", (req, res) => {
    // Spawn a child process to run your Node.js application
    
    const meetingLink = req.body.text;
    console.log("Received Meeting Link: " +meetingLink);
    
    const instance = new GoogleBot()

    instance.joingoogleMeeting(meetingLink)

    // Event handlers for the child process

    res.sendStatus(200);
});



app.post("/run-gptInt-app", (req, res) => {
    // Spawn a child process to run your Node.js application
    
    const Userreq = req.body.text;
    console.log("Received req Link: " + Userreq);
    if(!Userreq.length){
        console.log("Please try again")
        say.speak("No Input given, stopped listening")
        res.send(400)
    }else{
        const instance = new GPTIntegrator()

    instance.runPrompt(Userreq)
      
    // Event handlers for the child process

    res.sendStatus(200);
    }
    
});


app.post("/run-feedback-app", (req, res) => {
    // Spawn a child process to run your Node.js application
     say.speak("Please speak, Im Listening") 
});



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

export default serverless(app);


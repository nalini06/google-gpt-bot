# google-gpt-bot

Using JavaScript and NodeJS (Puppeteer module), this script automates signing in to Google in extra stealth, navigates to Google Meet, turns off camera and microphone before joining the meeting.
This bot can also listen to the voice, and convert it to text.
Generated text will be sent to chat gpt though openai api, and then generated response will be converts to speech.

# How it works?
   - 1.Working of speech to text
   
     Here I'm using webkitSpeechRecogniion which is inbuilt library of javascipt, when click the ask button, the click triggers the microphone, and collects text that came from speech.
     This text will be sent to sever.js through api call, then speech recoginition stops.
   - 2.Generating Response from openai
  
     The request which came from html will contain the question asked by user, this quesition will sent to openai through api provided by open-ai, to the AI model "text-davinci-003"
   - 3.Text to speech
   
     I used "say" library from "say", this had function .speak("Text that you want to convert to speech").
  
  - If user wants to ask another question he just need to tap ask button again.

Currently deployed link is not working, node.js application is showing some error in render deploy enviorment. To work text to speech, "festival" library should in enviorment, that resource is in local machines, but not able to download into render deploy enviorment with out subscription.

 
 
 
       
     




import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import express from "express";
import spawn from "child_process";
import {Configuration, OpenAIApi} from "openai";
import say from "say";
import { GPTIntegrator } from "./gptIntegration.js"


export class GoogleBot{

   
   joingoogleMeeting(meetingLink){
  
    var stringArr = meetingLink.split('/');
    var meetingCode = stringArr[stringArr.length-1];  
    console.log("Meeting code is : "+ meetingCode);  

    puppeteer.use(StealthPlugin());
    (async () => {
        const browser = await puppeteer.launch({
            product: 'chrome',
            headless: false,
            args: ["--disable-notifications", "--mute-audio", "--enable-automation"],
            ignoreDefaultArgs: true
        });
    
        // going to sign-in page
        const page = await browser.newPage();
        const navigationPromise = page.waitForNavigation();
        await page.goto("https://accounts.google.com/");
    
        const context = browser.defaultBrowserContext();
        await context.overridePermissions(
            "https://meet.google.com/", ["microphone", "camera", "notifications"]
        );
    
        await navigationPromise;
    
        // typing out email
        await page.waitForSelector('input[type="email"]');
        await page.click('input[type="email"]');
        await navigationPromise;
        await page.keyboard.type(`gnp.prakash0605@gmail.com`, { delay: 300 });  // replace XXXXX with your original email, before the @gmail.com
        
        await page.keyboard.press('Enter');
    
        await page.waitForSelector("#identifierNext");
        await page.click("#identifierNext");
    
        // typing out password
        await page.waitForTimeout(3500);
        await page.keyboard.type(`Nalini@12345`, { delay: 200 });  // replace YYYYY with your original password
        
        await page.keyboard.press('Enter');
        await navigationPromise;
    
        // going to Meet after signing in
        await page.waitForTimeout(2500);
        await page.goto("https://meet.google.com/");
        await page.waitForSelector('input[type="text"]');
        await page.click('input[type="text"]');
        await page.waitForTimeout(1000);
        await page.keyboard.type(meetingCode, { delay: 200 });  // replace aaa-bbbb-ccc with the required Google Meet Code
        

        await page.keyboard.press('Enter');
        await navigationPromise;
        await page.keyboard.press('Enter');
    
        await page.waitForTimeout(8000);
        await page.keyboard.down('ControlLeft');
        await page.keyboard.press('KeyE');
        await page.keyboard.up('ControlLeft');
        await page.waitForTimeout(2000);
  
        await page.waitForTimeout(1000);
        await page.keyboard.down('ControlLeft');
        await page.keyboard.press('KeyD');
        await page.keyboard.up('ControlLeft');
        await page.waitForTimeout(2000);

        var i;
    for (i=1; i<=7; i++) {
        await page.keyboard.press('Tab');
        await page.waitForTimeout(800);
    }
    await page.keyboard.press('Enter');
    await navigationPromise;
    })();
    
  }
    
}











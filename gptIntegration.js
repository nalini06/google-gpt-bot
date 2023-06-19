import {Configuration, OpenAIApi} from "openai";
import say from "say";

const config = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(config);

export class GPTIntegrator{

         runPrompt = async (userRequest) =>{
        
        const prompt = userRequest;
    
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 2048,
            temperature: 1
        })
        console.log(response.data.choices[0].text);
        say.speak(response.data.choices[0].text);
    };

}


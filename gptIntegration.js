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


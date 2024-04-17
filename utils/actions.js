'use server'
import { currentUser } from "@clerk/nextjs"
import axios from "axios"
import OpenAI from "openai"

const openAi = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export const generateChatResponse = async (chatMessages)=>{
    // try{
    //     const response = await openAi.chat.completions.create({
    //         messages:[
    //             {role:'system',content:'you are a helpful assistant'},
    //             ...chatMessages,
    //         ],
    //         model: 'whisper-1',
    //         temperature: 0
    //     })
        
    //     return response.choices[0].message;
    // }
    // catch (error){
        
    //     return null;
    // }
    
const options = {
    method: 'POST',
    url: 'https://api.edenai.run/v2/text/chat',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYTkxZDliMGItOWQ5Ni00YzBmLTkyOTYtNjYzN2I4YTkyZDI5IiwidHlwZSI6ImFwaV90b2tlbiJ9.TWK-na3U7Ngw08r9vrTW4f54-off5ga9SHE4WU-xNNI'
    },
    data: {
      response_as_dict: true,
      attributes_as_list: false,
      show_original_response: false,
      temperature: 0,
      max_tokens: 1000,
      providers: 'google',
      text: chatMessages.message
    }
  };
  
  try {
   const response =  await axios.request(options)
   console.log(response.data.google);
   return response.data.google
  } catch (error) {
    return null
  }
    
}


export const generateTourResponse = async ({city, country})=>{
// the query which will be sent to the ai and the response will be in the object form
    const query = `Find a exact ${city} in this exact ${country}.
If ${city} and ${country} exist, create a list of things families can do in this ${city},${country}. 
Once you have a list, create a one-day tour. Response should be  in the following JSON format: 
{
  "tour": {
    "city": "${city}",
    "country": "${country}",
    "title": "title of the tour",
    "description": "short description of the city and tour",
    "stops": [{stop:"stop name",paragraph:"paragraph about the stop"},{stop:"stop name",paragraph:"paragraph about the stop"},{stop:"stop name",paragraph:"paragraph about the stop"}]
  }
}
"stops" property should include only three stops.
If you can't find info on exact ${city}, or ${city} does not exist, or it's population is less than 1, or it is not located in the following ${country},   return { "tour": null }, with no additional characters.`;


const options = {
    method: 'POST',
    url: 'https://api.edenai.run/v2/text/generation',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYTkxZDliMGItOWQ5Ni00YzBmLTkyOTYtNjYzN2I4YTkyZDI5IiwidHlwZSI6ImFwaV90b2tlbiJ9.TWK-na3U7Ngw08r9vrTW4f54-off5ga9SHE4WU-xNNI'
    },
    data: {
      response_as_dict: true,
      attributes_as_list: false,
      show_original_response: false,
      temperature: 0,
      max_tokens: 1000,
      text: query,
      providers: 'openai'
    }
  };
  
  try {
    const {data} = await axios.request(options)
    return data.openai.generated_text
  } catch (error) {
    return null
  }

    // try {
    //     const res = await openAi.chat.completions.create({
    //         messages: [
    //             {role:'system',content:'you are a tour guide'},
    //             {role:'user',content: query }
    //         ],
    //         model:'gpt-3.5-turbo',
    //         temperature:0
    //     })
    //     const tourData = JSON.parse(res.choices[0].message.content)
    //     //if the ai could not find the city or country
    //     if(!tourData.tour){
    //         return null
    //     }
    //     return tourData.tour
    // } catch (error) {
    //     console.log(error);
    //     return null;
    // }
}
export const generateTourImage = async ({city,country}) => {
    const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=`;
    const {data} = await axios.get(`${url}${country}-${city}`)
    return data

}

// 
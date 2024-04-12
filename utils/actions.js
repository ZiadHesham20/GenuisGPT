'use server'

import { PrismaClient } from '@prisma/client';
import OpenAI from "openai"

const openAi = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export const generateChatResponse = async (chatMessages)=>{
    try{
        const response = await openAi.chat.completions.create({
            messages:[
                {role:'system',content:'you are a helpful assistant'},
                ...chatMessages,
            ],
            model: 'gpt-3.5-turbo',
            temperature: 0
        })
        
        return response.choices[0].message;
    }
    catch (error){
        return null;
    }
}

export const getExistingTour = async ({city,country})=>{
    return null;
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

    try {
        const res = await openAi.chat.completions.create({
            messages: [
                {role:'system',content:'you are a tour guide'},
                {role:'user',content: query }
            ],
            model:'gpt-3.5-turbo',
            temperature:0
        })
        const tourData = JSON.parse(res.choices[0].message.content)
        //if the ai could not find the city or country
        if(!tourData.tour){
            return null
        }
        return tourData.tour
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const createNewTour = async ({city, country}) => {
    return null;
}




 
const prisma = new PrismaClient();
 
export default async function prismaExample() {
  const newUser = await prisma.user.create({
    data: {
      name: 'Elliott',
      email: 'xelliottx@example-user.com',
    },
  });
 
  const users = await prisma.user.findMany();
}
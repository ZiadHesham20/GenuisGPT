'use client'
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from 'react'
import { IoSend } from "react-icons/io5";
import {useMutation} from '@tanstack/react-query'
import { generateChatResponse } from '@/utils/actions';
import { SiOpenaigym } from "react-icons/si";
import toast from 'react-hot-toast'

export default function Chat() {
    const [text, setText] = useState("") //   --> used to save the messages that i have entered to the input
    const [messages, setMessages] = useState([]) //  --> used to save all the messages whether i entered or the response from the ai
    const {user} = useUser();

    //  useQuery is used when fetching data (get methods)
    //  useMutation is used when i want to edit,add,delete any data from server
    // const {mutate,isPending,data} = useMutation({    
    //     mutationFn:(query)=>generateChatResponse(query), // here i call the mutation function which i created in the action file (generateChatResponse)
    //     onSuccess:(data)=>{
    //         // if(data){
    //         //     console.log(data);
    //         //     setMessages((prev)=>[...prev,data]);
    //         // }
           
    //         //     return ;
    //         console.log(messageResponse);
    //             setMessages((prev)=>[...prev,data]);
            
    //     }
    // })

    const {mutate,isPending} = useMutation({
        mutationFn: async(query)=>{
          const response = await generateChatResponse(query)
          if(response){
            console.log(response.message[1]);
            setMessages((prev)=>[...prev,response.message[1]]);
            return response
          }
          toast.error('error occured')
          return null
        }
      })


    function getText(e){
        setText(e.target.value)
        
    }
    
    // on submitting my message it will pass the query within it the text that i entered to the mutate function then 
    // it will set the messages with the previous messages and the new message then the value of text will be set empty again
    const handleSubmit = (e) => {
        e.preventDefault();
        const query = {role: 'user', message:text}
        mutate(query)
        setMessages((prev)=>[...prev,query]);
        setText('')
        
    }
useEffect(() => {
  text == ''? document.getElementById('sendButton').classList.add('text-slate-300'):document.getElementById('sendButton').classList.remove('text-slate-300')
}, [text])


    return (
        <div className=' min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]'>
            <div className="lg:w-3/4  mx-auto">
                {messages.map(({role,message},idx)=>{
                    // user message
                    const avatar = role == 'user'?
                       <div className="lg:ps-16 avatar items-center">
                    <div className="w-10 rounded-full">
                      <img src={user.imageUrl} />
                    </div>
                    <p className="ms-3 text-sm">{user.fullName}</p>
                  </div>
                  // ai message           
                    :<>
      <div className="avatar lg:ps-16 items-center">
      <SiOpenaigym id='logo'  className='w-10 h-10 rounded-badge text-base-300 p-2' />
                    <p className="ms-3 text-sm">GPTGenius</p>
                  </div>
                    </>;
                    const bcg = role == 'user'? 'bg-base-100' : 'bg-base-100'
                    return <div key={idx} className={`${bcg} py-4 px-8 text-xl leading-relaxed `}>
                        <span className='mr-4'>{avatar}</span>
                        <p className='max-w-3xl lg:ps-24 text-lg '>{message}</p>
                       
                    </div>
                })}
                {isPending?<>
                  <div className="avatar ps-8 lg:ps-24 items-center pt-4">
      <SiOpenaigym id='logo'  className='w-10 h-10 rounded-badge text-base-300 p-2' />
                    <p className="ms-3 text-sm">GPTGenius</p>
                  </div>
                  <div className="chat chat-start">
  <div className="chat-bubble ms-16 lg:ms-32 bg-base-300"><span className="loading loading-bars loading-sm"></span></div>
</div>

                </>:null}
                

            </div>
            <form onSubmit={handleSubmit} className='w-full lg:w-3/4 m-auto pt-12'>
                <div className='join w-full'>
                    <input type='text' 
                    placeholder='Message GeniusGPT' 
                    className='input bg-base-200 join-item w-full'
                    value={text}
                    required
                    onChange={getText} />
                    <button className='btn join-item text-slate-300' id="sendButton" disabled={isPending}>
{isPending?'Generating...':<>Send <IoSend /></>}
</button>
                </div>
            </form>
        </div>
    )
}

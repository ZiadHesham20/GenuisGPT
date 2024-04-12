'use client'
import { useUser } from "@clerk/nextjs";
import React, { useState } from 'react'
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
    const {mutate,isPending} = useMutation({    
        mutationFn:(query)=>generateChatResponse([...messages,query]), // here i call the mutation function which i created in the action file (generateChatResponse)
        onSuccess:(data)=>{
            if(!data){
                toast.error('Something went wrong...')
                return;
            }
            setMessages((prev)=>[...prev,data]);
        }
    })
    
    // on submitting my message it will pass the query within it the text that i entered to the mutate function then 
    // it will set the messages with the previous messages and the new message then the value of text will be set empty again
    const handleSubmit = (e) => {
        e.preventDefault();
        const query = {role: 'user', content:text}
        mutate(query)
        setMessages((prev)=>[...prev,query]);
        setText('')
    }


    return (
        <div className=' min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]'>
            <div>
                {messages.map(({role,content},idx)=>{
                    // user message
                    const avatar = role == 'user'?
                       <div className="avatar items-center">
                    <div className="w-10 rounded-full">
                      <img src={user.imageUrl} />
                    </div>
                    <p className="ms-3 text-sm">{user.fullName}</p>
                  </div>
                  // ai message           
                    :<>
      <div className="avatar items-center">
      <SiOpenaigym id='logo'  className='w-10 h-10 rounded-badge text-base-300 p-2' />
                    <p className="ms-3 text-sm">GPTGenius</p>
                  </div>
                    </>;
                    const bcg = role == 'user'? 'bg-base-200' : 'bg-base-100'
                    return <div key={idx} className={`${bcg} py-4 -mx-8 px-8 text-xl leading-relaxed border-b border-base-300`}>
                        <span className='mr-4'>{avatar}</span>
                        <p className='max-w-3xl ms-14'>{content}</p>
                    </div>
                })}
                {isPending?<>
                    <div className="avatar items-center py-4">
      <SiOpenaigym id='logo'  className='w-10 h-10 rounded-badge text-base-300 p-2' />
                    <p className="ms-3 text-sm">GPTGenius</p>
                  </div>
<div className="chat chat-start">
  <div className="chat-bubble ms-14 bg-base-300"><span className="loading loading-bars loading-sm"></span></div>
</div>

                </>:null}

            </div>
            <form onSubmit={handleSubmit} className='max-w-4xl pt-12'>
                <div className='join w-full'>
                    <input type='text' 
                    placeholder='Message GeniusGPT' 
                    className='input input-bordered join-item w-full'
                    value={text}
                    required
                    onChange={(e) => setText(e.target.value)} />
                    <button className='btn btn-outline join-item' disabled={isPending}>
{isPending?'please wait...':<>Send <IoSend /></>}
</button>
                </div>
            </form>
        </div>
    )
}

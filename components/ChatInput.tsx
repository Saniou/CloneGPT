'use client'

import { db } from '@/firebase'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { collection, serverTimestamp, addDoc } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useState, FormEvent } from 'react'
import { toast } from 'react-hot-toast'

type Props = {
  chatId: string
}

function ChatInput({ chatId }: Props) {

  const [prompt, setPrompt] = useState("")
  const { data: session } = useSession()

  const model = "text-davinci-003"

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!prompt) return

    const input = prompt.trim()
    setPrompt("")

    const message: Message = {
      text: input,
      createAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Felix`,
      }
    }
    await addDoc(
      collection(
        db, 
        'users', 
        session?.user?.email!, 
        'chats', 
        chatId, 
        'messages'
        ),
        message
    )

    const notification = toast.loading("Chat is thinking...")

    await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: input, 
        chatId, 
        model, 
        session,
      })
    }).then(() => {
      toast.success("Chat has response", {
        id: notification,
      });
    })
  };

  return (
    <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm'>
      <form
        className='p-5 space-x-5 flex' onSubmit={sendMessage}>
        <input
          type="text"
          className='bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300'
          disabled={!session}
          placeholder='Type your question here ...'
          onChange={e => setPrompt(e.target.value)}
          value={prompt}
        />
        <button
          className='bg-[#9211a3] hover:opacity-50 hover:cursor-pointer text-white font-bold px-4 py-2 rounded-full disabled:cursor-not-allowed disabled:bg-gray-300'
          disabled={!session || !prompt}
          type="submit"
        >
          <PaperAirplaneIcon className='h-4 w-4 -rotate-45' />
        </button>
      </form>

      <div>
        <></>
      </div>

    </div>
  )
}

export default ChatInput
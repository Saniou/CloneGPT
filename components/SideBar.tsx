'use client'

import React from 'react'
import NewChat from './NewChat'
import ChatRow from './ChatRow'
import { useSession, signOut } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from 'firebase/firestore'
import { db } from '@/firebase'

function SideBar() {

  const { data: session } = useSession()
  
  const [chats, loading, error] = useCollection(
    session &&
    query(
      collection(db, 'users', session.user?.email!, 'chats'), orderBy("createdAt", "asc")
    )
  )

  console.log(chats)

  return (
    <div className='p-2 flex flex-col h-screen'>
      <div className='flex-1'>
        <div>
          <NewChat />

          <div>

          </div>

          {chats?.docs.map(chat => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {session &&
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt='user'
          className='w-12 h-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50 transition-all' />}

    </div>
  )
}

export default SideBar 

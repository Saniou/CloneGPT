'use client'

import React from 'react'
import NewChat from './NewChat'
import { useSession, signOut, signIn } from 'next-auth/react'

function SideBar () {
    const {data: session} = useSession()
  return (
    <div className='p-2 flex flex-col h-screen'>
      <div className='flex-1'>
        <div>
            <NewChat />
            <div>

            </div>

        </div>
      </div>

        {session && 
        <img
        onClick={() => signOut()} 
        src={session.user?.image!}
        alt='user' 
        className='w-12 h-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'/>}

    </div>
  )
}

export default SideBar 

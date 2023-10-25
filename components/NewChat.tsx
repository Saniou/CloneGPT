import React from 'react'
import { PlusIcon } from '@heroicons/react/20/solid'

function NewChat() {
  return (
    <div className='border-gray-700 border chatRow'>
      <PlusIcon className='h-5 w-5'/>
      <p>New Chat</p>
    </div>
  )
}

export default NewChat

'use client'

import { useSession, signOut } from 'next-auth/react'
import NewChat from './NewChat'

function SideBar() {
  const { data: session } = useSession()
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />
          <div>
            {/* Model Selection */}
          </div>

          {/* Map through the chat rows */}
        </div>
      </div>
      {session && (
        <img 
         onClick={() => signOut()}
          src={session.user?.image!} 
          alt="profile pic" 
          className="h-12 w-12 rounded-full mx-auto mb-2 hover:opacity-50 cursor-pointer" 
        />
      )}
    </div>
  )
}

export default SideBar
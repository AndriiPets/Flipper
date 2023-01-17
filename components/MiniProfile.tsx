import React from 'react'

import { useSession, signOut} from 'next-auth/react'

function MiniProfile() {
  const {data: session} = useSession()


  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img className='rounded-full border p-[2px] w-16 h-16' src={session?.user?.image as string} />

      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>{session?.user?.username}</h2>
        <h3 className='text-sm text-gray-400'>Wellcome to Instaclone</h3>
      </div>
      <button className='text-blue-400 font-semibold text-sm' onClick={() => signOut()}>Sign out</button>
    </div>
  )
}

export default MiniProfile

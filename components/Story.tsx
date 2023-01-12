import React from 'react'
import { Story } from '../types/story'

function Story({avatar, userName}:Story) {
  return (
    <div>
      <img className='w-14 h-14 rounded-full border-red-600
      border-2 p-[1.5px] cursor-pointer object-contain
      hover:scale-110 transition transform duration-200 ease-out' src={avatar} alt='profile pic' />
      <p className='text-xs w-14 truncate text-center'>{userName}</p>
    </div>
  )
}

export default Story

import React from 'react'
import { Suggestion } from '../types/suggestion'

function SuggestionComponent({id, avatar, userName, company, jobTitle}:Suggestion) {
  return (
    <div className='flex items-center justify-between mt-3'>
      <img className='w-10 h-10 rounded-full border p-[2px]' src={avatar} />
      
      
      <div className='flex-1 ml-4'>
        <h2 className='font-semibold text-sm'>{userName}</h2>
        <h3 className='truncate text-xs text-gray-400'>{jobTitle} at {company}</h3>
      </div>

      <button className='text-blue-400 text-xs font-bold'>Follow</button>
    </div>
  )
}

export default SuggestionComponent

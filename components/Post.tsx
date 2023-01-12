import React from 'react'
import { PostType } from '../types/post'
import {
    BookmarkIcon,
    ChatBubbleLeftEllipsisIcon,
    EllipsisHorizontalIcon,
    FaceSmileIcon,
    HeartIcon,
    PaperAirplaneIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as FilledHeartIcon} from '@heroicons/react/24/solid'

function Post({id, img, userImg, userName, caption}:PostType) {
  return (
    <div className='bg-white border my-7 rounded-sm'>
      {/* Header */}
      <div className='flex items-center p-5'>
        <img src={userImg} className='rounded-full h-12 w-12 object-contain
        border p-1 mr-3' />
        <p className='flex-1 font-bold'>{userName}</p>
        <EllipsisHorizontalIcon className='h-5 '/>
      </div>

      {/* img */}
      <img src={img} className='object-cover w-full'/>

      {/* Buttons */}
      <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4'>
            <HeartIcon className='btn'/>
            <ChatBubbleLeftEllipsisIcon className='btn'/>
            <PaperAirplaneIcon className='btn'/>
        </div>
        <BookmarkIcon className='btn'/>
      </div>

      {/* Caption */}
      <p className='truncate p-5'>
        <span className='font-bold mr-1'>{userName}</span>
        {caption}
      </p>

      {/* Comments */}

      {/* Input box */}
      <form className='flex items-center p-4'>
        <FaceSmileIcon className='h-7'/>
        <input type='text' 
        className='border-none flex-1 focus:ring-0'
        placeholder='Add a comment...'/>
        <button className='font-semibold text-blue-400'>Post</button>
      </form>
    </div>
  )
}

export default Post

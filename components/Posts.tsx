import React from 'react'
import { PostType } from '../types/post'
import Post from './Post'

const posts:PostType[] = [
    {
        id: 1,
        userName: 'BoyToy',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'I like in raw',
    },
    {
        id: 2,
        userName: 'Willy Tray',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'Yeeeeeeeehhhaaawww',
    },
]

function Posts() {
  return (
    <div>
        {posts.map(post => (
            <Post key={post.id}
            id={post.id}
            img={post.img}
            userName={post.userName}
            userImg={post.userImg}
            caption={post.caption}/>
        ))}
      
    </div>
  )
}

export default Posts

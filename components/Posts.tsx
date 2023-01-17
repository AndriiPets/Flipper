import { collection, QueryDocumentSnapshot, onSnapshot, orderBy, query} from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Post from './Post'
import { db } from '../firebase'


function Posts() {
    const [posts, setPosts] = useState<QueryDocumentSnapshot[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(query(collection(db, "posts"), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs);
        })

        return () => {
            unsubscribe();
        }
    }, [db]);

   

  return (
    <div>
        {posts.map(post => (
            <Post key={post.id}
            id={post.id}
            img={post.data().image}
            userName={post.data().username}
            userImg={post.data().profileImg}
            caption={post.data().caption}/>
        ))}
      
    </div>
  )
}

export default Posts

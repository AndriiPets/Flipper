import React, { useEffect, useState } from 'react'

import { faker } from '@faker-js/faker'
import { Suggestion } from '../types/suggestion'
import Story from './Story'
import { useSession } from 'next-auth/react'

function Stories() {

    const {data: session} = useSession()

    const [suggestions, setSuggestions] = useState<Suggestion[]>([])

    useEffect(() => {
        const suggestion:Suggestion[] = [...Array(20)].map((_,i) => ({
            id: i,
            userName: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            company: faker.company.name(),
            jobTitle: faker.name.jobTitle(),
        }));

        setSuggestions(suggestion)
    }, [])

  return (
    <div className='flex space-x-2 p-6 bg-white
    mt-8 border-gray-200 border rounded-sm
    overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
        {session && (
            <Story avatar={session?.user?.image as string}
            userName={session?.user?.name?.split(' ').join('').toLocaleLowerCase() as string} 
            key={1}/>
        )}

        {suggestions.map(profile => (
            <Story
            key={profile.id}
            avatar={profile.avatar}
            userName={profile.userName}/>
        ))}

    </div>
  )
}

export default Stories

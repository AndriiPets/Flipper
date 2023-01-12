import React, { useEffect, useState } from 'react'

import { faker } from '@faker-js/faker'
import { Suggestion } from '../types/suggestion'
import Story from './Story'

function Stories() {

    const [suggestions, setSuggestions] = useState<Suggestion[]>([])

    useEffect(() => {
        const suggestion:Suggestion[] = [...Array(20)].map((_,i) => ({
            id: i,
            userName: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
        }));

        setSuggestions(suggestion)
    }, [])

  return (
    <div className='flex space-x-2 p-6 bg-white
    mt-8 border-gray-200 border rounded-sm
    overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
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

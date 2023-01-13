import React, { useEffect, useState } from 'react'
import { Suggestion } from '../types/suggestion'
import { faker } from '@faker-js/faker'
import SuggestionComponent from './SuggestionComponent'

function Suggestions() {
    const [suggestions, setSuggestion] = useState<Suggestion[]>([])

    useEffect(() => {
        const suggestion:Suggestion[] = [...Array(5)].map((_,i) => ({
            id: i,
            userName: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            company: faker.company.name(),
            jobTitle: faker.name.jobTitle(),
        }));
        setSuggestion(suggestion)

    },[])

  return (
    <div className='mt-4 ml-10'>
        <div className='flex justify-between text-sm mb-5'>
            <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
            <button className='text-gray-600 fonnt-semibold'>See all</button>
        </div>

        {suggestions.map(profile => (
            <SuggestionComponent 
            key={profile.id}
            id={profile.id}
            avatar={profile.avatar}
            userName={profile.userName}
            email={profile.email}
            company={profile.company}
            jobTitle={profile.jobTitle}
            />
        ))}
      
    </div>
  )
}

export default Suggestions

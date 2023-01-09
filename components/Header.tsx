import Image from 'next/image'
import React from 'react'
import {
        MagnifyingGlassIcon,
        PlusCircleIcon,
        UserGroupIcon,
        HeartIcon,
        PaperAirplaneIcon,
        MapIcon
         } from '@heroicons/react/24/outline'

function Header() {
  return (
    <div>

        <div className='flex justify-between bg-white max-v-6xl'>
            {/* left */}
            <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                <Image
                src='https://links.papareact.com/ocw'
                alt=''
                fill
                objectFit='contain'
            />
            </div>

            <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
                <Image
                src='https://links.papareact.com/jjm'
                alt=''
                fill
                objectFit='contain'
            />
            </div>

        {/* middle */}
            <div className='relative mt-1 p-3 rounded-md'>
                <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                    <MagnifyingGlassIcon className='h-5 w-5 text-gray-500'/>
                </div>
                <input type='field' 
                placeholder='Search' 
                className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-400 rounded-md focus:border-black'>
                </input>
            </div>

        {/* right */}

        </div>
    </div>
  )
}

export default Header
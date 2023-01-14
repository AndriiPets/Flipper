
import React from 'react'

import { getProviders } from 'next-auth/react'

function signIn() {
  return (
    <div>
      <h1>I am the signin page</h1>
      
    </div>
  )
}

export async function getServerSideProps() {
  const providers = getProviders()

  return {
    props: {
      providers
    }
  }
}

export default signIn

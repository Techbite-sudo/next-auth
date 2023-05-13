import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useSession } from 'next-auth/react'


export default function Home() {
  const { data: session, status: loading } = useSession()
  console.log({session,loading})

  return (
    <div>
      {session? `${session.user.name}`: ''}
      <h2>Welcome to Home Page</h2>
    </div>
  )
}

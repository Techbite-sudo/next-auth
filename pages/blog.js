import { getSession, useSession } from "next-auth/react"

export default function Blog({data}) {
    const { data: session } = useSession()
    console.log({session})
    return (
      <div>
          <h1>Blog page - {data}</h1>
      </div>
    )
  }
  
  export async function getServerSideProps(context){
    const session = await getSession(context)

    if (!session) {
        return{
            redirect: {
                destination: `/api/auth/signin?callbackUrl=https://localhost:3000/blog`,
                permanent: false,
            }
        }
    }
    
    return{
        props: {
            data: session? 'List of 100 personalized blogs':'List of Free blogs',
            session,
        }
    }
}
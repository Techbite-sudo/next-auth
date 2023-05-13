import { getSession } from "next-auth/react"

export default function Blog({data}) {
    return (
      <div>
          <h1>Blog page - {data}</h1>
      </div>
    )
  }
  
  export async function getServerSideProps(context){
    const session = await getSession(context)
    return{
        props: {
            data: session? 'List of 100 personalized blogs':'List of Free blogs',
            session,
        }
    }
}
import { getSession, signIn } from "next-auth/react"
import { useState, useEffect } from "react"

export default function Dashboard() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const securePage = async () => {
            const session = await getSession()
            if (!session) {
                signIn()
            }else{
                setLoading(false)
            }
        }
        securePage()
    }, [])

    if (loading) {
        return(
            <div>Loading...</div>
        )
    }

    // console.log({ session, loading})

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

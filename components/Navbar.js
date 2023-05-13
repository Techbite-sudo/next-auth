import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"


export default function Navbar() {
 const {data: session, status: loading} = useSession()

 console.log({session, loading})

  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1> 
      <ul className={`main-nav`}>
        <li>
          <Link href="/">
            <h2>Home</h2>
          </Link>
        </li>
        <li>
          <Link href="/dashboard"> 
            <h2>Dashboard</h2>
          </Link>
        </li>

        <li>
          <Link href="/blog">
            <h2>Blog</h2>
          </Link>
        </li>
        {!session && (
            <li>
            <Link href="/api/auth/signin">
            <button onClick={() => signIn()}>Sign in</button>
            </Link>
          </li>
        )}
        {session && (
            <li>
            <Link href="/api/auth/signout">
            <button onClick={() => signOut()}>Sign out</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}


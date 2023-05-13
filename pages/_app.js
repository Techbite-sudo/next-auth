import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import '../components/Navbar.css'

import { SessionProvider } from "next-auth/react"

// export default function App({ Component, pageProps }) {
//   return(
//     <Provider session={pageProps.session}>
//     <SessionProvider session={pageProps.session}>
//       <Navbar/>
//       <Component {...pageProps} />
//     </SessionProvider>
//   </Provider>
//   )
  
// }

export default function App({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session}>
      <Navbar/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
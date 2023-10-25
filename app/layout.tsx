import '@/styles/globals.css'
import Head from './head'
import SideBar from '@/components/SideBar'
import Login from '@/components/Login'
import { SessionProvider } from '../components/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { signOut } from 'next-auth/react'


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <html lang="en">
      <Head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className='flex'>
              <div className='bg-gray-900 max-w-xs h-screen overflow-y-auto md:min-[20rem]'>
                <SideBar />
              </div>
              <div className='flex-1 bg-gradient-to-r from-purple-800 via-gray-800 to-purple-800 animate-gradient'>
                {children}
              </div>
            </div>
          )}

        </SessionProvider>
      </body >
    </html >
  )
}



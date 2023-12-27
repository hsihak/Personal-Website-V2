import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { Provider } from './components/Provider'
import Footer from './components/sections/Footer'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Hangsihak Sin',
  description: 'Hangsihak Sin Personal Website',
  icons: {
    icon: '/favicon-user.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body 
      className={`${roboto.className} bg-gradient-to-t from-purple-200 to-indigo-100 text-black dark:from-black dark:to-black dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800`}
      >
        <Provider>
          <Navbar/>
          <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            {children}
          </main>
        </Provider>
        <Footer/>
      </body>
    </html>
  )
}

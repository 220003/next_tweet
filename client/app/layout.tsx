import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/app/components/navbar'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body >
        {/* この書き方でNavbarを起動できる */}
         <Navbar />
        <main className='fiex min-h-screen fiex-col p-5'>
        {children}
        </main>
      </body>
    </html>
  )
}
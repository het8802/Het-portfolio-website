import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Cursor3D from '@/components/Cursor3D'
import Test3D from '@/components/Test3D'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Het Tikawala - Software Engineer',
  description: 'Personal portfolio website showcasing my experience in software development, projects, and skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Test3D />
        <Cursor3D />
        {children}
      </body>
    </html>
  )
} 
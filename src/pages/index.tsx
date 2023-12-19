import { Inter } from 'next/font/google'
import { AuthProvider } from '@/context/AuthContext'
import UserAuth from '@/components/userAuth/userAuth'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <AuthProvider>
    <h1>auth provider</h1>
    <UserAuth/>
    </AuthProvider>
  )
}

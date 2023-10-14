'use client'
import ForgotPassword from '@/components/modals/ForgotPassword'
import Login from '@/components/modals/Login'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()
  const auth = searchParams.get('auth')
  const showLoginModal = auth === 'login' ? true : false
  const showForgotPasswordModal = auth === 'forgotpassword' ? true : false

  return (
    <main>
      <div className='mt-10 flex gap-x-4 justify-center '>
        <Link href='/?auth=login'>Login</Link>
        <Link href='/?auth=forgotpassword'>Forgot Password</Link>
      </div>
      { showLoginModal && <Login />}
      { showForgotPasswordModal && <ForgotPassword /> }
    </main>
  )
}

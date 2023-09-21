import { ReactNode } from 'react'
import { useDarkMode } from '../utils/DarkModeContext'
import { useSession, signIn, signOut } from 'next-auth/react'
import Info from '../components/info'
const Layout = ({ children }: { children: ReactNode }) => {
  const { darkMode, setDarkMode } = useDarkMode()
  const { data: session } = useSession()
  return (
    <div className="max-w-2xl mx-auto h-full flex flex-col gap-5">
      <nav className="flex justify-between items-center text-xl">
        <Info />
        <button onClick={() => setDarkMode(!darkMode)} className="bi bi-moon"></button>
        {session ? (
          <>
            <button onClick={() => signOut()}>Đăng xuất</button>
          </>
        ) : (
          <button onClick={() => signIn()}>Đăng nhập</button>
        )}
      </nav>
      {children}
    </div>
  )
}

export default Layout

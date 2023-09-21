import { ReactNode } from 'react'
import { useDarkMode } from '../utils/DarkModeContext'
import { useSession, signIn, signOut } from 'next-auth/react'
const Layout = ({ children }: { children: ReactNode }) => {
  const { darkMode, setDarkMode } = useDarkMode()
  const { data: session } = useSession()
  return (
    <div className="max-w-2xl mx-auto h-full flex flex-col gap-5">
      <nav className="flex justify-between items-center text-xl">
        <h1 className="font-mono">
          {
            session ? (<>
              <div className='flex justify-center items-center'>
                <div className='mr-2'> Xin chào : {session?.user?.name}</div>
                <div>
                  {/* <Image src={session?.user?.image} className='rounded-xl' width={30} alt="Picture of the author" height={30} /> */}
                </div>
              </div>
            </>) : " Ghi chú của tôi"
          }
        </h1>
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

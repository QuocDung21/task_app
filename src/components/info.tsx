import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

const info = () => {
    const { data: session } = useSession()
    return (
        <h1 className="font-mono">
            {
                session ? (<>
                    <div className='flex justify-center items-center'>
                        <div className='mr-2'> Xin chào : {session.user?.name}</div>
                        <div>
                            {/* <Image src={session?.user?.image} className='rounded-xl' width={30} alt="Picture of the author" height={30} /> */}
                        </div>
                    </div>
                </>) : " Ghi chú của tôi"
            }
        </h1>
    )
}

export default info
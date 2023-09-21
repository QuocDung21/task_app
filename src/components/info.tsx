import { useSession, signIn, signOut } from 'next-auth/react'

const info = () => {
    const { data: session } = useSession()
    return (
        <h1 className="font-mono">
            {
                session ? (<>
                    <div className='flex justify-center items-center'>
                        <div className='mr-2'> Xin chào : {session.user?.name}</div>
                        <div>
                            <img className='rounded-xl' width={30} height={30} src={session.user?.image} />
                        </div>
                    </div>
                </>) : " Ghi chú của tôi"
            }
        </h1>
    )
}

export default info
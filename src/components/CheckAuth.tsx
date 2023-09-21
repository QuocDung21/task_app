import { useSession, signIn, signOut } from 'next-auth/react'


const CheckAuth = () => {
    const { data: session } = useSession()
    return (
        <>
            {
                session ? (
                <>
                
                </>
                ) : 
                ""
            }
        </>
    )
}

export default CheckAuth
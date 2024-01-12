import { signUserApi } from "@/api"
import SignForm from "@/components/SignForm"
import { useUser } from "@/lib/providers/UserProvider"
import { useMutation } from '@tanstack/react-query'
import { GetServerSidePropsContext } from "next"
import { useRouter } from "next/router"

export default function Sign() {
    const {setUser} = useUser()
    const rotuer = useRouter()
    const { mutate, isPending } = useMutation({
        mutationFn: signUserApi,
        mutationKey: ['sign'],
        onSuccess: (data) => {  
            setUser(data.data)
            rotuer.push('/')
        }
    })
    const handleSubmitForm = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            username: { value: string };
            password: { value: string };
        };  
        mutate({
            username: target['username'].value,
            password: target['password'].value
        })
    }

    return (
        <SignForm handleSubmitForm={handleSubmitForm} isPending={isPending}/>
    )
}

export function getServerSideProps(context: GetServerSidePropsContext) {
    const refreshTokenCookie = context.req.cookies['refresh_token']
    if (refreshTokenCookie) {
        return {
            redirect: {
                permanent: false,
                destination: "/admin/restaurants"
            }
        }
    }
    return {
        props: {

        }
    }
}
import { signUserApi } from "@/api/user"
import SignForm from "@/components/SignForm"
import { useMutation } from '@tanstack/react-query'
import { GetServerSidePropsContext } from "next"
import { useRouter } from "next/router"

export default function Sign() {
    const rotuer = useRouter()
    const { mutate, isPending } = useMutation({
        mutationFn: signUserApi,
        mutationKey: ['sign'],
        onSuccess: (data) => {
            rotuer.push('/admin/restaurants')
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
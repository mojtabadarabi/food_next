import { getFoodApi } from "@/api";
import SingleFood from "@/components/foods/components/SingleFood";
import appRoutes from "@/configs/appRoutes";
import { reactQuerySsr } from "@/helpers/ReactQuery";
import { useQuery } from '@tanstack/react-query';
import { GetServerSidePropsContext } from "next";

export default function Index({ id }: { id: string }) {
    const { data } = useQuery({ queryKey: ['foods'], queryFn: () => getFoodApi(id) })
    console.log(data)
    return (<SingleFood food={data} />)
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const id = context.query.id instanceof Array ? context.query.id?.[0] : context.query.id
    if (!id) {
        return {
            redirect: {
                permanent: false,
                destination: appRoutes.allFoods
            }
        }
    }
    const props = await reactQuerySsr({
        context,
        queryKey: ['foods'],
        queryFn: () => getFoodApi(id)
    })
    return {
        props: {
            ...props,
            id
        }
    }
}
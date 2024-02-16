import { getRstaurantApi } from "@/api/restaurant/client";
import SingleRestaurant from "@/components/restaurants/single";
import appRoutes from "@/configs/appRoutes";
import { reactQuerySsr } from "@/helpers/ReactQuery";
import { useQuery } from '@tanstack/react-query';
import { GetServerSidePropsContext } from "next";

export default function Index({ id }: { id: string }) {
    const { data } = useQuery({ queryKey: ['restaurant'], queryFn: () => getRstaurantApi(id) })
    return (<SingleRestaurant restaurant={data} />)
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const id = context.query.id instanceof Array ? context.query.id?.[0] : context.query.id
    if (!id) {
        return {
            redirect: {
                permanent: false,
                destination: appRoutes.allRestaurants
            }
        }
    }
    const props = await reactQuerySsr({
        context,
        queryKey: ['restaurant'],
        queryFn: () => getRstaurantApi(id)
    })
    return {
        props: {
            ...props,
            id
        }
    }
}
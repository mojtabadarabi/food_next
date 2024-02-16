import appRoutes from "@/configs/appRoutes";
import { H1Card } from "@/lib/components/heading";
import { RestaurantType } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function SingeRestaurantCard({ restaurant }: { restaurant: RestaurantType }) {
    return (
        <div className="border rounded-md shadow-md overflow-hidden">
            <div className='relative w-full h-[180px] '>
                <Image fill={true} objectFit='cover' src={'/images/restaurant.png'} alt={restaurant.name} />
            </div>
            <div className="p-1 flex flex-col gap-1">
                <Link href={appRoutes.singleRestaurant(restaurant._id)}>
                    <H1Card>{restaurant.name}</H1Card>
                </Link>
                <h6 className="text-sm font-light truncate">{restaurant.address}</h6>
            </div>
        </div>
    )
}

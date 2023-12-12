import { RestaurantType } from "@/types"
import RestaurantCard from "./RestaurantCard"

export default function MainRestaurants({ restaurants ,isError}: { restaurants: RestaurantType[] ,isError:boolean}) {
    if (isError) return <div>error</div>
    if (!restaurants) return <div>No restaurants</div>
    if (restaurants.length === 0) return <div>restaurants is empty</div>
    return (
        <div className="p-4">
            <h1 className='text-md md:text-2xl font-bold'>رستوران ها</h1>
            <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 p-4">
                {
                    restaurants.map(restaurant => (
                        <RestaurantCard restaurant={restaurant} key={restaurant._id} />
                    ))
                }
            </div>
        </div>
    )
}

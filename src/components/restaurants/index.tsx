import { RestaurantType } from '@/types'
import SingeRestaurantCard from './components/SingeRestaurantCard'

export default function index({ restaurants }: { restaurants: RestaurantType[] }) {
  return (
    <div className='grid grid-cols-4 w-full gap-2'>
      {
        restaurants.map((restaurant: RestaurantType) => (
          <SingeRestaurantCard  key={restaurant._id} restaurant={restaurant}/>
        ))
      }
    </div>
  )
}

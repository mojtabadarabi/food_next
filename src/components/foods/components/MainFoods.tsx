import { FoodType } from "@/types"
import FoodCard from "./FoodCard"

export default function MainFoods({ foods ,isError}: { foods: FoodType[],isError:boolean }) {
    if (isError) return <div>error</div>
    if (!foods) return <div>No foods</div>
    if (foods.length === 0) return <div>foods is empty</div>
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">غذا ها</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5 p-4">
                {
                    foods.map(food => (
                        <FoodCard food={food} key={food._id}/>
                    ))
                }
            </div>
        </div>
    )
}

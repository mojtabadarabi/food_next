export default function Loading({paginate}:{paginate:number}) {
    return (
        <div className=" grid grid-cols-4 w-full gap-2">
            {
                Array.from(Array(paginate)).map((_, index) => (
                    <div key={index} className="flex animate-pulse flex-row items-center h-full justify-center rounded">
                        <div className="bg-gray-300  rounded-md w-full h-[350px]">
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

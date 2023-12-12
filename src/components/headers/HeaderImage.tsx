import Image from "next/image";

export default function HeaderImage() {
    return (
        <div className='relative w-full h-[500px] bg-yellow-200'>
            <Image fill={true} objectFit='cover' src={'/images/food-header.jpg'} alt="header" />
        </div>
    )
}

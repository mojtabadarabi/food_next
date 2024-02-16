export const H1 = ({ children, className = '' }: { children: React.ReactNode, className?: String }) => {
    return <h1 className={`text-md md:text-2xl font-bold my-4 ${className}`}>{children}</h1>
}
export const H1Card = ({ children, className = '' }: { children: React.ReactNode, className?: String }) => {
    return <h1 className={`text-sm md:text-md font-bold my-4 ${className}`}>{children}</h1>
}
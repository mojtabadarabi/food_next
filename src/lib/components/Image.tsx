import NextImage from 'next/image'

interface Props {
    alt?: string
    defaultImage?: string
    src?: string
    fill?: boolean
    objectFit?: string
}

export default function Image({ alt, defaultImage, src, fill, objectFit }: Props) {
    return (
        <NextImage alt={alt ?? 'cover'} src={src ?? defaultImage ?? '/images/default-image.png'} fill={fill ?? true} objectFit={objectFit ?? 'cover'} />
    )
}

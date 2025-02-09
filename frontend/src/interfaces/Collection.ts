import { StaticImageData } from "next/image"

interface Collection {
    id: number
    title: string
    photo: string | StaticImageData
}

export default Collection
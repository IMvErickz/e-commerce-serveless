import Link from "next/link"

interface fieldProps{
    imgSrc: string
    Name: string
    Price: number
    category?: string
}

export function Field(props: fieldProps) {
    return (
        <fieldset className="flex flex-col items-center justify-center bg-zinc-500 rounded-lg w-72 h-80">
            <Link href={'/product/productInfo'}>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <img src={props.imgSrc} alt=""
               className='w-48 rounded-2xl'
                />
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <h1 className="text-black font-bold text-3xl">{props.Name}</h1>
                <span className="text-black font-semibold text-2xl">R${props.Price}</span>
                <span className='text-white'>{props.category}</span>
            </div>
            </Link>
        </fieldset>
    )
}
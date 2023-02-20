interface fieldProps{
    imgSrc: string
    Name: string
    Price: number
}

export function Field(props: fieldProps) {
    return (
        <fieldset className="flex flex-col items-center justify-center bg-zinc-500 rounded-lg w-72 h-80">
            <div className="w-full h-full flex flex-col items-center justify-center">
                <img src={props.imgSrc} alt=""
                className="w-56"
                />
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <h1 className="text-white text-4xl">{props.Name}</h1>
                <span className="text-white text-2xl">R${props.Price}</span>
            </div>
        </fieldset>
    )
}
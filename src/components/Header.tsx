import { ReactNode } from "react"

interface NameProps{
    name: string
}

interface HeaderProps{
    name: JSX.Element
}

export function Header(props: HeaderProps) {
    return (
        <div className="w-full h-20 flex flex-col items-center justify-center bg-zinc-700">
            <header className='flex flex-col items-center justify-center'>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Fvetores-premium%2Fpanela-vermelha-utensilio-de-cozinha-ilustracao-vetorial-icone-plano-dos-desenhos-animados-isolado-no-fundo-branco_24219132.htm&psig=AOvVaw2DfCfzUR569UP42SnNHBYh&ust=1680030923804000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNjr8oLp_P0CFQAAAAAdAAAAABAE"
                    alt="" className='w-18' />
                
                <div className='w-full flex flex-col items-center justify-center'>
                    <h1 className='text-white font-bold text-4xl font-andale'>CaseShop</h1>
                </div>
            </header>
            <nav className='w-full bg-black'>
                <ul className='w-full flex flex-row items-center justify-center gap-x-20'>
                    <div className="w-full flex flex-col items-center justify-center gap-x-8">
                        <li className='text-white text-xl font-semibold'>{props.name}</li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}
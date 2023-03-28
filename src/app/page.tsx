//'use client'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import React from 'react'
import { getProducts } from '@/lib/products/getProduct'
import { Field } from '@/components/field'
import { Header } from '@/components/Header'
import { getCategory } from '@/lib/getCategoty'

const inter = Inter({ subsets: ['latin'] })

// type ProductsProps = {
//   products: Products[]
// }

interface ProductsProps{
  pr: string
}

export default async function Home(props: ProductsProps) {

 // const [user, setUser] = useState('')

  const products = await getProducts()

  const dataProducts = products.products //products é a variável da função

  const categorys = await getCategory()

  const dataCategory = categorys.category
  
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-zinc-800'>

            <header className='w-screen h-20 flex flex-col items-center justify-center bg-zinc-700'>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Fvetores-premium%2Fpanela-vermelha-utensilio-de-cozinha-ilustracao-vetorial-icone-plano-dos-desenhos-animados-isolado-no-fundo-branco_24219132.htm&psig=AOvVaw2DfCfzUR569UP42SnNHBYh&ust=1680030923804000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNjr8oLp_P0CFQAAAAAdAAAAABAE"
                    alt="" className='w-18' />
                
                <div className='w-full flex flex-col items-center justify-center'>
                    <h1 className='text-white font-bold text-4xl font-andale'>CaseShop</h1>
                </div>
            </header>
            <nav className='w-full bg-black'>
                <ul className='w-full flex flex-row items-center justify-center gap-x-20'>
                    <div className="w-full flex flex-row items-center justify-center gap-x-8">
            {dataCategory.map((c: any) => {
                          return(
                            <ul key={c.name} className='flex flex-row items-center justify-center'>
                              <Link href={'oi'}><li className='text-white font-semibold text-xl'>{c.Name}</li></Link>
                            </ul>
                          )
                        })}
                    </div>
                </ul>
            </nav>
      
        <div className='w-full h-full flex flex-row items-center justify-center gap-x-8'>
            {dataProducts.map((pr: any) => {
                return (
                  <ul key={pr.id} className='flex flex-row items-center justify-center'>
                    <li>
                      <Field
                        Name={pr.Name}
                        Price={pr.Price}
                        imgSrc={pr.img}
                        category={pr.Category.Name}
                      />
                    </li>
                  </ul>
                )
            })}
        </div>
    </div>
  )
}
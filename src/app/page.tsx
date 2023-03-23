

import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { prisma } from 'lib/prisma'
import { api } from 'lib/axios'
import React from 'react'
import { getProducts } from '@/lib/getProduct'
import { Field } from '@/components/field'

const inter = Inter({ subsets: ['latin'] })

// type ProductsProps = {
//   products: Products[]
// }

interface ProductsProps{
  pr: string
}

export default async function Home(props: ProductsProps) {

  const products = await getProducts()

  const data = products.products //products é a variável da função
  
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-zinc-800 gap-y-8'>

      {data.map((pr: any) => {
          return (
            <ul key={pr.id} className='flex flex-col items-center justify-center'>
             <Field
                Name={pr.Name}
                Price={pr.Price}
                imgSrc={pr.img}
              />
            </ul>
          )
      })}
      <Link href='/user/newUser'>vai</Link>
      
    </div>
  )
}
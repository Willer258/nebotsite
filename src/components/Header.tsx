import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <div className='fixed top-0 left-0 right-0 sadow-lg'>
 <div className='  container mx-auto   py-8  rounded- bg-white flex justify-between items-center'>
        <Image src={'/images/logo.png'} alt='nebot-patrimoine' height={20} width={200} />

        <div className='flex items-center w-1/2 justify-between font-semibold'>
                <Link href={'#'}>
                    Accueil
                </Link>

                <Link href={'#'}>
                    Financer
                </Link>
                <Link href={'#'}>
                    Formation
                </Link>
                <Link href={'#'}>
                    Ajouter catalogue
                </Link>
        </div>
    </div>

    </div>
     )
}

export default Header
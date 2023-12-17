import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import LinkComponent from './LinkComponent'
function Header() {
  return (
    <div className='fixed top-0 left-0 right-0 sadow-lg'>
 <div className='  container mx-auto   py-8  rounded- bg-white flex justify-between items-center'>
        <Image src={'/images/logo.png'} alt='nebot-patrimoine' height={20} width={200} />

        <div className='flex items-center min-w-1/3 justify-between font-semibold'>
               <LinkComponent name="Formation"/>
               <LinkComponent name="Catalogue"/>
               <LinkComponent url='https://www.helloasso.com/associations/institut-nebot-patrimoine/adhesions/adhesion-institut-nebotpatrimoine' name="Devenir membre"/>
               <LinkComponent url='https://www.helloasso.com/associations/institut-nebot-patrimoine/formulaires/1' name="Faire un don"/>
        </div>
    </div>

    </div>
     )
}

export default Header
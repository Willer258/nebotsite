import { Button } from '@nextui-org/react'
import React from 'react'

export interface ICardFormationProps {
    title:string,
    description:string,
    image:string,
    url:string
}
function CardFormation({title, description , image,url}:ICardFormationProps) {
  return (
    <div className="w-full min-h-[400px] bg-gray-800 text-white hover:shadow-lg duration-300 rounded-lg overflow-hidden space-y-8 pb-10 ">
        <div className='h-[300px] w-full overflow-hidden'>

        <img className='h-full w-full object-cover duration-300 hover:scale-110 ' src={image} alt="" />
        </div>
    <div className="flex flex-col items-center text-center space-y-3">
      <h3 className="text-2xl font-bold">{title}</h3>
    
      <p>
       {description}
      </p>

<a href={url} target='_blank'>
      <Button variant='ghost' className='text-base text-white' >
        Consulter
      </Button>
      </a>
    </div>
  </div>
  )
}

export default CardFormation
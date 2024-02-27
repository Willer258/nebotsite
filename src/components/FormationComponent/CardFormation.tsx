import { Button } from "@nextui-org/react";
import React from "react";
import { ICardFormation } from "@/utils/data";

import Image from "next/image";
import LinkComponent from "../LinkComponent";

function CardFormation({ title, description, image, url }: ICardFormation) {
  return (
    <div className="w-full flex flex-col min-h-[400px] bg-gray-800 text-white hover:shadow duration-300 rounded-lg overflow-hidden space-y-8 pb-10 ">
      <div className="h-[300px] flex-none w-full overflow-hidden">
        <Image
          width={1200}
          height={500}
          className="h-full w-full object-cover duration-300 hover:scale-110 "
          src={image ?? "/images/formations/fixedImage.jpg"}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-between min-h-[150px] text-center space-y-5 px-5 ">
        <h3 className="text-2xl font-bold">{title}</h3>

        
      
    <div className="uppercase font-bold">
    <LinkComponent classNameText='text-white' name="Recevoir la formation" url={url}/>
    </div>
     
    
       
      </div>
    </div>
  );
}

export default CardFormation;

import React from "react";
import LinkComponent from "@/components/LinkComponent";
import Image from "next/image";
function Footer() {
  return (
    <div className="bg-blue-300 p-10 text-white ">
      <div className="container mx-auto flex flex-col justify-center items-center w-full space-y-14">
        <div className="flex flex-col  ">
          <Image
            src={"/images/logo.png"}
            alt="nebot-patrimoine"
            height={20}
            width={300}
          />
        </div>

        <p className="text-center">
          2 rue Louis Pergaud - 94700 Maisons-Alfort - France
        </p>

        <div className="w-1/2 flex-none flex justify-between text-sm">
          <div className="flex space-x-2 items-center">
            {" "}
            <Image src={"/icons/mail.svg"} alt="mail" width={30} height={30} />
            <span>charles@nebotpatrimoine.com</span>
          </div>
          <div className="flex space-x-2 items-center">
            <Image
              src={"/icons/phone.svg"}
              alt="telephone"
              width={30}
              height={30}
            />
            <div className="flex  space-x-3">
              <span> +33 01 89 56 47 63 </span> <span>|</span>
              <span> +33 07 61 24 71 26 </span>
            </div>
          </div>
        </div>

        {/* <div className="mt-10 flex w-1/2 justify-between  space-x-5">
                
                <LinkComponent name="Link1 " />
  
                <LinkComponent name="Link1 " />
  
                <LinkComponent name="Link1 " />
  
                <LinkComponent name="Link1 " />
              </div> */}

        <div className="flex space-x-5 items-center">
          <Image className="hover:scale-105 duration-300" width={30} height={30} src={"/icons/facebook.svg"} alt="facebook" fill={false} />
          <Image className="hover:scale-105 duration-300" width={30} height={30} src={"/icons/instagram.svg"} alt="instagram" fill={false} />
     
          <Image className="hover:scale-105 duration-300" width={30} height={30} src={"/icons/linkedin.svg"} alt="linkedin" fill={false} />
     
          <Image className="hover:scale-105 duration-300" width={30} height={30} src={"/icons/twitter.svg"} alt="twitter" fill={false} />
     
        </div>
      </div>
    </div>
  );
}

export default Footer;

/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import LinkComponent from "@/components/LinkComponent";
import Image from "next/image";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
  Button,
} from "@nextui-org/react";

function Footer() {
  return (
    // <div style={{background:'#1D436C'}} className="bg-blue-300 p-10 text-white ">
    //   <div className="container mx-auto flex flex-col justify-center items-center w-full space-y-14">
    //     <div className="flex flex-col  ">
    //       <Image
    //         src={"/images/logo.png"}
    //         alt="nebot-patrimoine"
    //         height={20}
    //         width={300}
    //       />
    //     </div>

    //     <p className="text-center">
    //       2 rue Louis Pergaud - 94700 Maisons-Alfort - France
    //     </p>

    //     <div className="w-1/2 flex-none flex justify-between text-sm">
    //       <div className="flex space-x-2 items-center">
    //         {" "}
    //         <Image src={"/icons/mail.svg"} alt="mail" width={30} height={30} />
    //         <span>charles@nebotpatrimoine.com</span>
    //       </div>
    //       <div className="flex space-x-2 items-center">
    //         <Image
    //           src={"/icons/phone.svg"}
    //           alt="telephone"
    //           width={30}
    //           height={30}
    //         />
    //         <div className="flex  space-x-3">
    //           <span> +33 01 89 56 47 63 </span> <span>|</span>
    //           <span> +33 07 61 24 71 26 </span>
    //         </div>
    //       </div>
    //     </div>

    //     {/* <div className="mt-10 flex w-1/2 justify-between  space-x-5">

    //             <LinkComponent name="Link1 " />

    //             <LinkComponent name="Link1 " />

    //             <LinkComponent name="Link1 " />

    //             <LinkComponent name="Link1 " />
    //           </div> */}

    //     <div className="flex space-x-5 items-center">
    //       <Image className="hover:scale-105 duration-300" width={30} height={30} src={"/icons/facebook.svg"} alt="facebook" fill={false} />
    //       <Image className="hover:scale-105 duration-300" width={30} height={30} src={"/icons/instagram.svg"} alt="instagram" fill={false} />

    //       <Image className="hover:scale-105 duration-300" width={30} height={30} src={"/icons/linkedin.svg"} alt="linkedin" fill={false} />

    //       <Image className="hover:scale-105 duration-300" width={30} height={30} src={"/icons/twitter.svg"} alt="twitter" fill={false} />

    //     </div>
    //   </div>
    // </div>

    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto gap-y-5 lg:gap-y-0 lg:gap-x-5 grid lg:grid-cols-4">
        <div className="">
          <h3 className="text-xl font-bold mb-4">À propos de nous</h3>
          <p>Une brève description de votre entreprise ou organisation.</p>
        </div>

        <div className="">
          <h3 className="text-xl font-bold mb-4">Formations</h3>
          <div className="flex flex-col space-y=2">
            <Dropdown  placement="bottom-start">
              <DropdownTrigger>
                <Button
                  variant={"light"}
                  className="flex justify-between items-center text-white font-bold"
                >
                  <span>Je me prépare à créer du patrimoine</span>

                <Image
              className="hover:scale-105 duration-300"
              width={20}
              height={20}
              src={"/icons/bottom.svg"}
              alt="facebook"
              fill={false}
            />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem onClick={()=>window.location.href='https://institut-nebot-patrimoine.mykajabi.com/offers/F9cc8sG5'} key="new">
                  Changer ses croyances sur l’argent{" "}
                </DropdownItem>
                <DropdownItem onClick={()=>window.location.href='https://institut-nebot-patrimoine.mykajabi.com/offers/edouPzZV'} key="new">
                  Mindset d’un bon gestionnaire{" "}
                </DropdownItem>
                  <DropdownItem onClick={()=>window.location.href='https://institut-nebot-patrimoine.mykajabi.com/offers/FdnydzsN'} key="new">
                  Reprendre le pouvoir de ses finances{" "}
                </DropdownItem>
                  <DropdownItem onClick={()=>window.location.href='https://institut-nebot-patrimoine.mykajabi.com/offers/rBWFLr25'} key="new">
                  Rembourser ses dettes et sortir du découvert{" "}
                </DropdownItem>
                  <DropdownItem onClick={()=>window.location.href='https://institut-nebot-patrimoine.mykajabi.com/offers/Zum9YVWY'} key="new">
                  Apprendre à épargner pour financer ses projets{" "}
                </DropdownItem>
                  <DropdownItem onClick={()=>window.location.href='https://institut-nebot-patrimoine.mykajabi.com/offers/2z9LWvb8'} key="new">
                  Comprendre et maîtriser les différents types de placements
                  financiers et immobiliers
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <Button
                  variant={"light"}
                  className="flex justify-between items-center text-white font-bold"
                >
                  <span>Je crée ou je développe du patrimoine</span>

                <Image
              className="hover:scale-105 duration-300"
              width={20}
              height={20}
              src={"/icons/bottom.svg"}
              alt="facebook"
              fill={false}
            />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                  <DropdownItem onClick={()=>window.location.href='https://institut-nebot-patrimoine.mykajabi.com/offers/i62HhYAWb'} key="new">
                  Elaborer sa stratégie patrimoniale{" "}
                </DropdownItem>
                  <DropdownItem onClick={()=>window.location.href='https://institut-nebot-patrimoine.mykajabi.com/offers/VMFSgFLs'} key="new">
                  Convaincre son banquier pour obtenir son prêt immobilier{" "}
                </DropdownItem>
                  <DropdownItem onClick={()=>window.location.href=''} key="new">
                  Diminuer ses impôts grâce à un investissement immobilier{" "}
                </DropdownItem>
                  <DropdownItem onClick={()=>window.location.href=''} key="new">
                  Investir en France en tant qu’expatrié
                </DropdownItem>
                  <DropdownItem onClick={()=>window.location.href=''} key="new">
                  Évaluer et optimiser la rentabilité de son investissement
                  locatif
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <Button
                  variant={"light"}
                  className="flex justify-between items-center text-white font-bold"
                >
                  <span>J’hérite ou je transmets du patrimoine</span>

                <Image
              className="hover:scale-105 duration-300"
              width={20}
              height={20}
              src={"/icons/bottom.svg"}
              alt="facebook"
              fill={false}
            />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                  <DropdownItem onClick={()=>window.location.href=''} key="new">
                  Comment faire face à un décès: le Guide détaillé
                </DropdownItem>
                  <DropdownItem onClick={()=>window.location.href=''} key="new">
                  Préparer sa transmission de patrimoine en toute sérénité
                </DropdownItem>
                  <DropdownItem onClick={()=>window.location.href=''} key="new">
                  Comprendre et sortir de l’indivision
                </DropdownItem>
                  <DropdownItem onClick={()=>window.location.href=''} key="new">
                  J’hérite en toute sérénité
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Button
              variant={"light"}
              className="flex justify-between items-center text-white font-bold"
            >
              <span>Je prépare ma retraite ou celle d’un proche </span>

             
            </Button>
          </div>
        </div>
       
        <div className="">
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p>Adresse : 2 rue Louis Pergaud - 94700 Maisons-Alfort - France</p>
          <p>
            Téléphone : <a href="tel:+330189564763">+33 01 89 56 47 63</a> |{" "}
            <a href="tel:+330761247126">+33 07 61 24 71 26</a>{" "}
          </p>
          <p>
            Email :{" "}
            <a href="mailto:charles@nebotpatrimoine.com">
              charles@nebotpatrimoine.com
            </a>
          </p>
        </div>
        <div className="">
          <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
          <div className="flex space-x-4">
            <Image
              className="hover:scale-105 duration-300"
              width={30}
              height={30}
              src={"/icons/facebook.svg"}
              alt="facebook"
              fill={false}
            />
            <Image
              className="hover:scale-105 duration-300"
              width={30}
              height={30}
              src={"/icons/instagram.svg"}
              alt="instagram"
              fill={false}
            />
            <Image
              className="hover:scale-105 duration-300"
              width={30}
              height={30}
              src={"/icons/linkedin.svg"}
              alt="linkedin"
              fill={false}
            />
            <Image
              className="hover:scale-105 duration-300"
              width={30}
              height={30}
              src={"/icons/twitter.svg"}
              alt="twitter"
              fill={false}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

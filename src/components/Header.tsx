"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LinkComponent from "./LinkComponent";
import AnimateMenu from "./UI/AnimateMenu";
import { tree } from "next/dist/build/templates/app-page";
function Header() {
  const [shadow, setShadow] = useState(false);
  const [active, setactive] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY <= 100) {
        setShadow(false);
      } else {
        setShadow(true);
      }
    }

    // Ajoute un écouteur d'événement de défilement lors de l'initialisation
    window.addEventListener("scroll", handleScroll);

    // Retire l'écouteur d'événement lorsque le composant est démonté ou lorsque l'effet est nettoyé
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={
        shadow
          ? { boxShadow: " 0 1px 4px rgba(0, 0, 0, 0.13)" }
          : { boxShadow: "none" }
      }
      className="fixed bottm-0 lg:bottom-auto top-0 left-0 right-0 duration-300 "
    >
      <div className="  container mx-auto h-full  py-5 flex-col lg:flex-row  bg-white flex justify-between lg:items-center">
        <div className="w-full lg:w-auto px-4 flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              alt="nebot-patrimoine"
              height={20}
              width={200}
            />
          </Link>

          <div className="lg:hidden">
            <AnimateMenu change={(value: any) => setactive(value)} />
          </div>
        </div>
        <div
          style={active ? { height: "100vh" } : {}}
          className="flex h-0 lg:h-auto duration-300 flex-col lg:flex-row items-center text-center lg:text-left lg:items-center lg:mt-0 overflow-hidden  lg:space-y-0  min-w-1/3 justify-center lg:justify-between font-semibold"
        >
          <div className="space-y-5 lg:space-y-0 flex flex-col lg:flex-row items-center ">
            <LinkComponent name="Formation" />
            <LinkComponent name="Catalogue" />
            <LinkComponent
              url="https://www.helloasso.com/associations/institut-nebot-patrimoine/adhesions/adhesion-institut-nebotpatrimoine"
              name="Devenir membre"
            />
            <LinkComponent
              url="https://www.helloasso.com/associations/institut-nebot-patrimoine/formulaires/1"
              name="Faire un don"
            />

            <div className="flex space-x-5 items-center pt-8 lg:hidden">
              <Image
                className="hover:scale-105 duration-300"
                width={30}
                height={30}
                src={"/icons/facebook-blue.svg"}
                alt="facebook-blue"
                fill={false}
              />
              <Image
                className="hover:scale-105 duration-300"
                width={30}
                height={30}
                src={"/icons/instagram-blue.svg"}
                alt="instagram-blue"
                fill={false}
              />

              <Image
                className="hover:scale-105 duration-300"
                width={30}
                height={30}
                src={"/icons/linkedin-blue.svg"}
                alt="linkedin"
                fill={false}
              />

              <Image
                className="hover:scale-105 duration-300"
                width={30}
                height={30}
                src={"/icons/twitter-blue.svg"}
                alt="twitter"
                fill={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

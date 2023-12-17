"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LinkComponent from "./LinkComponent";
function Header() {
  const [shadow, setShadow] = useState(false);
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
      className="fixed top-0 left-0 right-0 duration-300 "
    >
      <div className="  container mx-auto   py-5   bg-white flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/images/logo.png"}
            alt="nebot-patrimoine"
            height={20}
            width={200}
          />
        </Link>

        <div className="flex items-center min-w-1/3 justify-between font-semibold">
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
        </div>
      </div>
    </div>
  );
}

export default Header;

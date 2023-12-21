import React from "react";
import Image from "next/image";
import LinkComponent from "@/components/LinkComponent";

function page() {
  return (
    <div>
      <div className="container mx-auto mt-32 lg:mt-[250px] flex flex-col justify-center items-center">
        <h1 className="text-2xl lg:text-4xl text-center lg:w-2/3  font-bold ">
          L’institut NEBOT PATRIMOINE vous avise pour une stabilité financière
          éclairée.
        </h1>

        <p className="text-center w-10/12 lg:w-1/2 mt-10">
          Ensemble renforçons votre avenir financier
        </p>

        <div className=" h-[250px] lg:h-[500px] w-full overflow-hidden lg:rounded-xl my-[70px]">
          <Image
            src="/images/home/herosection.jpg"
            className=" object-cover w-full h-full"
            width={1200}
            height={500}
            alt="hero"
          />
        </div>
      </div>
      <div className="container text-center lg:text-left mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-10 py-20">
        <div className="space-y-10 h-full flex flex-col items-center lg:items-start justify-center">
          <p className="text-2xl  font-semibold">
            A ce jour, 85% des Français n’ont toujours pas bénéficié
            d’enseignements en éducation budgétaire et financière, que ce soit à
            l’école, à l’université, dans leur entreprise ou dans un institut
            spécialisé (sondage IFOP 2016).
          </p>
          <p className="  w-11/12 ">
            En donnant les clés pour comprendre et permettre à chacun de prendre
            des décisions financières éclairées, l’éducation financière
            participe tant au renforcement de la stabilité financière
            personnelle d'un individu qu’à la croissance de l’économie d'un
            pays. La notion d’éducation financière a pour ambition de permettre
            à chacun de disposer des bases économiques, budgétaires et
            financière, afin de prendre des décisions financières en
            connaissance de cause, tout au long de sa vie. Le champ de
            l’éducation financière est vaste, il recouvre aussi bien l’éducation
            budgétaire (budget personnel ou familial), l’apprentissage des
            outils bancaires (banque au quotidien, épargne, assurance), que la
            compréhension des notions économiques (fonctionnement et financement
            de l’économie) et des politiques publiques.
          </p>

          <p className="my-2 w-11/12 ">
            C'est riche de ces convictions, que l'Institut Nebot Patrimoine met
            en œuvre des stratégies de communication permettant au plus grand
            nombre, l'accès à l'information de manière ludique.
          </p>

<div className="flex items-center  justify-around w-11/12 lg:text-sm 2xl:text-base ">

<LinkComponent name="NOS PRINCIPES FONDATEURS"/>

<LinkComponent name="NOS PRINCIPES DE COMPORTEMENT"/>
          
</div>

        </div>

        <div className="overflow-hidden rounded-xl">
          <Image
          src="/images/home/section1.jpg"
            className=" object-cover w-full h-full"
            width={1200}
            height={500}
            alt="section1"
          />
        </div>
      </div>

      <div className=" lg:hidden container text-center mx-auto flex justify-between flex-col-reverse lg:flex-row gap-x-20 gap-10 py-20">
        <div>
          <Image
            src="/images/home/section1.svg"
            className=" object-cover w-full h-full"
            width={1200}
            height={500}
            alt="hero"
          />
        </div>

        <div className="  space-y-10 h-full flex flex-col justify-center items-center lg:items-start justify-self-end lg:pl-20 ">
          <h2 className="text-2xl font-semibold">Section 2 </h2>
          <p className=" w-11/12 lg:w-2/3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            fugiat ea excepturi unde atque officia similique, minima distinctio
            in provident esse omnis consequuntur voluptatum voluptates, soluta
            corrupti quam ipsam expedita?
          </p>
        </div>
      </div>

      <div className="container hidden  text-center lg:text-left mx-auto lg:grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-10 py-20">
        <div>
          <Image
            src="/illustrations/section1.svg"
            className=" object-cover w-full h-full"
            width={1200}
            height={500}
            alt="hero"
          />
        </div>

        <div className="space-y-10 h-full flex flex-col justify-center">
          <h2 className="text-2xl font-semibold">Section 3 </h2>
          <p className=" w-11/12 lg:w-2/3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            fugiat ea excepturi unde atque officia similique, minima distinctio
            in provident esse omnis consequuntur voluptatum voluptates, soluta
            corrupti quam ipsam expedita?
          </p>
        </div>
      </div>

      <div className="container text-center lg:text-left mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-10 py-20">
        <div className="space-y-10 h-full flex flex-col items-center lg:items-start justify-center">
          <h2 className="text-2xl font-semibold">Section 3 </h2>
          <p className=" w-11/12 lg:w-2/3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            fugiat ea excepturi unde atque officia similique, minima distinctio
            in provident esse omnis consequuntur voluptatum voluptates, soluta
            corrupti quam ipsam expedita?
          </p>
        </div>

        <div>
          <Image
            src="/illustrations/section1.svg"
            className=" object-cover w-full h-full"
            width={1200}
            height={500}
            alt="hero"
          />
        </div>
      </div>

      <div className="container mx-auto py-20">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold my-5 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h2>

          <p className=" w-11/12  lg:w-2/3 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit aliquam soluta mollitia dolor vel possimus illum.
            Facilis perspiciatis accusamus reprehenderit sunt, provident
            suscipit omnis modi doloremque in soluta iusto sapiente?
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;

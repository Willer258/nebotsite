/* eslint-disable react/no-unescaped-entities */
'use client '
import React from "react";
import Image from "next/image";
import LinkComponent from "@/components/LinkComponent";
import FundingPrincips from '@/components/HomeComponents/FundingPrincips'
import BehaviorPricips from "@/components/HomeComponents/BehaviorPricips";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <div>
      <div className="container mx-auto mt-32 lg:mt-[150px] flex flex-col justify-center items-center">
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

           
            <FundingPrincips/>

            
<BehaviorPricips/>
            
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

      <div className=" lg:hidden container text-center mx-auto flex justify-between flex-col-reverse lg:flex-row gap-x-20 gap-10 lg:py-20">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="/images/home/section2.jpg"
            className=" object-cover w-full h-full"
            width={1200}
            height={500}
            alt="section1"
          />
        </div>

        <div className="  space-y-10 h-full flex flex-col justify-center items-center lg:items-start justify-self-end lg:pl-20 ">
          <h2 className="text-2xl font-semibold">NOTRE VISION </h2>
          <p className=" w-11/12 ">
          Dans un contexte économique national qui risque de rester difficile
            pendant encore plusieurs années, la distribution du crédit reste un
            levier majeur permettant de stimuler la consommation des ménages qui
            représente plus de la moitié du produit intérieur brut (PIB). Il est
            donc probable que le crédit à la consommation continuera d’occuper
            une place centrale dans toute politique économique de relance et de
            lutte contre le chômage. L’objectif de notre institut est de
            permettre au plus grand nombre d’être mieux armé pour la gestion de
            leur argent dans la vie de tous les jours en leur fournissant des
            informations et des outils simples et concrets afin de les
            accompagner dans leur processus de décision. La crise financière de
            2007-2008 a provoqué la nécessité de donner des explications claires
            aux gens pour les aider à mieux comprendre les éléments sous-jacents
            qui influent sur l'économie. Nous voulons par le biais de nos
            actions répondre aux questionnements, rassurer et développer les
            connaissances de chacun, en présentant les produits et les enjeux
            financiers de manière simple.
          </p>
        </div>
      </div>

      <div className="container hidden  text-center lg:text-left mx-auto lg:grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-10 py-20">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="/images/home/section2.jpg"
            className=" object-cover w-full h-full"
            width={1200}
            height={500}
            alt="section1"
          />
        </div>

        <div className="space-y-10 h-full flex flex-col justify-center">
          <h2 className="text-2xl font-semibold">NOTRE VISION </h2>
          <p className=" w-11/12">
            Dans un contexte économique national qui risque de rester difficile
            pendant encore plusieurs années, la distribution du crédit reste un
            levier majeur permettant de stimuler la consommation des ménages qui
            représente plus de la moitié du produit intérieur brut (PIB). Il est
            donc probable que le crédit à la consommation continuera d’occuper
            une place centrale dans toute politique économique de relance et de
            lutte contre le chômage. L’objectif de notre institut est de
            permettre au plus grand nombre d’être mieux armé pour la gestion de
            leur argent dans la vie de tous les jours en leur fournissant des
            informations et des outils simples et concrets afin de les
            accompagner dans leur processus de décision. La crise financière de
            2007-2008 a provoqué la nécessité de donner des explications claires
            aux gens pour les aider à mieux comprendre les éléments sous-jacents
            qui influent sur l'économie. Nous voulons par le biais de nos
            actions répondre aux questionnements, rassurer et développer les
            connaissances de chacun, en présentant les produits et les enjeux
            financiers de manière simple.
          </p>
        </div>
      </div>

      <div className="container mx-auto text-center lg:text-left  lg:py-20">
        <div className="space-y-10 h-full flex flex-col items-center lg:items-center justify-center">
          <h2 className="text-3xl font-semibold">NOS ACTIONS </h2>
          <p className=" w-11/12 lg:w-2/3 text-center">
            Notre priorité étant de rendre accessible l'information auprès d'un
            large public tout en conservant la proximité des participants, nous
            favorisons des actions digitalisées et des rencontres en comités
            restreints.
          </p>

          <div className="w-full flex flex-col md:flex-row space-y-5 md:space-y-0 justify-around  ">
            <div className="text-center ">
              <h3 className="font-semibold">PREVENTION</h3>
              <p>Enfants et adolescents</p>
            </div>
            <div className="text-center ">
              <h3 className="font-semibold">CONFERENCE & MASTERCLASS</h3>
              <p>Entrepreneurs jeunes</p>
              <p>Actifs</p>
            </div>
            <div className="text-center ">
              <h3 className="font-semibold">INVESTISEMENTS</h3>
              <p>Cooperatif</p>
              <p>primo-investisseurs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

import React from "react";
import CardFormation from "../../components/FormationComponent/CardFormation";
import { ICardFormationProps } from "../../components/FormationComponent/CardFormation";
function FormationPage() {
  const formations: ICardFormationProps[] = [
    {
      image: "/images/hero.jpg",
      title: "Formation 1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sequi repellat harum quasi facere fugit error maiores hic",
      url: "",
    },
  ];


  

  return (
    <div className="h-full flex  justify-center mt-16 flex-col container mx-auto ">
      <h1 className="text-3xl  font-semibold">Nos formations</h1>

<div className="border-t border-b py-5 my-5">
  <h2 className="text-2xl font-semibold">
  Je me prépare à créer du patrimoine
  </h2>

  <div className="grid grid-cols-3 h-full w-full place-content-center mt-5 gap-10">
        {formations.map((formation: ICardFormationProps, index: number) => (
          <CardFormation
            key={index}
            url={formation.url}
            image={formation.image}
            title={formation.title}
            description={formation.description}
          />
        ))}
      </div>
</div>
      
    </div>
  );
}

export default FormationPage;

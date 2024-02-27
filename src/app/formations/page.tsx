import React from "react";
import CardFormation from "../../components/FormationComponent/CardFormation";
import { formationsData, Formations , ICardFormation } from "@/utils/data";
function FormationPage() {
  return (
    <div className="h-full flex  justify-center mt-16 flex-col container mx-auto ">
      <h1 className="text-3xl  font-semibold">Nos formations</h1>

      {formationsData.map((listFormation: Formations, index: number) => (
        <div key={index} className="border-t border-b py-5 my-5">
          <h2 className="text-2xl font-semibold">
            {listFormation.title}
          </h2>

          <p>
            {/* {listFormation.description} */}
          </p>

          <div className="grid grid-cols-3 h-full w-full place-content-center mt-5 gap-10">
            {listFormation.formations.map((formation: ICardFormation, index: number) => (
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
      ))}
    </div>
  );
}

export default FormationPage;

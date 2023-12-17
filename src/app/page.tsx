import React from "react";
import Image from "next/image";

function page() {
  return (
    <div>
      <div className="container mx-auto mt-32 lg:mt-[250px] flex flex-col justify-center items-center">
        <h1 className="text-2xl lg:text-4xl text-center  font-bold ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h1>

        <p className="text-center w-10/12 lg:w-1/2 mt-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          officiis possimus numquam perspiciatis consequuntur! Ipsam dicta
          obcaecati, tenetur sunt mollitia quos suscipit quam in iure harum
          temporibus eos, necessitatibus quo?
        </p>

        <div className=" h-[250px] lg:h-[500px] w-full overflow-hidden lg:rounded-xl my-[70px]">
          <Image
            src="/images/hero.jpg"
            className=" object-cover w-full h-full"
            width={1200}
            height={500}
            alt="hero"
          />
        </div>
      </div>
      <div className="container text-center lg:text-left mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-10 py-20">
        <div className="space-y-10 h-full flex flex-col items-center lg:items-start justify-center">
          <h2 className="text-2xl font-semibold">Section 1 </h2>
          <p className="  w-10/12 lg:w-2/3">
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

      <div className=" lg:hidden container text-center mx-auto flex justify-between flex-col-reverse lg:flex-row gap-x-20 gap-10 py-20">
        <div>
          <Image
            src="/illustrations/section1.svg"
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

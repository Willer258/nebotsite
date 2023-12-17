'use client'
import Link from "next/link";
import  {useState} from "react";

function LinkComponent({ link, name , url}: any) {

  const [hover, setHover] = useState(false)



  return (
    <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="relative px-5 py-3 rounded  overflow-hidden  boder">
      <div  style={hover?{right:'0%'}:{right:'100%'}} className="bg-yellow-300 absolute top-0 duration-300  h-1 w-1/2 "></div>
      <div
       style={hover?{left:'0%'}:{left:'100%'}}
        className="bg-blue-300 absolute duration-300  bottom-0  h-1  w-1/2 "
      ></div>
      {
        link && <Link
        className="absolute top-0 right-0 left-0 bottom-0"
        style={{ zIndex: 500 }}
        href={link ?? "#"}
      />
      }

      {
        url && <a href={url} target="blank"   style={{ zIndex: 500 }}   className="absolute top-0 right-0 left-0 bottom-0"/>
      }
      

      <span style={hover?{color:'black'} : {}} className="relative duration-300 text-gray-600 z-50 top-0 left-0 right-0 bottom-0">
       
        {name ?? "Link"}
      </span>
    </div>
  );
}

export default LinkComponent;

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

function LinkComponent({ link, name, url, children, style2 }: any) {
  const [hover, setHover] = useState(false);
  const [onMobile, setOnMobile] = useState(false)

useEffect(() => {
  
  if (window.innerWidth <= 768) {
    setOnMobile(true)
  } else{
    setOnMobile(false)
  }

}, [])


  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}

    >
      <div className={`${!style2 && 'px-3' } relative  py-3 rounded  overflow-hidden font-semibold  cursor-pointer`}>
        {!style2 && (
          <div
            style={hover ? { right: "0%" } : { right: "100%" }}
            className="bg-yellow-300 absolute top-0 duration-300  h-1 w-1/2 "
          />
        )}

        <div
          style={hover ? { left: "0%" } : { left: "100%" }}
          className="bg-blue-300 absolute duration-300  bottom-0  h-1  w-1/2 "
        ></div>
        {link && (
          <Link
            className="absolute top-0 right-0 left-0 bottom-0"
            style={{ zIndex: 500 }}
            href={link ?? "#"}
          />
        )}

        {url && (
          <a
            href={url}
            target="blank"
            style={{ zIndex: 500 }}
            className="absolute top-0 right-0 left-0 bottom-0"
          />
        )}

        <span
          style={hover ? { color: "black" } : {}}
          className="relative duration-300 text-gray-600 z-50 top-0 left-0 right-0 bottom-0"
        >
          {name ?? "Link"}
        </span>
      </div>

      {children  && !onMobile && (
        <motion.div   transition={{
          ease: "anticipate",
          duration: .5,
         
        }} initial={{height:0}} animate={{height: hover ? 'auto' : '0'} } className=" lg:absolute bg-white top-18  right-0 left-0 overflow-hidden">
         
          {children}
        </motion.div>
      )}


      {
         children && hover && onMobile &&
         <div className=''>
{children}
         </div>
      }
    </div>
  );
}

export default LinkComponent;

import Link from "next/link";
import React from "react";

function LinkComponent({link, name}:any) {
  return <Link href={link ?? '#'}>{name}</Link>;
}

export default LinkComponent;

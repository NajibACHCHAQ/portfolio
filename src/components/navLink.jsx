"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`cursor-pointer rounded-tl-[10px] rounded-bl-[5px] rounded-tr-[5px] rounded-br-[10px] hover:rounded-tl-[5px] hover:rounded-bl-[10px] hover:rounded-tr-[10px] hover:rounded-br-[5px] ease-in duration-300 pt-2 pb-2 pr-4 pl-4 ${pathName === link.url && " hover:bg-blue-600  hover:text-yellow-400 bg-blue-500 bg-opacity-80 text-yellow-300"}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants/constants";
import { logo, menu, close } from "../assets";

const Navigation = () => {
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-6 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-red text-[18px] font-bold cursor-pointer flex">
            <span className="sm:block hidden">The Perfume Menagerie</span>
          </p>
        </Link>
        <ul className="list-none text-red hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              // key={nav.id}
              // className={`${active === nav.title ? "text-red" : "pink"
              //   } hover:text-red text-[18px] font-medium cursor-pointer`}
              // onClick={() => setActive(nav.title)}
              >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

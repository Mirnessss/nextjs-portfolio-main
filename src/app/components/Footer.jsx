"use client"

import React from "react";
import { Link } from 'react-scroll'; 


const Footer = () => {
  return (
    <footer className="footer text-white border-t border-purple-700">
      <div className="container p-12 flex flex-col  justify-center items-center">
      <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="text-2xl cursor-pointer md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500"
        >
          MK<span className="font-light text-white">DEV</span>.
        </Link>
        <p className="text-slate-200">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

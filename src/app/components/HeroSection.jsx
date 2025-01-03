"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section id="home" className="h-screen pt-[8rem] lg:pt-[6rem]">
      <div className="grid grid-cols-1 sm:grid-cols-12 place-items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-5xl md:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
              Hello, I am{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Mirnes Kovacevic",
                1000,
                "Software Developer",
                1000,
                "Graphic Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Jr. Software Developer based in Augsburg, Germany!
          </p>
          <div>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="px-6 inline-block py-3 w-full sm:w-fit cursor-pointer rounded-full text-white mr-4 bg-gradient-to-br from-purple-700 to-purple-500 hover:text-[#121212] hover:bg-slate-200"
            >
              Hire Me
            </Link>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1_5Ck6yydeKvYmfLyYGlO_Eog9BLDmAO-/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-700 to-purple-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-gradient-to-br from-purple-700 to-purple-500 rounded-full px-5 py-2">
                Resume
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

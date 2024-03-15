"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { FaNodeJs, FaReact, FaAngular, FaJava, FaHtml5, FaCss3, FaGithub } from "react-icons/fa"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-col gap-4 pl-2"> 
      <div className="flex flex-row gap-2">
      <FaNodeJs size={30}/>
      <FaReact size={30} />
      <FaAngular size={30} />
      <FaJava size={30} />
      <FaHtml5 size={30} />
      <FaCss3 size={30} />
      <FaGithub size={30} />
      </div>
      <div className="flex flex-row gap-2">
        <Image alt="Java Script Icon" src="/images/icons/js.png" width={30} height={30} />
        <Image alt="SQL Icon" src="/images/icons/sql-server.png" width={30} height={30} />
        <Image alt="Wordpress Icon" src="/images/icons/wordpress.png" width={30} height={30} />
        <Image alt="Photoshop Icon" src="/images/icons/photoshop.png" width={30} height={30} />
        <Image alt="Illustrator Icon" src="/images/icons/illustrator.png" width={30} height={30} />
        <Image alt="AdobeXD Icon" src="/images/icons/xd.png" width={30} height={30} />
        <Image alt="Indesign Icon" src="/images/icons/indesign.png" width={30} height={30} />
      </div>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Meta Front-End Developer Course</li>
        <li>Board Infinity Java Full-Stack Developer Course</li>
        <li>University of Ljubljana, Slovenia</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Meta Front-End Developer - Professional Certificate</li>
        <li>Java Full-Stack Developer - Professional Certificate</li>
        <li>Meta Android Mobile Apps Developer - Fundamentals</li>
        <li>Google IT Specialist - Technical Support Fundamentals</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png"  alt="Picture of me" className="border-b border-purple-700" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Experienced Full Stack Developer with a passion for crafting innovative solutions. Proficient in both front-end and back-end technologies, 
          I thrive in creating seamless user experiences while ensuring robust functionality. Dedicated to continuous learning and staying abreast of emerging trends, 
          I bring creativity and expertise to every project I undertake.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

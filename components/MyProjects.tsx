"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const MyProjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
      viewport={{ once: true }}
      className="grid gap-4 sm:gap-6 md:grid-cols-2 grid-cols-1"
    >
      <ProjectCard
        title="Libus"
        description="A social media app made with Django"
        image="/Projects/Libus.png"
        link="https://github.com/iii123iii/Libus"
      />
      <ProjectCard
        title="Opr"
        description="A programming language made with Python"
        image="/Projects/OPR.png"
        link="https://github.com/iii123iii/OPR"
      />
      <ProjectCard
        title="Compiler"
        description="A compiler that supports the command print, made with Python and Assembly"
        image="/Projects/Compiler.png"
        link="https://github.com/iii123iii/Compiler"
      />
    </motion.div>
  );
};

export default MyProjects;

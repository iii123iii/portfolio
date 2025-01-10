"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { Spotlight } from "./ui/Spotlight";

export function Hero() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-3xl px-2 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        <div className="relative justify-items-start">
          <div>
            <span className="black">Hi im</span>{" "}
            <Highlight className="text-white p-0">Omri K</Highlight>
            <span className="black">,</span>
          </div>
          <span className="black">And this is my portfolio.</span>
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}

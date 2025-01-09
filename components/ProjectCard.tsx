import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard = ({ title, description, image, link }: ProjectProps) => {
  return (
    <CardContainer>
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="w-[400px] h-[240px]">
            <Image
              src={image}
              height={240}
              width={400}
              className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
              loading="lazy"
            />
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem translateZ={20}>
            <Link
              className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold hover:bg-gray-800"
              href={link}
              target="_blank"
            >
              Go to Github
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;

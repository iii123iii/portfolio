import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
  viewProjectLink?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  link,
  viewProjectLink,
}: ProjectProps) => {
  const formattedDescription = description.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <CardContainer>
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-4 sm:p-6 border">
        <CardItem
          translateZ="50"
          className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-xs sm:text-sm max-w-full sm:max-w-sm mt-2 dark:text-neutral-300"
        >
          {formattedDescription}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="w-[400px] h-[200px] sm:w-[400px] sm:h-[240px]">
            <Image
              src={image}
              height={400}
              width={400}
              className="h-full w-full object-fill rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
              loading="eager"
            />
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-10 sm:mt-20">
          <CardItem translateZ={25}>
            <Link
              className="px-3 py-2 sm:px-4 sm:py-2 rounded-xl bg-black text-white text-xs font-bold hover:bg-gray-800"
              href={link}
              target="_blank"
            >
              Go to Github
            </Link>
          </CardItem>
          {viewProjectLink && (
            <CardItem translateZ={25}>
              <Link
                className="px-3 py-2 sm:px-4 sm:py-2 rounded-xl bg-gray-700 text-white text-xs font-bold hover:bg-gray-600"
                href={viewProjectLink}
                target="_blank"
              >
                View project
              </Link>{" "}
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;

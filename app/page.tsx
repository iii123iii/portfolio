import { Hero } from "@/components/hero";
import MyProjects from "@/components/MyProjects";
import { Expertise } from "@/components/Expertise";
import { BrainCircuitIcon, FolderKanbanIcon } from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";

const navItems = [
  {
    name: "Projects",
    link: "#projects",
    icon: (
      <FolderKanbanIcon className="h-6 w-6 pr-1 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Expertise",
    link: "#expertise",
    icon: (
      <BrainCircuitIcon className="h-6 w-6 pr-1 text-neutral-500 dark:text-white" />
    ),
  },
];

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <FloatingNav navItems={navItems} />
      <Hero />
      <section id="projects">
        <MyProjects />
      </section>
      <section id="expertise">
        <Expertise />
      </section>
    </div>
  );
}

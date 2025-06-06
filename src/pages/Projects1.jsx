import React from "react";
import { projects1 } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
export default function Projects1() {
  return (
    <div className="max-w-4xl mx-auto pt-20">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects1.map((proj, idx) => (
          <ProjectCard key={idx} project={proj} />
        ))}
      </div>
    </div>
  );
}

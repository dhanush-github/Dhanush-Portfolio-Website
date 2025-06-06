import React from "react";
import { projects2 } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
export default function Projects2() {
  return (
    <div className="max-w-4xl mx-auto pt-20">
      <h2 className="text-3xl font-bold mb-8">More Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects2.map((proj, idx) => (
          <ProjectCard key={idx} project={proj} />
        ))}
      </div>
    </div>
  );
}

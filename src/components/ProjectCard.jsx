import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition bg-white">
      <h3 className="text-xl font-semibold text-purple-700 mb-1">{project.title}</h3>
      <p className="text-sm text-gray-700 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 text-xs mb-4">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className="bg-gradient-to-r from-orange-200 to-purple-200 text-purple-900 font-semibold px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-fuchsia-600 hover:underline font-medium"
      >
        View Project →
      </a>
    </div>
  );
}

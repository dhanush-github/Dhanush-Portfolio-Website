// src/components/ProjectCard.jsx
import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white/95 rounded-2xl p-5 shadow-md border border-purple-100 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-bold mb-1 text-purple-700">{project.title}</h3>
        <div className="text-sm text-gray-500 mb-2">{project.date}</div>
        <p className="mb-4 text-gray-800">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((skill) => (
            <span key={skill} className="px-3 py-1 bg-gradient-to-tr from-orange-100 via-fuchsia-100 to-purple-100 text-purple-800 rounded-full text-xs font-semibold shadow">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-1 text-sm text-orange-600 hover:text-fuchsia-700 underline"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
}

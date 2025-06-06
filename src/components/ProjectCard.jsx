import React from "react";
export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
      <span className="text-sm text-gray-500">{project.date}</span>
      <p className="mt-2 mb-4 text-gray-700">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tech.map((t, idx) => (
          <span key={idx} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-lg text-xs">{t}</span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">View on GitHub</a>
    </div>
  );
}

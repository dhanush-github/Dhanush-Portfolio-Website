import React from "react";
import { skills } from "../data/skills";
import { certifications } from "../data/certifications";
export default function Skills() {
  return (
    <div className="max-w-3xl mx-auto pt-20">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4 mb-12">
        {skills.map((skill, idx) => (
          <span key={idx} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-2xl shadow">{skill}</span>
        ))}
      </div>
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      <ul>
        {certifications.map((cert, idx) => (
          <li key={idx} className="mb-4">
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold underline">{cert.name}</a>
            <div className="text-gray-700">{cert.org} • {cert.year}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import { experience, education } from "../data/experience";
export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto pt-20">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      {experience.map((item, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-xl font-semibold">{item.role} @ {item.company}</h3>
          <span className="text-gray-500">{item.duration}</span>
          <ul className="list-disc ml-8 mt-2">
            {item.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
      ))}
      <h2 className="text-3xl font-bold mb-6 mt-12">Education</h2>
      {education.map((edu, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <span className="text-gray-500">{edu.school} &nbsp;|&nbsp; {edu.duration}</span>
          <div className="text-gray-700">Grade: {edu.grade}</div>
        </div>
      ))}
    </div>
  );
}

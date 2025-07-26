import React from "react";

const experience = [
  {
    company: "Accenture Strategy & Consulting",
    role: "Decision Science Analyst",
    duration: "May 2024 – Dec 2024",
    domain: "Supply Chain Analytics | GenAI Enablement",
    bullets: [
      "Developed ML-based solutions for store delivery and inventory planning.",
      "Improved on-time delivery by 8% and reduced stockouts by 11% using analytics.",
      "Led GenAI workshop for upskilling team in Generative AI, MLOps, and LLM trends.",
      "Collaborated with clients and cross-functional teams on digital transformation.",
    ],
  },
  {
    company: "McKinsey & Company",
    role: "Knowledge Consulting Intern",
    duration: "Aug 2022 – Aug 2023",
    domain: "Retail & Operations Analytics",
    bullets: [
      "Executed analytics and forecasting for retail supply chain use cases.",
      "Built Power BI dashboards, SQL workflows, and Python-based analysis scripts.",
      "Improved process efficiency by 12% through automation and data insights.",
      "Standardized documentation for global Knowledge teams.",
    ],
  },
  {
    company: "Andhra Pradesh State Government",
    role: "Engineering Assistant",
    duration: "Oct 2019 – Oct 2020",
    domain: "Infrastructure & Project Management",
    bullets: [
      "Managed on-ground execution for government-funded civil infrastructure projects.",
      "Oversaw vendor coordination and compliance with engineering protocols.",
      "Reported real-time updates and insights to senior engineers and administrators.",
    ],
  },
];

const education = [
  {
    degree: "M.Tech in Data Science",
    school: "Amrita Vishwa Vidyapeetham",
    duration: "2021 – 2023",
    details: [
      "CGPA: 7.94/10 | Graduated with Distinction.",
      "Thesis: Machine Fault Diagnosis using Vibration Analysis & ML (Published at Springer CIS 2023).",
      "Key Courses: ML, DL, Time Series, Data Engineering, CV, NLP, RL.",
      "Achievements: Awarded AICTE Scholarship for GATE clearance.",
    ],
  },
  {
    degree: "B.Tech in Mechanical Engineering",
    school: "GITAM University",
    duration: "2013 – 2017",
    details: [
      "CGPA: 8.26/10 | First Class with Distinction.",
      "Major Project: Design & Fabrication of Treadmill Bicycle.",
      "Activities: SAE India, Robotics Club.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto pt-28 pb-8 px-4">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-orange-400 via-fuchsia-500 to-purple-600 text-transparent bg-clip-text mb-10">
        Experience
      </h2>

      <div className="flex flex-col gap-10 mb-12">
        {experience.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white/90 rounded-2xl p-6 shadow-md border border-purple-100"
          >
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xl font-semibold text-purple-800">
                {exp.company}
              </h3>
              <span className="text-sm text-gray-500">{exp.duration}</span>
            </div>
            <h4 className="font-medium text-orange-700 mb-1">{exp.role}</h4>
            <p className="text-sm text-gray-500 italic mb-2">{exp.domain}</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {exp.bullets.map((bullet, bidx) => (
                <li key={bidx}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 via-fuchsia-500 to-orange-600 text-transparent bg-clip-text mb-10">
        Education
      </h2>

      <div className="flex flex-col gap-10">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="bg-white/90 rounded-2xl p-6 shadow-md border border-orange-100"
          >
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xl font-semibold text-orange-800">
                {edu.school}
              </h3>
              <span className="text-sm text-gray-500">{edu.duration}</span>
            </div>
            <h4 className="font-medium text-purple-700 mb-2">{edu.degree}</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {edu.details.map((detail, didx) => (
                <li key={didx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}



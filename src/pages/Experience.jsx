import React from "react";

const experience = [
  {
    company: "Accenture Strategy & Consulting",
    role: "Decision Science Analyst",
    duration: "May 2024 – Dec 2024",
    bullets: [
      "Developed ML-based solutions for store delivery and inventory planning in supply chain optimization.",
      "Collaborated with cross-functional teams and clients to deliver actionable analytics for logistics.",
      "Conducted GenAI workshop to upskill the team on generative AI, MLOps, and latest AI trends.",
      "Improved on-time delivery rate by 8% and reduced stockouts by 11% using advanced analytics.",
    ],
  },
  {
    company: "McKinsey & Company",
    role: "Knowledge Consulting Intern",
    duration: "Aug 2022 – Aug 2023",
    bullets: [
      "Executed analytics and forecasting for retail supply chain use cases.",
      "Built Power BI dashboards, SQL queries, and Python scripts for actionable business insights.",
      "Improved process efficiency by 12% through data-driven recommendations and workflow automation.",
      "Documented processes and coordinated data collection for key operational analytics projects.",
    ],
  },
  {
    company: "Andhra Pradesh State Government",
    role: "Engineering Assistant",
    duration: "Oct 2019 – Oct 2020",
    bullets: [
      "Managed field operations and technical support for civil infrastructure projects under government schemes.",
      "Coordinated project execution, vendor management, and ensured compliance with engineering standards.",
      "Monitored and reported progress to senior officials and contributed to process improvement initiatives.",
    ],
  },
];

const education = [
  {
    degree: "M.Tech in Data Science",
    school: "Amrita Vishwa Vidyapeetham",
    duration: "2021 – 2023",
    details: [
      "CGPA: 7.94/10",
      "Graduated with Distinction.",
      "Thesis: Machine Fault Diagnosis using Vibration Analysis and Machine Learning (Published, Springer CIS 2023).",
      "Key Courses: Machine Learning, Deep Learning, Time Series, Data Engineering, Big Data, Data Mining, Optimization.",
      "Achievements: Best Project Award, Publication at CIS 2023.",
    ],
  },
  {
    degree: "B.Tech in Mechanical Engineering",
    school: "GITAM University",
    duration: "2013 – 2017",
    details: [
      "CGPA: 8.26/10",
      "First Class with Distinction.",
      "Major Project: Design & Fabrication of Treadmill Bicycle.",
      "Activities: Robotics Club, SAE India Member.",
    ],
  },
  // Uncomment if you want to show Intermediate/Matriculation:
  // {
  //   degree: "Intermediate – MPC",
  //   school: "Sri Chaitanya Junior College",
  //   duration: "2015 – 2017",
  //   details: ["Percentage: 96.2%"],
  // },
  // {
  //   degree: "Matriculation (SSC)",
  //   school: "Sri Chaitanya High School",
  //   duration: "2014 – 2015",
  //   details: ["CGPA: 9.7/10"],
  // },
];

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto pt-28 pb-8 px-4">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-orange-400 via-fuchsia-500 to-purple-600 text-transparent bg-clip-text mb-8">
        Experience
      </h2>
      <div className="flex flex-col gap-10 mb-12">
        {experience.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white/90 rounded-2xl p-6 shadow-md border border-purple-100"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-purple-800">
                {exp.company}
              </h3>
              <span className="text-sm text-gray-500">{exp.duration}</span>
            </div>
            <h4 className="font-medium text-orange-700 mb-2">{exp.role}</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {exp.bullets.map((bullet, bidx) => (
                <li key={bidx}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 via-fuchsia-500 to-orange-600 text-transparent bg-clip-text mb-8">
        Education
      </h2>
      <div className="flex flex-col gap-10">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="bg-white/90 rounded-2xl p-6 shadow-md border border-orange-100"
          >
            <div className="flex justify-between items-center mb-2">
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

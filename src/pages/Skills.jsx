import React from "react";

const skills = [
  "Python", "SQL", "Power BI", "Excel", "Tableau", "Git", "Linux",
  "Machine Learning", "Deep Learning", "NLP", "GenAI", "Agents",
  "MLOps", "LangGraph", "Crew AI", "Prompt Engineering", "EDA",
  "Feature Engineering", "Time Series", "Clustering", "Recommendation Systems",
  "Optimization", "Data Visualization", "Business Analytics",
];

const certifications = [
  {
    name: "Machine Learning Specialization (Coursera, Andrew Ng)",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/XRULU5Y3PLQN",
  },
  {
    name: "Workera Data Scientist Assessment",
    link: "https://www.credly.com/badges/3b076bb8-c98a-4651-9a1e-5a5ebaf8476d",
  },
  {
    name: "Newton School Data Science Certification",
    link: "https://www.linkedin.com/posts/n-sai-dhanush-2b5683112_dataanalyst-datascientist-certification-activity-7192324145879044097-FI_r",
  },
  // You can add more certifications here...
];

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto pt-28 pb-8 px-4">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-orange-400 via-fuchsia-500 to-purple-600 text-transparent bg-clip-text mb-8">
        Skills
      </h2>
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-gradient-to-tr from-orange-100 via-fuchsia-100 to-purple-100 text-purple-900 font-medium px-4 py-2 rounded-xl border border-purple-200 shadow text-base"
          >
            {skill}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-semibold text-purple-700 mb-4 text-center">Certifications</h3>
      <ul className="flex flex-col gap-4 items-center">
        {certifications.map((cert, idx) => (
          <li key={idx}>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-gradient-to-r from-orange-400 to-purple-500 text-white rounded-xl font-medium shadow hover:scale-105 transition"
            >
              {cert.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

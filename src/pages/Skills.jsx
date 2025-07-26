import React from "react";

const coreSkills = [
  "Python", "SQL", "Power BI", "ML", "Statistical Modelling", "Predictive Analysis"
];

const groupedSkills = {
  "Core Skills": coreSkills,
  "AI/ML": [
    "Machine Learning", "Deep Learning", "NLP", "GenAI", "Agents",
    "Clustering", "Recommendation Systems", "Time Series", "Optimization"
  ],
  "Analytics & Visualization": [
    "EDA", "Feature Engineering", "Data Visualization", "Business Analytics"
  ],
  "Dev Tools": [
    "Git", "Linux", "LangGraph", "Crew AI", "Prompt Engineering"
  ],
  "MLOps & Deployment": [
    "MLOps", "Flask", "FastAPI", "Prometheus", "AWS", "ML Monitoring Tools"]
};

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto pt-28 pb-8 px-4">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-orange-400 via-fuchsia-500 to-purple-600 text-transparent bg-clip-text mb-8">
        Skills
      </h2>

      {Object.entries(groupedSkills).map(([group, items], idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-xl font-semibold text-purple-700 mb-2 text-center">{group}</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {items.map((skill, id) => (
              <span
                key={id}
                className="bg-gradient-to-tr from-orange-100 via-fuchsia-100 to-purple-100 text-purple-900 font-medium px-4 py-2 rounded-xl border border-purple-200 shadow text-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Certifications */}
      <h3 className="text-2xl font-semibold text-purple-700 mb-4 text-center">Certifications</h3>
      <ul className="flex flex-col gap-4 items-center">
        {/* Coursera - Viewable online */}
        <li>
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/certificate/XRULU5Y3PLQN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-gradient-to-r from-orange-400 to-purple-500 text-white rounded-xl font-medium shadow hover:scale-105 transition text-center"
          >
            Machine Learning Specialization – Andrew Ng (Coursera)
          </a>
        </li>

        {/* Workera - Download */}
        <li>
          <a
            href="/Workera_Certification.pdf"
            download="Workera_Certification_N_Sai_Dhanush.pdf"
            className="inline-block px-4 py-2 bg-gradient-to-r from-orange-400 to-purple-500 text-white rounded-xl font-medium shadow hover:scale-105 transition text-center"
          >
            Workera Data Scientist Certification (Download)
          </a>
        </li>

        {/* Newton School - Download */}
        <li>
          <a
            href="/Newton_School_Certification.pdf"
            download="Newton_School_Certification_N_Sai_Dhanush.pdf"
            className="inline-block px-4 py-2 bg-gradient-to-r from-orange-400 to-purple-500 text-white rounded-xl font-medium shadow hover:scale-105 transition text-center"
          >
            Newton School Data Science Certificate (Download)
          </a>
        </li>

        {/* Newton School - Verify */}
        <li>
          <a
            href="https://my.newtonschool.co/course/vsqsni1946zi/certificate/fuahm6zlhe7g/verify?utm_source=certification&utm_medium=saidhanush.n&utm_campaign=certification-data-science-data-analyst-placement"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-gradient-to-r from-orange-400 to-purple-500 text-white rounded-xl font-medium shadow hover:scale-105 transition text-center"
          >
            Newton School Certification (Verify Online)
          </a>
        </li>
      </ul>
    </section>
  );
}





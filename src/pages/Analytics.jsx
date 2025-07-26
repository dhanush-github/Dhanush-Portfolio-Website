import React from "react";
import ProjectCard from "../components/ProjectCard";

const analyticsProjects = [
  {
    title: "Swiggy InsightEdge - Customer Analytics and Strategy Recommendations",
    description: "Analyzed customer segments, churn drivers, and delivery performance to recommend strategic improvements for Swiggy.",
    tech: ["Customer Analytics", "SQL", "Power BI"],
    link: "https://github.com/dhanush-github/Swiggy-InsightEdge---Customer-Analtyics-Strategic-Recommendations",
  },
  {
    title: "Supply Chain Inventory Optimization & Supplier Performance Dashboard",
    description: "Built an optimization and analytics solution to improve inventory turnover and supplier effectiveness across the supply chain.",
    tech: ["Supply Chain", "Optimization", "Excel", "Power BI"],
    link: "https://github.com/dhanush-github/Supply-Chain-Analytics",
  },
  {
    title: "StreamIQ - Viewer Behaviour, Retention & Content Strategy Analytics",
    description: "Analyzed viewer retention, genre trends, and content strategy impact for Netflix using Power BI and Python.",
    tech: ["Power BI", "EDA", "Python"],
    link: "https://github.com/dhanush-github/StreamIQ---Viewer-Behaviour-Retention-Content-Strategy-Analytics-System",
  },
  {
    title: "SkyOps Insight - Flight Delay & Cost Optimization Analytics",
    description: "Performed delay analysis, cost modeling, and route optimization for U.S. aviation using SQL, Python, and Power BI.",
    tech: ["Aviation Analytics", "SQL", "Power BI", "Python"],
    link: "https://github.com/dhanush-github/SkyOPS-Insights---Civil-Aviation-Analytics",
  },
  {
    title: "Marketing Campaign ROI & Conversion Funnel Analysis",
    description: "Analyzed marketing ROI, channel attribution, and funnel conversion using SQL and Excel dashboards.",
    tech: ["Marketing Analytics", "SQL", "Excel"],
    link: "https://github.com/dhanush-github/Marketing-Campaign-ROI-Conversion-Funnel-Analysis",
  },
  {
    title: "GridReady - EV Charging Network Stress Analyzer & Expansion Planner",
    description: "Built a full-stack EV analytics model to forecast stress zones and optimize public network rollout plans.",
    tech: ["EV Analytics", "Forecasting", "Power BI", "Python"],
    link: "https://github.com/dhanush-github/-GridReady-EV-Charging-Network-Stress-Analyzer-Expansion-Planner",
  },
  {
    title: "Integrated Disease Surveillance & Predictive Vaccination Strategy",
    description: "Conducted disease clustering, outbreak flagging, and predictive vaccine planning using Power BI and Python.",
    tech: ["Surveillance Analytics", "Power BI", "SQL"],
    link: "https://github.com/dhanush-github/INTEGRATED-DISEASE-SURVEILLANCE-PREDICTIVE-VACCINATION-STRATEGY/tree/main",
  },
  {
    title: "Bank CRM Analytics",
    description: "Analyzed CRM campaign performance, product affinity, and lead conversion using MySQL and Power BI.",
    tech: ["CRM Analytics", "MySQL", "Power BI"],
    link: "https://github.com/dhanush-github/Bank-CRM-Analysis---SQL",
  },
  {
    title: "Columbia Asia Hospitals Health Care Analytics",
    description: "Developed healthcare dashboards for KPIs like bed occupancy, turnaround times, and patient satisfaction.",
    tech: ["Healthcare", "Power BI", "Operational Analytics"],
    link: "https://github.com/dhanush-github/Columbia-Asia-HealthCare-Analytics---PowerBI",
  },
  {
    title: "Conditional Monitoring of Heavy Machinery & Predictive Modelling Strategies",
    description: "Used sensor data and machine learning to predict machinery failures and optimize maintenance scheduling.",
    tech: ["Machine Monitoring", "ML", "Vibration Analysis"],
    link: "https://github.com/dhanush-github/Machine-Fault-Diagnosis",
  },
];

export default function Analytics() {
  return (
    <section className="max-w-5xl mx-auto pt-28 pb-8 px-4">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-orange-400 via-fuchsia-500 to-purple-600 text-transparent bg-clip-text mb-8">
        Analytics Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {analyticsProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}





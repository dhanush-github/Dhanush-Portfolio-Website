import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Estimating Customer Lifetime Value (CLTV) for Olist",
    description: "Developed regression models to predict CLTV for an e-commerce business, enabling better segmentation and targeted marketing.",
    tech: ["Regression", "Python", "Business Analytics"],
    link: "https://github.com/dhanush-github/Estimating-Customer-Lifetime-Value-for-a-Business-using-Regression-Approach",
  },
  {
    title: "Credit Card Fraud Detection for Vesta",
    description: "Implemented supervised ML algorithms to identify fraudulent transactions on the Vesta dataset, boosting detection accuracy.",
    tech: ["Fraud Detection", "Supervised ML", "Python"],
    link: "https://github.com/dhanush-github/Credit-Card-Fault-Detection-for-Vestas",
  },
  {
    title: "Full-Cycle ML Workflow with MLOps",
    description: "Built an end-to-end MLOps pipeline covering model training, containerization, CI/CD, and deployment for seamless ML ops.",
    tech: ["MLOps", "Docker", "CI/CD"],
    link: "https://github.com/dhanush-github/End-to-End-MLOps-Project",
  },
  {
    title: "AI Research Assistant using Agentic AI",
    description: "Leveraged generative agents and prompt engineering to automate research, literature review, and knowledge extraction.",
    tech: ["Agentic AI", "Prompt Engineering", "GenAI"],
    link: "https://github.com/dhanush-github/Building-an-AI-Research-Assistant-using-Agentic-AI",
  },
  {
    title: "Conversational AI for Website Knowledge Retrieval",
    description: "Designed a chatbot using LLMs and RAG pipelines for instant website knowledge retrieval and FAQ answering.",
    tech: ["Chatbot", "LLM", "RAG"],
    link: "https://github.com/dhanush-github/Conversational-AI-for-Website-Knowledge-Retrieval",
  },
  {
    title: "Restaurant Visit Forecasting for Recruit",
    description: "Applied XGBoost with feature engineering to forecast restaurant visitors, enabling better planning and staffing.",
    tech: ["XGBoost", "Forecasting", "EDA"],
    link: "https://github.com/dhanush-github/Recruit-Restaurant-Visit-Forecasting",
  },
  {
    title: "Optimizing Marketing Budget Spend using MMM for Eleckart",
    description: "Used Marketing Mix Modelling to optimize marketing budget allocation, improving ROI and channel effectiveness.",
    tech: ["MMM", "ROI Analysis", "Marketing Analytics"],
    link: "https://github.com/dhanush-github/Optimizing-Marketing-Budget-Spend-using-Marketing-Mix-Modelling-MMM-",
  },
  {
    title: "Healthcare Analytics for Columbia Asia Hospitals",
    description: "Built Power BI dashboards and performed advanced analytics for operational KPIs, enhancing healthcare decision-making.",
    tech: ["Power BI", "Healthcare Analytics", "Dashboard"],
    link: "https://github.com/dhanush-github/Columbia-Asia-HealthCare-Analytics---PowerBI",
  },
  {
    title: "Bank CRM Analysis using MySQL & Power BI",
    description: "Conducted CRM analytics for a banking client with SQL queries and interactive Power BI dashboards for actionable insights.",
    tech: ["MySQL", "Power BI", "CRM Analytics"],
    link: "https://github.com/dhanush-github/Bank-CRM-Analysis---SQL",
  },
  {
    title: "Machine Fault Diagnosis",
    description: "Diagnosed machine faults using vibration analysis and ML classification on real-world sensor data, supporting predictive maintenance.",
    tech: ["Fault Diagnosis", "ML Classification", "Vibration Analysis"],
    link: "https://github.com/dhanush-github/Machine-Fault-Diagnosis",
  },
];

export default function Projects1() {
  return (
    <section className="max-w-5xl mx-auto pt-28 pb-8 px-4">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-orange-400 via-fuchsia-500 to-purple-600 text-transparent bg-clip-text mb-8">
        AI/ML Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}

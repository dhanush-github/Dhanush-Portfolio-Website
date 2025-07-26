import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Restaurant Visitor Forecasting (Kaggle)",
    date: "2023",
    description:
      "Built XGBoost and LightGBM models for visitor forecasting on restaurant data; engineered features, handled missing data, and visualized predictions in notebooks.",
    tech: ["XGBoost", "Feature Engineering", "Visualization"],
    link: "https://github.com/dhanush-github/restaurant-visitor-forecasting",
  },
  {
    title: "Stock Market Prediction (LSTM/ARIMA)",
    date: "2022",
    description:
      "Created end-to-end pipelines for stock price forecasting using LSTM neural networks and ARIMA models, including custom feature engineering and backtesting.",
    tech: ["LSTM", "ARIMA", "Time Series"],
    link: "https://github.com/dhanush-github/stock-market-prediction",
  },
  {
    title: "End-to-End MLOps Project",
    date: "2023",
    description:
      "Containerized a machine learning model (Flask API), set up CI/CD with GitHub Actions, and deployed to cloud using Docker and Vercel.",
    tech: ["MLOps", "Docker", "CI/CD"],
    link: "https://github.com/dhanush-github/End-to-End-MLOps-Project",
  },
  {
    title: "NLP Text Classification & Topic Modeling",
    date: "2023",
    description:
      "Implemented BERT and LDA for text classification, topic modeling, and summarization on real-world business datasets.",
    tech: ["BERT", "LDA", "NLP"],
    link: "https://github.com/dhanush-github/nlp-text-classification",
  },
  {
    title: "Movie Analytics Dashboard",
    date: "2022",
    description:
      "Designed an interactive analytics dashboard (Power BI & Streamlit) to explore trends and patterns in movie industry data.",
    tech: ["Power BI", "Streamlit", "EDA"],
    link: "https://github.com/dhanush-github/movie-analytics-dashboard",
  },
];

export default function Projects2() {
  return (
    <section className="max-w-5xl mx-auto pt-28 pb-8 px-4">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-orange-400 via-fuchsia-500 to-purple-600 text-transparent bg-clip-text mb-8">
        More Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}

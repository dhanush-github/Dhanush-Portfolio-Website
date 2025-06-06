import React from "react";
import profilePic from "../assets/profile.jpg";
export default function Home() {
  return (
    <section className="flex flex-col items-center text-center pt-16">
      <img src={profilePic} alt="Sai Dhanush" className="rounded-full w-40 h-40 mb-4 shadow-lg object-cover" />
      <h1 className="text-4xl font-bold mb-2">N. Sai Dhanush</h1>
      <h2 className="text-xl font-semibold text-blue-700 mb-4">Data Scientist | ML Engineer | Problem Solver</h2>
      <p className="max-w-2xl mb-6 text-lg">Result-driven Data Scientist with expertise in machine learning, analytics, and supply chain optimization. Passionate about turning data into actionable insights and creating business impact.</p>
      <div className="flex gap-6 justify-center mb-8">
        <a href="mailto:saidhanush.n@gmail.com" className="text-blue-500 underline">Email</a>
        <a href="https://www.linkedin.com/in/n-sai-dhanush-2b5683112/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">LinkedIn</a>
        <a href="https://github.com/dhanush-github" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">GitHub</a>
      </div>
      <a href="/Resume-N. sai dhanush.pdf" className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition" target="_blank" rel="noopener noreferrer">Download Resume</a>
    </section>
  );
}

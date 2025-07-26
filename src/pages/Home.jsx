import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const profilePic =
    import.meta.env.BASE_URL
      ? `${import.meta.env.BASE_URL}profile.JPG`
      : "/profile.JPG";

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-tr from-orange-50 via-fuchsia-100 to-purple-50 pt-24 pb-8"
    >
      <div className="relative">
        <img
          src={profilePic}
          alt="Sai Dhanush"
          className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-lg"
          style={{ background: "#eee" }}
        />
        <span className="absolute bottom-0 right-0 block w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 via-fuchsia-500 to-purple-600 border-4 border-white animate-pulse"></span>
      </div>
      <h1 className="mt-6 text-4xl font-bold bg-gradient-to-r from-orange-400 via-fuchsia-500 to-purple-600 text-transparent bg-clip-text">
        N. Sai Dhanush
      </h1>
      <h2 className="mt-2 text-lg font-semibold text-purple-700">
        Data Scientist | ML Engineer | Problem Solver
      </h2>
      <p className="max-w-xl mt-4 mb-6 text-lg text-gray-700">
        Result-driven Data Scientist with expertise in machine learning, analytics, and supply chain optimization. Passionate about turning data into actionable insights and creating business impact.
      </p>
      <div className="flex gap-6 justify-center mb-8">
        <a
          href="mailto:saidhanush.n@gmail.com"
          className="bg-gradient-to-r from-orange-400 to-purple-500 text-white px-6 py-2 rounded-xl shadow font-semibold hover:scale-105 transition"
        >
          Email Me
        </a>
        <a
          href="/Resume-N. sai dhanush.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-purple-300 px-6 py-2 rounded-xl font-semibold hover:bg-purple-50 transition"
        >
          Download Resume
        </a>
        <a
          href="/SaiDhanush-CoverLetter.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-orange-300 px-6 py-2 rounded-xl font-semibold hover:bg-orange-50 transition"
        >
          Download Cover Letter
        </a>
      </div>
    </motion.section>
  );
}

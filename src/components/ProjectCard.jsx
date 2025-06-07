import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-white/90 rounded-2xl shadow-md p-6 hover:shadow-2xl transition hover:-translate-y-2 border border-purple-100"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-xl font-semibold mb-1 text-purple-800">{project.title}</h3>
      <span className="text-sm text-gray-500">{project.date}</span>
      <p className="mt-2 mb-4 text-gray-700">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tech.map((t, idx) => (
          <span key={idx} className="bg-gradient-to-tr from-orange-200 to-purple-200 text-purple-900 px-2 py-1 rounded-lg text-xs">{t}</span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-600 underline font-semibold flex items-center gap-1">
        View on GitHub <ExternalLink className="w-4 h-4" />
      </a>
    </motion.div>
  );
}

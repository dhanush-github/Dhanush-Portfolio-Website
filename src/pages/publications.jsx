import React from "react";

export default function Publications() {
  return (
    <section className="max-w-4xl mx-auto pt-28 pb-8 px-4">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-orange-400 via-fuchsia-500 to-purple-600 text-transparent bg-clip-text mb-8">
        Publications & Research
      </h2>
      <div className="bg-white/90 rounded-2xl p-6 shadow-md border border-purple-100 mb-8">
        <h3 className="text-xl font-semibold mb-2 text-purple-700">
          Machine Fault Diagnosis using Vibration Analysis and Machine Learning
        </h3>
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-4">
          <img
            src="/CIS-2023-Certificate.jpg"
            alt="CIS 2023 Publication Certificate"
            className="w-48 h-auto rounded-xl shadow border mb-3 md:mb-0"
            style={{ minWidth: "160px" }}
          />
          <div>
            <ul className="list-disc pl-6 text-gray-700 mb-2">
              <li>
                <b>Published in:</b> 7th International Conference on Computer and Information Sciences (CIS 2023, Springer).
              </li>
              <li>
                Proposed a robust methodology for diagnosing faults in roller element bearings using vibration signal analysis and machine learning.
              </li>
              <li>
                Applied advanced signal processing (FFT, DWT) for feature extraction and used ML algorithms (SVM, Random Forest, XGBoost, KNN) for fault classification.
              </li>
              <li>
                Demonstrated high predictive accuracy on NASA Bearing datasets for predictive maintenance in industry.
              </li>
              <li>
                Recognized for impactful research in the intersection of AI, mechanical systems, and predictive analytics.
              </li>
            </ul>
            <div className="flex flex-wrap gap-4 mt-3">
              <a
                href="/CB.EN.P2DSC21016_THESIS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gradient-to-r from-orange-400 to-purple-600 text-white rounded-xl font-semibold shadow hover:scale-105 transition"
              >
                View Full Research Paper (PDF)
              </a>
              <a
                href="/N_Sai_Dhanush.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gradient-to-r from-fuchsia-400 to-purple-600 text-white rounded-xl font-semibold shadow hover:scale-105 transition"
              >
                View Presentation Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

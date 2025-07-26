import React from "react";

export default function Publications() {
  return (
    <section className="max-w-4xl mx-auto pt-28 pb-8 px-4">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-orange-400 via-fuchsia-500 to-purple-600 text-transparent bg-clip-text mb-8">
        Publications & Research
      </h2>

      <div className="bg-white/90 rounded-2xl p-6 shadow-md border border-purple-100 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-purple-700">
          Machine Fault Diagnosis using Vibration Analysis and Machine Learning
        </h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
          <li>
            <b>Published in:</b> 7th International Conference on Computer and
            Information Sciences (CIS 2023, Springer).
          </li>
          <li>
            Proposed a robust methodology for diagnosing faults in roller element bearings
            using vibration signal analysis and machine learning.
          </li>
          <li>
            Applied advanced signal processing (FFT, DWT) and ML classifiers (SVM, RF, XGBoost, KNN) for predictive maintenance.
          </li>
          <li>
            Demonstrated high predictive accuracy using NASA Bearing datasets for industrial use cases.
          </li>
        </ul>

        <div className="flex flex-wrap gap-4">
          <a
            href="/CB.EN.P2DSC21016_THESIS.pdf"
            download
            className="px-5 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-purple-500 shadow hover:scale-105 transition"
          >
            Download Research Paper
          </a>

          <a
            href="/N_Sai_Dhanush.pdf"
            download
            className="px-5 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow hover:scale-105 transition"
          >
            Download Presentation Certificate
          </a>
        </div>
      </div>
    </section>
  );
}





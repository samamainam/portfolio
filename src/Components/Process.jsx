import React from "react";

const steps = [
  { title: "Discovery", desc: "Understand goals, users, and requirements." },
  {
    title: "Planning & Architecture",
    desc: "Define tech stack, data models, and structure.",
  },
  {
    title: "Design & Development",
    desc: "Implement clean UI and robust backend.",
  },
  {
    title: "Testing & Launch",
    desc: "QA, performance checks, deployment, and handoff.",
  },
];

export default function Process() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-2xl font-bold text-brand">How I Work</h2>
      <p className="mt-2 text-gray-600 max-w-prose">
        A clear, iterative workflow designed to ship reliably.
      </p>

      <div className="mt-6 flex flex-col md:flex-row gap-4">
        {steps.map((s, idx) => (
          <div
            key={s.title}
            className="flex-1 p-6 bg-white border rounded-md shadow-sm"
          >
            <div className="text-sm text-gray-500">Step {idx + 1}</div>
            <h3 className="mt-2 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

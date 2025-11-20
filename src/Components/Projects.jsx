import React from "react";
// import placeholder from "../assets/placeholder.png";

const realProjects = [
  {
    title: "Listed.ky",
    url: "https://listed.ky/",
    desc: "A modern, professional listing marketplace.",
    tags: ["WordPress", "Custom Design", "Responsive"],
  },
  {
    title: "ABZ Salute Fitness",
    url: "https://abzsalutefitness.com/",
    desc: "Fitness coaching & studio type website.",
    tags: ["WordPress", "Fitness Website", "Landing Pages"],
  },
  {
    title: "FitBabe",
    url: "https://fitbabe.ky/",
    desc: "Stylish fitness & wellness website.",
    tags: ["WordPress", "Responsive", "E-commerce?"],
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-2xl font-bold text-brand">Featured Projects</h2>
      <p className="mt-2 text-gray-600 max-w-prose">
        Selected work showing a mix of WordPress and custom projects.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {realProjects.map((p) => (
          <div
            key={p.title}
            className="bg-white border rounded-lg overflow-hidden shadow-sm"
          >
            <img
              // src={placeholder}
              alt={p.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 text-sm border rounded-md hover:bg-brand hover:text-white transition"
                >
                  Live
                </a>
                <button className="px-3 py-2 text-sm bg-gray-100 rounded-md">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* placeholders */}
        <div className="bg-white border rounded-lg p-6 flex flex-col items-start justify-center">
          <h3 className="font-semibold">More MERN apps</h3>
          <p className="text-sm text-gray-600 mt-2">
            Custom React / Node apps — coming soon
          </p>
        </div>

        <div className="bg-white border rounded-lg p-6 flex flex-col items-start justify-center">
          <h3 className="font-semibold">Upcoming projects</h3>
          <p className="text-sm text-gray-600 mt-2">
            Room to add new case studies
          </p>
        </div>
      </div>
    </div>
  );
}

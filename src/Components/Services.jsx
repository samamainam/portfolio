import React from "react";

const services = [
  {
    title: "MERN Web Applications",
    desc: "Building full stack apps with React, Next, Node, Express, and MongoDB.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "WordPress Business Websites",
    desc: "Professional, fast, and easy to maintain WordPress sites.",
    tags: ["Custom Themes", "Gutenberg", "WooCommerce"],
  },
  {
    title: "E-commerce & Conversions",
    desc: "WooCommerce or custom stores focused on UX and sales.",
    tags: ["WooCommerce", "Conversion"],
  },
  {
    title: "Performance & Optimization",
    desc: "Speed improvements, clean code refactors, and technical SEO basics.",
    tags: ["Performance", "SEO"],
  },
];

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-2xl font-bold text-brand">What I Do</h2>
      <p className="mt-2 text-gray-600 max-w-prose">
        Services I provide to help you ship reliable, scalable web products.
      </p>

      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="p-5 rounded-xl border bg-white hover:shadow-soft transition"
          >
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

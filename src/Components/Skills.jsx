import React from "react";

const mernt = [
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT Auth",
];
const wp = [
  "Custom Themes",
  "Gutenberg",
  "WooCommerce",
  "Performance",
  "SEO-friendly",
  "Plugins",
];

function SkillCard({ title, items }) {
  return (
    <div className="p-6 bg-white border rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((i) => (
          <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-2xl font-bold text-brand">Skills & Tech Stack</h2>
      <p className="mt-2 text-gray-600 max-w-prose">
        MERN stack expertise plus WordPress & web fundamentals.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <SkillCard title="MERN Stack" items={mernt} />
        <SkillCard title="WordPress & Web" items={wp} />
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Skill levels</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { name: "React", level: 90 },
            { name: "Node.js", level: 85 },
            { name: "WordPress", level: 88 },
            { name: "Performance", level: 80 },
          ].map((s) => (
            <div key={s.name} className="bg-white border p-4 rounded-lg">
              <div className="flex justify-between mb-2 text-sm">
                <div>{s.name}</div>
                <div className="text-gray-500">{s.level}%</div>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${s.level}%`,
                    background: "linear-gradient(90deg,#001C27,#0b6b7a)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

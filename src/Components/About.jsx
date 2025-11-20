import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-brand">About Me</h2>
          <p className="mt-3 text-gray-600 max-w-prose">
            Driven MERN & WordPress Developer focused on shipping real world
            solutions. I build scalable applications and maintainable WordPress
            websites with performance and SEO in mind. My work emphasizes clean
            architecture, long-term maintainability, and business outcomes — not
            just code.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white border shadow-sm">
              <div className="text-sm text-gray-500">Name</div>
              <div className="font-medium text-gray-800">Samama Inam</div>
            </div>
            <div className="p-4 rounded-lg bg-white border shadow-sm">
              <div className="text-sm text-gray-500">Location</div>
              <div className="font-medium text-gray-800">Remote</div>
            </div>
            <div className="p-4 rounded-lg bg-white border shadow-sm">
              <div className="text-sm text-gray-500">Role</div>
              <div className="font-medium text-gray-800">
                MERN & WordPress Developer
              </div>
            </div>
            <div className="p-4 rounded-lg bg-white border shadow-sm">
              <div className="text-sm text-gray-500">Experience</div>
              <div className="font-medium text-gray-800">
                X+ years of development
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Core values</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {[
                "Clean code",
                "Pixel perfect UI",
                "On time delivery",
                "Clear communication",
              ].map((item) => (
                <li
                  key={item}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="p-6 rounded-xl bg-brand text-white shadow-soft">
          <div className="text-sm opacity-90">Quick note</div>
          <h4 className="mt-2 text-xl font-bold">I focus on results</h4>
          <p className="mt-3 text-sm opacity-90">
            Whether a WordPress site or a full-stack MERN app, I prioritize
            stability, speed, and conversion-focused UX.
          </p>
          <div className="mt-4">
            <a
              href="#contact"
              className="inline-block px-4 py-2 rounded-md bg-white text-brand font-medium"
            >
              Contact me
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

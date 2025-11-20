import React from "react";

export default function CTA() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="rounded-xl bg-brand text-white p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold">
            Ready to Build Something Great?
          </h3>
          <p className="mt-2 text-sm opacity-90">
            If you are looking for a MERN or WordPress developer who actually
            ships and cares about business results, let us talk.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="#contact"
            className="px-5 py-3 bg-white text-brand rounded-md font-medium"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="px-5 py-3 border border-white rounded-md text-white"
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
}

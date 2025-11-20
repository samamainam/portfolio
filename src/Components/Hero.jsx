import React from "react";
import illustration from "../assets/illustration.json";
import Lottie from "lottie-react";

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2">
          <p className="text-sm text-gray-300 mb-2">Hi, I am</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand leading-tight">
            Samama Inam
          </h1>
          <div className="mt-2 text-lg md:text-2xl font-semibold text-gray-800">
            MERN Stack Developer & WordPress Developer
          </div>

          <p className="mt-4 text-gray-600 max-w-xl">
            I build fast, scalable, and conversion-focused web experiences that
            actually ship. Professional, reliable, and focused on measurable
            business results — not just code.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center px-5 py-3 rounded-md border border-brand text-brand font-medium hover:bg-brand hover:text-white transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-3 rounded-md bg-brand text-white font-medium shadow-soft hover:opacity-95 transition"
            >
              Hire Me
            </a>
          </div>

          <div className="mt-6 flex gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>Available for freelance & remote</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-gray-100 text-xs">
                Trusted
              </span>
              <span className="px-2 py-1 rounded bg-gray-100 text-xs">
                On-time delivery
              </span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md p-6 rounded-2xl">
            <Lottie
              animationData={illustration}
              loop={true}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

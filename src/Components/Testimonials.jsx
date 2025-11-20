import React from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Founder, Example Co",
    quote:
      "Samama delivered exactly what we needed — on time and with clear communication.",
  },
  {
    name: "Jane Smith",
    role: "Marketing Lead, FitStudio",
    quote:
      "Very professional, excellent attention to detail, and the site performs great.",
  },
  {
    name: "Client X",
    role: "Product Owner",
    quote: "Great developer and reliable partner — recommended.",
  },
];

export default function Testimonials() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-2xl font-bold text-brand">Client Testimonials</h2>
      <p className="mt-2 text-gray-600 max-w-prose">
        What clients say about working with me.
      </p>

      <div className="mt-6 flex gap-4 overflow-x-auto pb-4">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="min-w-[280px] p-5 bg-white border rounded-lg shadow-sm"
          >
            <div className="text-sm text-gray-500">{t.role}</div>
            <div className="mt-2 font-semibold">{t.name}</div>
            <p className="mt-3 text-sm text-gray-600">"{t.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

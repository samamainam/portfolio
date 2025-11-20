import React from "react";
import useActiveSection from "../hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const sectionIds = NAV_ITEMS.map((i) => i.id);
  const active = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-brand flex items-center justify-center text-white font-bold shadow-soft">
            SI
          </div>
          <div>
            <div className="text-sm font-semibold text-brand">Samama Inam</div>
            <div className="text-xs text-gray-500">
              MERN & WordPress Developer
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-3 py-2 rounded-md text-sm font-medium transition 
                ${
                  active === item.id
                    ? "text-brand underline underline-offset-4"
                    : "text-gray-700 hover:text-brand"
                }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 inline-block px-4 py-2 rounded-md bg-brand text-white text-sm font-medium shadow-soft hover:opacity-95"
          >
            Hire Me
          </a>
        </nav>

        {/* mobile menu: minimal */}
        <div className="md:hidden">
          <details className="relative">
            <summary className="cursor-pointer p-2 rounded-md bg-gray-100">
              <span className="sr-only">Open menu</span>☰
            </summary>
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md py-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block px-4 py-2 text-sm hover:bg-gray-50"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block px-4 py-2 text-sm font-medium text-white bg-brand rounded-md m-3 text-center"
              >
                Hire Me
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

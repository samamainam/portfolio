import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <div>© {year} Samama Inam. All rights reserved.</div>
        <div className="flex gap-3 mt-3 md:mt-0">
          <a href="#" className="text-gray-200 hover:text-white">
            GitHub
          </a>
          <a href="#" className="text-gray-200 hover:text-white">
            LinkedIn
          </a>
          <a
            href="mailto:samama@example.com"
            className="text-gray-200 hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

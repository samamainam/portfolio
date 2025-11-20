import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "Website",
    budget: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // simple validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill name, email and message.");
      return;
    }
    setLoading(true);
    // Since no backend provided, simulate submission and show success.
    setTimeout(() => {
      setLoading(false);
      alert("Thanks! Your message has been noted. I will contact you shortly.");
      setForm({
        name: "",
        email: "",
        projectType: "Website",
        budget: "",
        message: "",
      });
    }, 700);
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-bold text-brand">Let’s Work Together</h2>
          <p className="mt-2 text-gray-600">
            I’m available for freelance work, collaborations, or remote roles.
            Tell me about your project.
          </p>

          <div className="mt-6 text-sm text-gray-700">
            <div>
              <strong>Email:</strong>{" "}
              <a href="mailto:samamamahar@gmail.com" className="text-brand">
                samamamahar@gmail.com
              </a>
            </div>
            <div className="mt-2">
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/samamainam/"
                className="text-brand"
              >
                linkedin.com/in/samamainam/
              </a>
            </div>
            <div className="mt-2">
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/samamainam" className="text-brand">
                github.com/samamainam
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white p-6 rounded-lg border shadow-sm"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
              className="p-3 border rounded-md"
            />
            <input
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email address"
              className="p-3 border rounded-md"
            />
            <select
              name="projectType"
              value={form.projectType}
              onChange={onChange}
              className="p-3 border rounded-md"
            >
              <option>Website</option>
              <option>MERN App</option>
              <option>WordPress</option>
              <option>Other</option>
            </select>
            <input
              name="budget"
              value={form.budget}
              onChange={onChange}
              placeholder="Budget (optional)"
              className="p-3 border rounded-md"
            />
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="Tell me about your project"
            rows="5"
            className="w-full mt-4 p-3 border rounded-md"
          />

          <div className="mt-4 flex items-center justify-between">
            <button
              type="submit"
              className="px-5 py-2 bg-brand text-white rounded-md"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            <div className="text-sm text-gray-500">
              Or email: samamamahar@gmail.com
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

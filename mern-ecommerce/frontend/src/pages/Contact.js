import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE - INFO */}
        <div className="bg-black text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">📞 Get in Touch</h2>
          <p className="mb-6 text-gray-300">
            Have questions about our products or your order?  
            We're here to help you.
          </p>

          <div className="space-y-4 text-sm">
            <p>📍 Ahmedabad, India</p>
            <p>📧 support@myshop.com</p>
            <p>📞 +91 98765 43210</p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="p-10">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Send Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Send Message 🚀
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
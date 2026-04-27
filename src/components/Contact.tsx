"use client";
import { useState } from "react";
import { motion } from "motion/react";

const socials = [
  { label: "GitHub", href: "#", icon: "🐙" },
  { label: "LinkedIn", href: "#", icon: "💼" },
  { label: "Twitter", href: "#", icon: "🐦" },
  { label: "Email", href: "mailto:alex@example.com", icon: "✉️" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, wire this to an API route or EmailJS
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4"
      style={{ backgroundColor: "color-mix(in srgb, var(--card) 50%, transparent)" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>
            Let&apos;s Talk
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold">Get In Touch</h2>
          <p className="mt-4 opacity-60 max-w-xl mx-auto" style={{ color: "var(--fg)" }}>
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="flex flex-col gap-4 mb-8">
              {[
                { icon: "📍", label: "Location", value: "ISB, Pakistan" },
                { icon: "✉️", label: "Email", value: "mhaseebfarooqi2@gmail.com" },
                { icon: "📞", label: "Phone", value: "+92 3335369439" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs opacity-50 uppercase tracking-wider" style={{ color: "var(--fg)" }}>{item.label}</p>
                    <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl border"
                  style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
                  whileHover={{ scale: 1.15, borderColor: "var(--accent)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {[
              { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
              { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-sm font-medium mb-1 opacity-70" style={{ color: "var(--fg)" }}>
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  value={form[field.id as "name" | "email"]}
                  onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                    color: "var(--fg)",
                    // @ts-expect-error CSS variable
                    "--tw-ring-color": "var(--accent)",
                  }}
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1 opacity-70" style={{ color: "var(--fg)" }}>
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all resize-none"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)", color: "var(--fg)" }}
              />
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white text-sm"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(108,99,255,0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              {sent ? "✅ Message Sent!" : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

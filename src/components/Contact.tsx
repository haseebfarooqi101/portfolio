"use client";
import { useState, useRef } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { Send, Mail } from "lucide-react";

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
// ─── EmailJS config ───────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and sign up (free)
// 2. Add a Gmail service → copy the Service ID below
// 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}
//    Set "To Email" in the template to mhaseebfarooqi2@gmail.com
// 4. Copy your Public Key from Account → API Keys
const EMAILJS_SERVICE_ID  = "service_i6ljtg4";
const EMAILJS_TEMPLATE_ID = "template_o7j7f1o";
const EMAILJS_PUBLIC_KEY  = "exmDqlPVQS_eTE4nm";
// ──────────────────────────────────────────────────────────────────

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const socials = [
    { icon: <GithubIcon />, href: "https://github.com/haseebfarooqi101", label: "GitHub", newTab: true },
    { icon: <LinkedinIcon />, href: "https://www.linkedin.com/in/haseeb-farooqi-733364344", label: "LinkedIn", newTab: true },
    { icon: <Mail size={15} />, href: "mailto:mhaseebfarooqi2@gmail.com?subject=Project%20Inquiry&body=Hi%20Haseeb%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20with%20you.%0A%0A", label: "Email", newTab: false },
  ];

  return (
    <section
      id="contact"
      className="py-28 px-6 border-t"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Contact</p>
          <div className="divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: "var(--fg)" }}>
              Let&apos;s work<br />together.
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
              Have a project in mind or just want to say hi?
              I&apos;m always open to new opportunities and conversations.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                { label: "Location", value: "ISB, Pakistan" },
                { label: "Email", value: "mhaseebfarooqi2@gmail.com" },
                { label: "Availability", value: "Open to work" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 text-sm">
                  <span className="w-24 shrink-0" style={{ color: "var(--muted)" }}>{item.label}</span>
                  <span style={{ color: "var(--fg)" }}>{item.value}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.newTab ? "_blank" : undefined}
                  rel={s.newTab ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border transition-colors hover:opacity-60"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {[
              { name: "name", label: "Name", type: "text", placeholder: "Your name" },
              { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            ].map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-xs font-medium mb-1.5"
                  style={{ color: "var(--muted)" }}
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none focus:ring-1 transition-all"
                  style={{
                    backgroundColor: "var(--bg)",
                    borderColor: "var(--border)",
                    color: "var(--fg)",
                  }}
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none focus:ring-1 transition-all resize-none"
                style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)", color: "var(--fg)" }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all disabled:opacity-50"
              style={{ backgroundColor: "var(--fg)", color: "var(--bg)", borderColor: "var(--fg)" }}
              whileHover={{ opacity: 0.85 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send size={14} />
              {status === "sending" ? "Sending..." : status === "success" ? "Message Sent ✓" : status === "error" ? "Failed — Try Again" : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

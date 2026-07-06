import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { CONTACT_INFO, PROFILE } from "../../constants/data";
import SectionHeading from "../ui/SectionHeading";
import MagneticButton from "../ui/MagneticButton";

const ICONS = { Email: FiMail, Phone: FiPhone, Location: FiMapPin, GitHub: FiGithub };

function FloatingField({ label, name, type = "text", value, onChange, error, textarea }) {
  const Comp = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <Comp
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        rows={textarea ? 4 : undefined}
        className={`peer w-full resize-none rounded-xl border bg-white/5 px-4 pb-2.5 pt-5 text-sm text-white outline-none transition-colors placeholder-transparent ${
          error ? "border-red-400/60" : "border-white/10 focus:border-cyan/60"
        }`}
      />
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-4 top-3.5 text-sm text-white/40 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-cyan peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:text-[11px]"
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "That email doesn't look right.";
    if (!form.message.trim()) next.message = "Add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // No backend wired up — this simulates a send and opens a mail client
    // as a working fallback so the form is genuinely functional.
    setTimeout(() => {
      setStatus("sent");
      window.location.href = `mailto:${PROFILE.email}?subject=Portfolio contact from ${encodeURIComponent(
        form.name
      )}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
    }, 900);
  }

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="07"
          label="Get In Touch"
          title="Let's build something together."
          description="Open to internships, junior AI/web development roles, and collaborations. Reach out anytime."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {CONTACT_INFO.map((item) => {
              const Icon = ICONS[item.label];
              const content = (
                <div className="glass flex items-center gap-4 rounded-xl p-5 transition-colors hover:border-cyan/40">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-electric/30 to-purple/30 text-cyan">
                    <Icon />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">
                      {item.label}
                    </p>
                    <p className="text-sm text-white/85">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass space-y-5 rounded-2xl p-7"
            noValidate
          >
            <FloatingField
              label="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
            />
            <FloatingField
              label="Your Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />
            <FloatingField
              label="Message"
              name="message"
              textarea
              value={form.message}
              onChange={handleChange}
              error={errors.message}
            />

            <MagneticButton
              type="submit"
              variant="primary"
              className="w-full justify-center"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message Ready ✓"
                : "Send Message"}
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

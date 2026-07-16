import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaUser, FaPen } from "react-icons/fa";
import { PERSONAL_INFO, EMAILJS_CONFIG } from "../../constants/data";

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid.";
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = "Message cannot be empty.";
    } else if (formData.message.length < 10) {
      tempErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    const serviceId = EMAILJS_CONFIG.serviceId;
    const templateId = EMAILJS_CONFIG.templateId;
    const publicKey = EMAILJS_CONFIG.publicKey;

    // Standard simulation or real submission fallback
    if (serviceId === "YOUR_SERVICE_ID" || publicKey === "YOUR_PUBLIC_KEY") {
      // Simulate API call for local testing/development
      setTimeout(() => {
        setSubmitting(false);
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 5000); // clear success msg after 5s
      }, 1500);
    } else {
      // Real EmailJS Integration
      emailjs
        .send(
          serviceId,
          templateId,
          {
  from_name: formData.name,
  from_email: formData.email,
  reply_to: formData.email,
  message: formData.message,
  to_email: PERSONAL_INFO.email
},
          publicKey
        )
        .then(
          () => {
            setSubmitting(false);
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus(null), 5000);
          },
          (err) => {
            setSubmitting(false);
            setStatus("error");
            console.error("EmailJS Error: ", err);
          }
        );
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-20 relative w-full overflow-hidden">
      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-16 text-center select-none">
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
          Get In <span className="text-gradient-primary">Touch</span>
        </h2>
        <div className="section-header-underline mt-3" />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Contact details card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 p-6 md:p-8 glow-card rounded-2xl flex flex-col justify-between gap-8 h-full"
        >
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-extrabold text-2xl text-white">
              Get In Touch 
           </h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
I’m a passionate AI & Machine Learning Engineer and Full Stack Developer with a strong interest in Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and intelligent web applications. I'm actively seeking full-time opportunities where I can contribute, learn, and build impactful AI-driven solutions. If you're hiring, collaborating, or have an exciting project in mind, I'd love to connect with you.          </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <FaEnvelope className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xs text-white/40">Mail Me</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-sans text-sm font-semibold text-white/95 hover:text-primary transition-colors cursor-pointer"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                <FaMapMarkerAlt className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xs text-white/40">Location</span>
                <span className="font-sans text-sm font-semibold text-white/95">
                  Chennai,Tamil nadu, India
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact form card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 p-6 md:p-8 glass-panel rounded-2xl shadow-xl h-full flex flex-col justify-center"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-xs tracking-wider text-white/60 flex items-center gap-2">
                <FaUser className="text-primary w-3.5 h-3.5" />
                <span>YOUR NAME</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/5 border rounded-xl font-sans text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all ${
                  errors.name ? "border-red-500/50" : "border-white/10 focus:border-primary/50"
                }`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <span className="text-xs font-semibold text-red-400 mt-1">{errors.name}</span>
              )}
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-xs tracking-wider text-white/60 flex items-center gap-2">
                <FaEnvelope className="text-primary w-3.5 h-3.5" />
                <span>YOUR EMAIL</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/5 border rounded-xl font-sans text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all ${
                  errors.email ? "border-red-500/50" : "border-white/10 focus:border-primary/50"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-xs font-semibold text-red-400 mt-1">{errors.email}</span>
              )}
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-xs tracking-wider text-white/60 flex items-center gap-2">
                <FaPen className="text-primary w-3 h-3" />
                <span>YOUR MESSAGE</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className={`w-full px-4 py-3 bg-white/5 border rounded-xl font-sans text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none ${
                  errors.message ? "border-red-500/50" : "border-white/10 focus:border-primary/50"
                }`}
                placeholder="Write your message..."
              />
              {errors.message && (
                <span className="text-xs font-semibold text-red-400 mt-1">{errors.message}</span>
              )}
            </div>

            {/* Submit Button & Status Alerts */}
            <div className="flex flex-col gap-4 mt-2">
              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-3.5 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold rounded-xl cursor-pointer shadow-[0_0_20px_rgba(145,94,255,0.25)] flex items-center justify-center gap-2 group transition-all duration-300 ${
                  submitting ? "opacity-60 cursor-not-allowed" : "hover:-translate-y-0.5"
                }`}
              >
                <span>{submitting ? "Sending..." : "Send Email"}</span>
                <FaPaperPlane className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold flex items-center gap-2.5"
                  >
                    <FaCheckCircle className="w-5 h-5 shrink-0" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold"
                  >
                    Unable to send your message. Please contact me directly at {PERSONAL_INFO.email}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

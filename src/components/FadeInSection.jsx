import { motion } from "framer-motion";

// Fade-in-on-scroll wrapper (framer-motion), matching the reference site's
// subtle reveal. Renders a <section> with the given id/className.
export default function FadeInSection({ id, className = "", children }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home", label: "about" },
  { id: "news", label: "news" },
  { id: "publications", label: "publications" },
  { id: "contact", label: "contact" },
];

// Fixed translucent top nav with monospace lowercase links and an active-section
// highlight driven by scroll position.
export default function Nav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a className="brand" href="#home">
          dongyan lin
        </a>
        <ul>
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? "active" : ""}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

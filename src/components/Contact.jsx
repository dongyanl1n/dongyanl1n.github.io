import {
  FaEnvelope,
  FaGoogle,
  FaGithub,
  FaLinkedin,
  FaFilePdf,
} from "react-icons/fa";
import { SiBluesky, SiMeta } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import FadeInSection from "./FadeInSection";
import { profile, links } from "../data/site";

const ITEMS = [
  { icon: <FaEnvelope />, label: profile.email, href: links.email },
  { icon: <FaGoogle />, label: "google scholar", href: links.scholar },
  { icon: <FaGithub />, label: "github", href: links.github },
  { icon: <FaLinkedin />, label: "linkedin", href: links.linkedin },
  { icon: <SiBluesky />, label: "bluesky", href: links.bluesky },
  { icon: <FaXTwitter />, label: "x / twitter", href: links.twitter },
  { icon: <SiMeta />, label: "meta ai profile", href: links.metaProfile },
  { icon: <FaFilePdf />, label: "cv", href: links.cv },
];

export default function Contact() {
  return (
    <FadeInSection id="contact">
      <h2>Contact</h2>
      <div className="contact-grid">
        {ITEMS.map((it) => (
          <a
            key={it.label}
            className="contact-link"
            href={it.href}
            target={it.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              it.href.startsWith("mailto:") ? undefined : "noopener noreferrer"
            }
          >
            {it.icon}
            {it.label}
          </a>
        ))}
      </div>
    </FadeInSection>
  );
}

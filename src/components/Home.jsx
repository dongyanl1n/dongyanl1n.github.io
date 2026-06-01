import {
  FaGoogle,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";
import { SiBluesky, SiMeta } from "react-icons/si";
import { profile, links } from "../data/site";

// Home / masthead = the "About" content: photo, name, role, bio, interests,
// and the social icon row.
export default function Home() {
  return (
    <section id="home">
      <div className="home-text">
        <h1>
          {profile.name} <span className="grad1">/ {profile.nameZh}</span>
        </h1>
        <div className="tagline">
          pronounced <em>{profile.pronunciation}</em> · {profile.pronouns}
        </div>

        <p>
          <span className="role">{profile.role}</span>,{" "}
          <a href={profile.affiliationUrl} target="_blank" rel="noopener noreferrer">
            {profile.affiliationText}
          </a>{" "}
          · {profile.location}
        </p>

        {/* Bio prose (from the current site). Edit here. */}
        <p>
          Hello there! My name is Dongyan (pronounced <em>Dong-yan</em>). I am a
          researcher in the{" "}
          <a href={profile.affiliationUrl} target="_blank" rel="noopener noreferrer">
            Fundamental AI Research (FAIR) team at Meta
          </a>{" "}
          in NYC, working on building AI models that think and act more
          human-like.
        </p>
        <p>
          Previously I did my PhD at the{" "}
          <a href="http://mcgill.ca/ipn" target="_blank" rel="noopener noreferrer">
            Integrated Program in Neuroscience at McGill University
          </a>{" "}
          and{" "}
          <a href="http://mila.quebec/en" target="_blank" rel="noopener noreferrer">
            Mila
          </a>
          , supervised by{" "}
          <a href="http://linclab.org" target="_blank" rel="noopener noreferrer">
            Blake Richards
          </a>
          . My research interest lies at the intersection of artificial
          intelligence and neuroscience. Specifically, I am interested in
          unraveling the general principles that govern both biological and
          artificial intelligence, through the lens of representation learning.
        </p>

        <div className="interests">
          {profile.interests.map((it) => (
            <span className="chip" key={it}>
              {it}
            </span>
          ))}
        </div>

        <div className="social-row">
          <a
            href={links.scholar}
            target="_blank"
            rel="noopener noreferrer"
            title="Google Scholar"
            aria-label="Google Scholar"
          >
            <FaGoogle aria-hidden="true" />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label="GitHub"
          >
            <FaGithub aria-hidden="true" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a
            href={links.bluesky}
            target="_blank"
            rel="noopener noreferrer"
            title="Bluesky"
            aria-label="Bluesky"
          >
            <SiBluesky aria-hidden="true" />
          </a>
          <a
            href={links.metaProfile}
            target="_blank"
            rel="noopener noreferrer"
            title="Meta AI profile"
            aria-label="Meta AI profile"
          >
            <SiMeta aria-hidden="true" />
          </a>
          <a href={links.email} title="Email" aria-label="Email">
            <FaEnvelope aria-hidden="true" />
          </a>
          <a
            href={links.cv}
            target="_blank"
            rel="noopener noreferrer"
            title="CV (PDF)"
            aria-label="CV (PDF)"
          >
            <FaFilePdf aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="photo-wrap">
        <div className="photo-frame">
          <img src={profile.photo} alt={`${profile.name} headshot`} />
        </div>
      </div>
    </section>
  );
}

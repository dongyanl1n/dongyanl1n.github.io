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

        {/* Bio prose. Edit here. */}
        <p>
          I'm a <strong>Postdoctoral Researcher</strong> at{" "}
          <a href={profile.affiliationUrl} target="_blank" rel="noopener noreferrer">
            Meta FAIR
          </a>
          , working at the intersection of <strong>human cognition</strong> and{" "}
          <strong>artificial intelligence</strong>. I build AI systems inspired
          by how humans learn — through{" "}
          <a
            href="https://www.nature.com/articles/s41598-023-49847-y"
            target="_blank"
            rel="noopener noreferrer"
          >
            reinforcement learning
          </a>
          ,{" "}
          <a
            href="https://arxiv.org/abs/2605.19130"
            target="_blank"
            rel="noopener noreferrer"
          >
            multimodal grounding
          </a>
          , and{" "}
          <a
            href="https://arxiv.org/abs/2606.06464"
            target="_blank"
            rel="noopener noreferrer"
          >
            autonomous exploration
          </a>{" "}
          — and use AI as a tool to advance scientific discovery in cognitive
          and neuroscience.
        </p>
        <p>
          I'm particularly interested in making foundation models more{" "}
          <strong>creative</strong>: overcoming the{" "}
          <a
            href="https://arxiv.org/abs/2505.09614"
            target="_blank"
            rel="noopener noreferrer"
          >
            cognitive biases they inherit from human-generated data
          </a>{" "}
          and enabling them to produce genuinely novel scientific insights. I
          also study the{" "}
          <a
            href="https://www.biorxiv.org/content/10.1101/2023.11.03.565500v1"
            target="_blank"
            rel="noopener noreferrer"
          >
            alignment between representations in large language models and the
            human brain
          </a>
          , using{" "}
          <a
            href="https://arxiv.org/abs/2406.18926"
            target="_blank"
            rel="noopener noreferrer"
          >
            mechanistic interpretability
          </a>{" "}
          to bridge artificial and biological intelligence.
        </p>
        <p>
          I received my{" "}
          <a
            href="https://www.proquest.com/openview/c38450ee62fa903a3344824426752e5d/1?pq-origsite=gscholar&cbl=18750&diss=y"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ph.D.
          </a>{" "}
          from{" "}
          <a href="http://mcgill.ca/ipn" target="_blank" rel="noopener noreferrer">
            McGill University
          </a>
          , where I studied brain–AI representational alignment.
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

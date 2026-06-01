import { useMemo, useState } from "react";
import FadeInSection from "./FadeInSection";
import data from "../data/publications.json";

const ME = ["D Lin", "Dongyan Lin"];

// Render an author list, bolding Dongyan.
function Authors({ authors }) {
  const parts = authors.split(/,\s*/);
  return (
    <span className="pub-authors">
      {parts.map((name, i) => {
        const isMe = ME.includes(name.trim());
        return (
          <span key={i}>
            <span className={isMe ? "me" : ""}>{name}</span>
            {i < parts.length - 1 ? ", " : ""}
          </span>
        );
      })}
    </span>
  );
}

// Parse the arXiv year+month (YYMM) from a venue string when present, e.g.
// "arXiv:2512.21204" or "arXiv preprint arXiv:2505.09614" -> 2512 / 2505.
// Returns -1 when no arXiv id is found so such entries sort last (stable).
function arxivYYMM(venue = "") {
  const m = /arxiv:\s*(\d{4})\.\d/i.exec(venue);
  return m ? parseInt(m[1], 10) : -1;
}

const LINK_LABELS = {
  arxiv: "arxiv",
  biorxiv: "biorxiv",
  doi: "journal",
  scholar: "scholar",
};

function PubLinks({ links = {} }) {
  const keys = Object.keys(links);
  if (keys.length === 0) return null;
  return (
    <div className="pub-links">
      {keys.map((k) => (
        <a
          key={k}
          className="pub-link"
          href={links[k]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {LINK_LABELS[k] || k}
        </a>
      ))}
    </div>
  );
}

export default function Publications() {
  const pubs = useMemo(
    () =>
      [...data.publications].sort(
        (a, b) => b.year - a.year || arxivYYMM(b.venue) - arxivYYMM(a.venue)
      ),
    []
  );

  const types = useMemo(() => {
    const set = new Set(pubs.map((p) => p.type));
    return ["all", ...Array.from(set)];
  }, [pubs]);

  const [filter, setFilter] = useState("all");
  const shown = filter === "all" ? pubs : pubs.filter((p) => p.type === filter);

  return (
    <FadeInSection id="publications">
      <h2>Publications</h2>

      <div className="pub-filters">
        {types.map((t) => (
          <button
            key={t}
            className={`my-button ${filter === t ? "active" : ""}`}
            onClick={() => setFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="pub-list">
        {shown.map((p) => (
          <div className="pub-card" key={p.title}>
            <div className="pub-title">{p.title}</div>
            <Authors authors={p.authors} />
            <div className="pub-meta">
              <span className="pub-year">{p.year}</span>
              <span className="pub-venue">{p.venue}</span>
              {p.citations > 0 && (
                <span className="pub-cite">· {p.citations} citations</span>
              )}
              <PubLinks links={p.links} />
            </div>
          </div>
        ))}
      </div>

      <p style={{ marginTop: "1rem", fontSize: "0.8rem", color: "var(--med-gray)" }}>
        Full list on{" "}
        <a href={data.scholar_profile} target="_blank" rel="noopener noreferrer">
          Google Scholar
        </a>
        . Citation counts captured 2026-06-01 and will drift over time.
      </p>
    </FadeInSection>
  );
}

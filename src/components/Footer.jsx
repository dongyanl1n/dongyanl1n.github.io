import { profile } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <span>
        © {year} {profile.name}
      </span>
      <span>
        design adapted from{" "}
        <a
          href="https://catherinesyeh.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          catherinesyeh.github.io
        </a>{" "}
        · <a href="#home">back to top ↑</a>
      </span>
    </footer>
  );
}

import FadeInSection from "./FadeInSection";
import { news } from "../data/site";

// Dated update entries (80px date column + text), matching the reference layout.
export default function News() {
  return (
    <FadeInSection id="news">
      <h2>News</h2>
      <div className="news-list">
        {news.map((item, i) => (
          <div className="news-item" key={i}>
            <div className="date">{item.date}</div>
            {/* news text may contain inline links from the data file */}
            {/* SECURITY: item.html must remain trusted, static build-time
                content (authored in src/data). Never feed user-supplied input
                here — dangerouslySetInnerHTML would otherwise enable XSS. */}
            <div
              className="news-text"
              dangerouslySetInnerHTML={{ __html: item.html }}
            />
          </div>
        ))}
      </div>
    </FadeInSection>
  );
}

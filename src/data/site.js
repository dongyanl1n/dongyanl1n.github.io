// =========================================================================
// Site content for Dongyan Lin's website.
// Sourced from .content/CONTENT.md (gathered 2026-06-01).
// =========================================================================

export const profile = {
  name: "Dongyan Lin",
  nameZh: "林冬妍",
  pronunciation: "Dong-yan",
  pronouns: "she/her",
  role: "Postdoctoral Researcher",
  affiliationText: "Fundamental AI Research (FAIR) team at Meta",
  affiliationUrl: "https://ai.meta.com/research/",
  location: "New York, USA",
  email: "dongyanlin@meta.com",
  photo: "/photo.jpg", // .content/assets/current_site_photo.JPG -> public/photo.jpg
  photoHover: "/ccn_2026.png", // shown on hover in place of `photo` (see Home.jsx)
  // NB: the bio prose lives as JSX in src/components/Home.jsx (so the inline
  // links render cleanly). Edit it there.
  interests: [
    "AI x neuroscience",
    "representation learning",
    "multimodal learning",
    "vision-language models",
    "causal reasoning in language agents",
    "human-like AI",
  ],
};

// Social / scholarly links used in the masthead and the Contact section.
export const links = {
  scholar: "https://scholar.google.com/citations?user=t_Xg9MIAAAAJ&hl=en",
  github: "https://github.com/dongyanl1n",
  linkedin: "https://linkedin.com/in/dongyanl1n",
  bluesky: "https://bsky.app/profile/dongyanl1n.bsky.social",
  metaProfile: "https://ai.meta.com/people/2023351861723323/dongyan-lin/",
  email: "mailto:dongyanlin@meta.com",
  // Twitter/X handle confirmed.
  twitter: "https://twitter.com/dongyanl1n",
  // CV from the current site (kept at repo root /uploads/cv.pdf, copied to public).
  cv: "/cv.pdf",
};

// News / updates. Newest first. `date` is a month+year label; `html` may
// contain inline links (rendered via dangerouslySetInnerHTML in News.jsx).
export const news = [
  {
    date: "Jul 2026",
    html: 'Our <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=t_Xg9MIAAAAJ&citation_for_view=t_Xg9MIAAAAJ:Se3iqnhoufwC" target="_blank" rel="noopener noreferrer">EgoBabyVLM</a> work was covered in <a href="https://www.wired.com/story/ai-isnt-smarter-than-a-baby-yet/" target="_blank" rel="noopener noreferrer">WIRED</a>.',
  },
  {
    date: "Jun 2026",
    html: "I'm attending <a href=\"https://icml.cc/\" target=\"_blank\" rel=\"noopener noreferrer\">ICML 2026</a> in Seoul, Korea from July 6\u201311 \u2014 say hi if you're around, I'd love to meet up!",
  },
  {
    date: "May 2026",
    html: 'Excited to share our <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=t_Xg9MIAAAAJ&citation_for_view=t_Xg9MIAAAAJ:Se3iqnhoufwC" target="_blank" rel="noopener noreferrer">EgoBabyVLM</a> paper! Check out our <a href="https://github.com/facebookresearch/egobabyvlm" target="_blank" rel="noopener noreferrer">GitHub repo</a> and <a href="https://facebookresearch.github.io/egobabyvlm" target="_blank" rel="noopener noreferrer">challenge page</a>.',
  },
  {
    date: "Apr 2026",
    html: 'Our collaboration paper "<a href="https://arxiv.org/abs/2606.06464" target="_blank" rel="noopener noreferrer">Human Adults and LLMs as Scientists: Who Benefits from Active Exploration?</a>" was accepted at CogSci 2026.',
  },
  {
    date: "Apr 2026",
    html: 'Our paper from the DevAI team, "<a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=t_Xg9MIAAAAJ&sortby=pubdate&citation_for_view=t_Xg9MIAAAAJ:roLk4NBRz8UC" target="_blank" rel="noopener noreferrer">SpidR-Adapt: A Universal Speech Representation Model for Few-Shot Adaptation</a>", was accepted at ACL 2026 (Main conference).',
  },
  {
    date: "Oct 2025",
    html: "I'm serving on the program committee of <a href=\"https://2026.ccneuro.org/\" target=\"_blank\" rel=\"noopener noreferrer\">CCN 2026</a> — see you in New York!",
  },
  {
    date: "Jul 2025",
    html: 'Our collaboration paper "<a href="https://arxiv.org/abs/2505.09614" target="_blank" rel="noopener noreferrer">Language Agents Mirror Human Causal Reasoning Biases: How Can We Help Them Think Like Scientists?</a>" was accepted at COLM 2025.',
  },
  {
    date: "Dec 2024",
    html: "Defended my PhD and started a postdoc at Meta FAIR.",
  },
];

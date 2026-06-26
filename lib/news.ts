export interface NewsSegment {
  text: string
  /** When true, this segment is a major keyword and is rendered in mint green. */
  key?: boolean
}

export interface NewsItem {
  date: string
  /** Ordered text segments; `key` segments are highlighted. */
  content: NewsSegment[]
}

export const news: NewsItem[] = [
  {
    date: "Jun 18, 2026",
    content: [
      { text: "Preprint available for " },
      { text: "LRE", key: true },
      { text: " which beats " },
      { text: "Microsoft's latest work ACON", key: true },
      { text: " reducing peak context size by ~52%, with " },
      { text: "zero", key: true },
      { text: " added neural cost and matches the accuracy of keeping the entire history" },
    ],
  },

  {
    date: "May 26, 2026",
    content: [
      { text: "AgentCollabBench", key: true },
      { text: " accepted at FAGEN" },
      { text: "@ICML 2026", key: true },
      { text: " (Non archival) - 900 tasks that catch when a multi-agent LLM team's final answer is right but collaboartive reasoning was broken." },
    ],
  },
  {
    date: "May 9, 2026",
    content: [
      { text: "Served as a Judge"},
      { text: " for " },
      { text: " International AI Olympiad (BD)", key: true },
    ],
  },
  {
    date: "May 9, 2026",
    content: [
      { text: "Served as a Judge"},
      { text: " at a" },
      { text: " National Hackathon 2026", key: true },
      { text: " (NDCIT)" },
    ],
  },
]

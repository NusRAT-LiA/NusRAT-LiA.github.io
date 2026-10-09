export interface NewsSegment {
  text: string
  /** When true, this segment is a major keyword and is rendered in mint green. */
  key?: boolean
  /** When set, this segment renders as an underlined link opening in a new tab. */
  href?: string
}

export interface NewsItem {
  date: string
  /** Ordered text segments; `key` segments are highlighted, `href` segments render as underlined links. */
  content: NewsSegment[]
}

export const news: NewsItem[] = [

  {
    date: "Oct 8, 2026",
    content: [
      { text: "Google DeepMind", key:true },
      {text:" invited "},
      { text: "AgentCollabBench", href: "https://arxiv.org/pdf/2605.08647", key: true },
      { text: " for an upcoming talk in San Francisco." }
    ]
  },
  {
    date: "Oct 6, 2026",
    content: [
      { text: "Microsoft" , key:true},
      {text:" invited "},
      { text: "AgentCollabBench", href: "https://arxiv.org/pdf/2605.08647", key: true },
      { text: " for an upcoming talk." }
    ]
  },


   {
    date: "Sep 25, 2026",
    content: [
      { text: "AgentCollabBench" , href: "https://arxiv.org/pdf/2605.08647" , key:true},
      { text: " has been Accepted to " },
      { text: "NeurIPS'26!!!", key: true },
    ],
  },
  {
    date: "Aug 20, 2026",
    content: [
      { text: "3x EMNLP!!!", key: true },
      { text: "(LRE" , href: "https://arxiv.org/pdf/2606.20954" },
      { text: "  , " },
      { text: "AgentCheck ",  href: "https://arxiv.org/pdf/2607.11098" },
      {text: "and" },
      { text: " Register Shifts Break LLM Safety) " ,  href: "https://banglallm.github.io/banglasafe/index.html" },
      { text: "Accepted to " },
      { text: "EMNLP'26)", key: true },
    ],
  },
  {
    date: "Aug, 2026",
    content: [
      { text: "Joined as an RA at the " },
      { text: "University of Toronto", key: true },
      { text: " under " },
      { text: "Prof. Ishtiaque Ahmed ", key: true, href: "https://www.cs.toronto.edu/~ishtiaque/" }
   
    ],
  },
  {
    date: "Jun 27, 2026",
    content: [
      { text: "Bangladesh won " },
      { text: "Three GOLD", key: true },
      { text: " in the" },
      { text: " Asia Pacific Olympiad in AI", key: true },
      { text: " other Top contenders being CHINA, JAPAN, RUSSIA, AUSTRALIA...(Proud Instructor Moment!) " },
      { text: "see", key: true, href: "https://apoai.org/apoai2026" },
    ],
  },
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
      { text: " (Non archival) - 900 tasks that catch when a multi-agent LLM team's final answer is right but collaborative reasoning was broken." },
    ],
  },
  // {
  //   date: "May 9, 2026",
  //   content: [
  //     { text: "Served as a Judge"},
  //     { text: " for " },
  //     { text: " International AI Olympiad (BD)", key: true },
  //   ],
  // },
  // {
  //   date: "May 9, 2026",
  //   content: [
  //     { text: "Served as a Judge"},
  //     { text: " at a" },
  //     { text: " National Hackathon 2026", key: true },
  //     { text: " (NDCIT)" },
  //   ],
  // },
]

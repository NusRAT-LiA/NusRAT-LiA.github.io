export type Publication = {
  title: string
  authors: string
  affiliations: string[]
  venue: string
  year: string
  tags?: string[]
  photo?: string
  // Optional link buttons (rendered below the venue row when present)
  arxiv?: string
  acl?: string
  poster?: string
  demo?: string
  posterType?: string
  github?: string
  website?: string
  jama?: string
  
}

// Main research publications
export const mainPublications: Publication[] = [
  {
    title: "AgentCheck: A Reproduce–Intervene–Mitigate Workbench for LLM Agents over MCP",
    authors: "Aritra Mazumder; Nusrat Jahan Lia",
    affiliations: [ "University of Utah", "University of Dhaka"],
    venue: " ",
    year: "2026",
    arxiv: "https://arxiv.org/pdf/2607.11098",
    photo: "research/agentcheck.png",
    demo:"https://www.youtube.com/watch?v=h_xmHC-hILU",
    github:"https://github.com/aritra741/AgentCheck"
    
  },
  {
    title: "Learning What Not to Forget: Long-Horizon Agent Memory from a Few Kilobytes of Learning",
    authors: "Nusrat Jahan Lia; Aritra Mazumder",
    affiliations: [ "University of Dhaka","University of Utah"],
    venue: " ",
    year: "2026",
    arxiv: "https://arxiv.org/pdf/2606.20954",
    photo: "research/lre.png",
    github: "https://github.com/NusRAT-LiA/LRE"
  },
  {
    title: "AGENTCOLLABBENCH: Diagnosing When Good Agents Make Bad Collaborators",
    authors: "Aritra Mazumder; Shubhashis Roy Dipta; Nusrat Jahan Lia; et al.",
    affiliations: ["University of Utah", "University of Maryland, Baltimore County", "University of Virginia", "University of Dhaka"],
    venue: " ",
    year: "2026",
    arxiv: "https://arxiv.org/pdf/2605.08647",
    photo: "research/agentcollab.png",
    website: "https://www.aritramazumder.com/agentcollabbench/"

  },
  {
    title: "Register Shifts Break LLM Safety: A Bengali Benchmark with Culturally Grounded Harms",
    authors: "Naymul Islam, Nusrat Jahan Lia, Shubhashis Roy Dipta (equal first authors) et al.",
    affiliations: ["University of Dhaka", "University of Maryland, Baltimore County", "BanglaLLM"],
    venue: " ",
    year: "2026",
    // arxiv: "https://arxiv.org/pdf/2605.08647",
    photo: "research/banglasafe.png",
    website: "https://banglallm.github.io/banglasafe/index.html"

  },
  {
    title: "Cross-Lingual Sentiment Misalignment: Auditing Multilingual Language Models for Inversion Risk, Dialectal Representation, and Affective Stability",
    authors: "Nusrat Jahan Lia; Shubhashis Roy Dipta",
    affiliations: ["University of Dhaka", "University of Maryland, Baltimore County"],
    venue: "mellm @ ACL 2026; Published: ACL Anthology",
    year: "2026",
    // arxiv: "https://arxiv.org/abs/2602.17469",
    photo: "research/bialign.png",
    acl:"https://aclanthology.org/2026.mellm-1.12/",
  },
  {
    title: "Read Between the Lines: A Benchmark for Uncovering Political Bias in Bangla News Articles",
    authors: "Nusrat Jahan Lia; Shubhashis Roy Dipta, PhD; Dr. Abdullah Khan Zehady; Naymul Islam; Madhusodan Chakraborty; Abdullah Al Wasif",
    affiliations: ["University of Dhaka", "University of Maryland, Baltimore County","Purdue University", "Perspectivity"],
    venue: "Accepted: AACL IJCNLP BLP; Published: ACL Anthology",
    year: "2025",
    acl: "https://aclanthology.org/2025.banglalp-1.5/",
    photo: "research/fig1.png",
    website:"https://nusrat-lia.github.io/BanglaBias/"
  },
  {
    title: "Exploring Cross-Lingual Knowledge Transfer via Transliteration-Based MLM Fine-Tuning for Critically Low-resource Chakma Language",
    authors: "Adity Khisa; Nusrat Jahan Lia; Tasnim Mahfuz Nafis; Zarif Masud; Tanzir Pial, PhD; Dr.Shebuti Rayana; Dr.Ahmedul Kabir",
    affiliations: ["University of Dhaka", "BARTA", "State University of New York, Old Westbury", "Stony Brook University", "Toronto Metropolitan University"],
    venue: "Accepted: AACL IJCNLP BLP; Published: ACL Anthology",
    year: "2025",
    acl: "https://aclanthology.org/2025.banglalp-1.23/",
    photo: "research/chakma.png",
  },
]

// Ongoing work — active projects with a working title and a summary.
export type OngoingWork = {
  title: string
  affiliations: string[]
  /** Short summary shown in the "See Details" dialog. */
  summary: string
  photo?: string
}

export const ongoingWork: OngoingWork[] = [
  {
    title: "A Difficulty-Parametric Diagnostic Benchmark for Tool-Using Agents with 11 Failure Attribution, including security collapse in a Simulated World",
    affiliations: ["UMBC"],
    summary:
      "This is an agent benchmark built on a simulated world where we make several failure modes co-active in a single hard task, so a heuristic that dodges one triggers another. The Failure modes are - Acted on a wrong reading of the instruction, Violated a guardrail to maximize a stated metric, Took an action the actor lacked permission for, Followed an adversarial embedded instruction and many more.",
  },
  {
    title: "When Confidence Becomes Misleading: Runtime Monitoring in Multi-Step LLM Agents",
    affiliations: ["University of Utah"],
    summary:
      "Investigate trajectory-dependent confidence estimation in multi-step LLM agents by developing runtime monitors and adaptive controllers that use hidden-state and output-level signals for failure detection and compute-efficient execution.",
  }
]

// Contribution section - Digital health and adult attitude work
export const contributionPublications: Publication[] = [
  {
    title: "Adult Attitudes about School Smartphone Bans: A Global Survey of 35 Countries",
    authors: "Dimitri A. Christakis, MD, MPH; Nusrat Jahan Lia; Lauren Hale, PhD",
    affiliations: ["Renaissance School of Medicine, Stony Brook University", "Seattle Children's Research Institute","University of Washington", "University of Dhaka", "ITHRA"],
    venue: "Accepted, Published: The Journal of American Medical Association; doi: 10.1001/jamapediatrics.2025.5736",
    year: "2025",
    jama: "https://jamanetwork.com/journals/jamapediatrics/fullarticle/2843672",
    photo: "research/jama.png",
  },
  {
    title: "Does Gaming Disorder Symptom Status Predict Poorer Sleep Quality?",
    authors: "Nusrat Jahan Lia; Lauren Hale, PhD; Justin Thomas, PhD; Dimitri A. Christakis, MD, MPH; Mamunar Rashid, PhD",
    affiliations: ["University of Dhaka", "Renaissance School of Medicine, Stony Brook University", "Seattle Children's Research Institute", "University of Washington", "ITHRA"],
    venue: "Accepted: World Sleep 2025, Singapore",
    year: "2025",
    poster: "posters/world-sleep.png",
    posterType: "png",
    photo: "posters/world-sleep.png",
  },
  {
    title: 'Does Spending "Too Much Time Online" Predict Sleep Health and Mental Health?',
    authors: "Lauren Hale, PhD; Nusrat Jahan Lia; Sohailul Islam Alvi; Gina Marie Mathew, PhD; Dimitri A. Christakis, MD, MPH; Mamunar Rashid, PhD; Yasmin Aljedawi; Melisa Valle, PhD",
    affiliations: ["Renaissance School of Medicine, Stony Brook University", "Seattle Children's Research Institute", "University of Dhaka", "University of Washington", "Imperial College London", "ITHRA"],
    venue: "Accepted: Association of Professional Sleep Societies. Seattle, Washington, USA",
    year: "2025",
    poster: "posters/sleep2025.svg",
    posterType: "svg",
    photo: "posters/sleep2025.svg",
  },
  {
    title: "International Public Opinion on Digital Media Use for Youth and Schools",
    authors: "Lauren Hale, PhD; Nusrat Jahan Lia; Sohailul Islam Alvi; Gina Marie Mathew, PhD; Dimitri A. Christakis, MD, MPH; Mamunar Rashid, PhD; Yasmin Aljedawi; Melisa Valle, PhD",
    affiliations: ["Renaissance School of Medicine, Stony Brook University", "Seattle Children's Research Institute", "University of Dhaka", "ITHRA", "University of Washington", "Imperial College London"],
    venue: "Accepted: Digital Media and Developing Minds International Scientific Congress, Washington DC",
    year: "2025",
    poster: "posters/CS2025Poster_Hale.svg",
    posterType: "svg",
    photo: "posters/CS2025Poster_Hale.svg",
  },
]

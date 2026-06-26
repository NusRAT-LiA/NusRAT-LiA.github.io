export interface BlogPost {
  title: string
  excerpt: string
  image: string
  date: string
  readTime?: string
  link: string
}

export const blogPosts: BlogPost[] = [
  {
    title: "When Good Agents Make Bad Collaborators",
    excerpt:
      "Hidden Behavioral and Reliability Failures in Multi-Agent LLMs Beyond Task Accuracy",
    image: "projects/agentcollab.png?height=200&width=300",
    date: "2026-05-12",
    readTime: "6 min read",
    link: "https://medium.com/@nusratlia/when-good-agents-make-bad-collaborators-26baaabd5aba",
  },
  {
    title: "Thinking aloud Federated Code Intelligence: Privacy, Retrieval, and Knowledge Asymmetry",
    excerpt:
      "I didn't just want to rely on some LLM-generated response or forum question answers. I kept wondering where I could learn from actual, recent, battle-tested approaches used by companies currently operating these systems at scale.",
    image: "blog/blog7.png?height=200&width=300",
    date: "2026-01-11",
    readTime: "4 min read",
    link: "https://medium.com/@nusratlia/thinking-aloud-federated-code-intelligence-privacy-retrieval-and-knowledge-asymmetry-0bf4e0081d8f?postPublishedType=initial",
  },
  {
    title: "The Art of Knowing When to Stop: Early Stopping in AI and Life",
    excerpt:
      "Consider stopping soon. How many times have we all needed that exact warning in our lives?",
    image: "blog/blog6.png?height=200&width=300",
    date: "2025-08-20",
    readTime: "4 min read",
    link: "https://medium.com/@nusratlia/the-art-of-knowing-when-to-stop-early-stopping-in-ai-and-life-c863c84aa20d",
  },
  {
    title: "The Canvas of Resistance: On Differentiation, Algorithms, and the Mathematics of Justice",
    excerpt:
      "Thinking aloud: in a world that systematically flattens difference into hierarchy, what is means to be a differentiator?",
    image: "blog/blog5.png?height=200&width=300",
    date: "2025-08-07",
    readTime: "2 min read",
    link: "https://medium.com/@nusratlia/the-canvas-of-resistance-on-differentiation-algorithms-and-the-mathematics-of-justice-2447686e6ec9",
  },
  {
    title: "Breaking Down Language Barriers: How AI Can Learn to Fix Bangla Grammar",
    excerpt:
      "Exploring how synthetic data and AI can bridge the grammar gap for Bangla speakers.",
    image: "blog/blog4.webp?height=200&width=300",
    date: "2025-08-03",
    readTime: "4 min read",
    link: "https://medium.com/@nusratlia/breaking-down-language-barriers-how-ai-can-learn-to-fix-bangla-grammar-ef477e991f38",
  },
  // {
  //   title: "How AI is Learning to Spot Bias (And Why It Matters More Than Ever)",
  //   excerpt:
  //     "We’re living through what researchers call “hyperpartisan” news : content written with such extreme ideological manipulation that it barely resembles reality.",
  //   image: "blog/blog3.webp?height=200&width=300",
  //   date: "2025-07-24",
  //   readTime: "6 min read",
  //   link: "https://medium.com/@nusratlia/how-ai-is-learning-to-spot-bias-and-why-it-matters-more-than-ever-d51b299266a3",
  // },
  // {
  //   title: "What if our most fundamental assumption about environmental economics, that innovation leads to sustainability, is fundamentally flawed?",
  //   excerpt:
  //     "A data driven analysis on development pathways for nations.",
  //   image: "blog/blog2.webp?height=200&width=300",
  //   date: "2025-04-22",
  //   readTime: "7 min read",
  //   link: "https://medium.com/@nusratlia/what-if-our-most-fundamental-assumption-about-environmental-economics-that-innovation-leads-to-a23bc44a0c68",
  // },
  {
    title: "Can Diffusion Models Reshape Privacy Boundaries?",
    excerpt:
      "Exploring How Diffusion Models Challenge and Redefine Privacy in AI-Generated Data",
    image: "blog/blog1.png?height=200&width=300",
    date: "2025-03-12",
    readTime: "4 min read",
    link: "https://medium.com/@nusratlia/the-paradox-of-data-can-diffusion-models-reshape-privacy-boundaries-ab6b315fe157",
  },
]

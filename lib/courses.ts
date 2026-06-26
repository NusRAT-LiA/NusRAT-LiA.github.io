export interface CourseModule {
  module: number
  title: string
  topics?: string[]
  slides?: { title: string; pdfFile: string }
}

export interface CourseSyllabus {
  overview?: string
  objectives?: string[]
  prerequisites?: string[]
  topics?: string[]
  assessment?: string[]
}

export interface CourseStudentProject {
  title: string
  student?: string
  image?: string
}

export interface Course {
  id: string
  title: string
  thumbnail?: string
  /** Full description shown on the main /courses page. */
  description?: string
  /** Short description shown only in the home-page left panel (narrow column). */
  descriptionHome?: string
  discipline?: string
  level?: string
  status?: string
  code?: string
  term?: string
  location?: string
  duration?: string
  enrollment?: number
  syllabus?: CourseSyllabus
  modules?: CourseModule[]
  studentProjects?: CourseStudentProject[]
}

export const courses: Course[] = [
  {
    id: "slm",
    title: "Building Small Language Model: From Foundations to Bangla Financial Text Generation",
    thumbnail: "projects/slm.png",
    description:
      "Learn the core principles and techniques of language models while building a small Bangla language model that generates financial articles. I teach this course offline at the Institute of Information Technology, University of Dhaka. Below are some of the modules covered in the course. To enroll in the most updated course classes, contact BARTA Lab (barta-research-lab.github.io).",
    descriptionHome:
      "I teach this course offline at the Institute of Information Technology, University of Dhaka. To enroll in the most updated course classes, contact BARTA Lab (barta-research-lab.github.io).",
    syllabus: {
      overview:
        "This course provides hands-on experience in building small language models specifically for Bangla financial text generation. Students will learn the fundamentals of natural language processing, transformer architectures, and domain-specific model training.",
      objectives: [
        "Explain the fundamental concepts of language models, their applications, and why small language models are important.",
        "Implement efficient tokenization and binary data storage for high-performance training.",
        "Understand and build the key components of a Transformer-based Small Language Model (SLM) from scratch in PyTorch",
        "Mathematical understanding of Attention, Causal self-attention, Multi-head attention, AdamW optimizer and Position-wise Feed-Forward Networks",
        "Train and optimize a 58M parameter Bangla language model, including learning rate scheduling, checkpointing, and evaluation",
      ],
      prerequisites: [
        "Basic knowledge of Python programming",
        "Familiarity with neural networks",
        "Basic statistics and linear algebra",
      ],
      topics: [
        "What LMs are, real-world applications, and differences between SLMs and LLMs.",
        "Data Preparation Pipeline and Bangla-specific tokenization challenges, and SentencePiece integration.",
        "Binary storage formats, memory mapping, and metadata management for training.",
        "Transformer foundations, embeddings, positional encodings, attention mechanisms, and GPT-style architecture",
        "Feed-forward networks, transformer blocks, residual connections, and assembling the complete GPT model.",
        "Hardware setup, optimizer configuration, learning rate schedules, training loop implementation, and gradient clipping.",
        "Cross-entropy loss, validation monitoring, saving and loading models, autoregressive decoding, sampling methods and temperature tuning",
      ],
    },
    modules: [
      {
        module: 1,
        title: "Introduction to Language Models",
        topics: ["History of NLP", "Transformer Architecture", "Tokenization"],
        slides: {
          title: "Module 1: Introduction to Language Models",
          pdfFile: "BSLM-module1.pdf",
        },
      },
      {
        module: 2,
        title: "Data Preparation Pipeline",
        topics: [
          "Text Preprocessing",
          "Underfitting, Overfitting & Just-Right Fitting",
          "Tokenization Fundamentals",
          "Bangla Tokenization Challenges",
        ],
        slides: {
          title: "Module 2: Data Preparation Pipeline",
          pdfFile: "BSLM-module2.pdf",
        },
      },
      {
        module: 3,
        title: "Transformer Architecture",
        topics: [
          "Token and positional embeddings",
          "Self-attention mechanism with causal masking",
          "Multi-Head Attention",
          "Cross-Attention",
        ],
        slides: {
          title: "Module 3: Transformer Architecture",
          pdfFile: "BSLM-module3.pdf",
        },
      },
      {
        module: 4,
        title: "Model Components",
        topics: [
          "Feed-Forward Networks",
          "Multi-Layer Perceptrons (MLPs)",
          "Forward Pass",
          "Gradient Explosion / Vanishing",
        ],
        slides: {
          title: "Module 4: Model Components",
          pdfFile: "BSLM-module4.pdf",
        },
      },
      {
        module: 5,
        title: "Training, Evaluation, Generation",
        topics: [
          "AdamW Optimizer Configuration",
          "Learning Rate Scheduling",
          "Gradient Clipping",
          "Training Loop Implementation",
          "Autoregressive Decoding",
          "Temperature Tuning",
        ],
        slides: {
          title: "Module 5: Training, Evaluation, Generation",
          pdfFile: "BSLM-module5.pdf",
        },
      },
    ],
  },
]

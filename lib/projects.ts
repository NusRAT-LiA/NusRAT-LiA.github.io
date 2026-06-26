export interface Project {
  id: string
  title: string
  description: string
  fullDescription: string
  motivation: string
  technologies: string[]
  categories: string[]
  image: string
  links: {
    website?: string
    github?: string
    publication?: string
    demo?: string
    document?: string
    whitepaper?: string
    pitchDeck?: string
  }
  status: "completed" | "ongoing" | "planned"
  year: number
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "acb",
    title: "AgentCollabBench",
    description:
      "A diagnostic benchmark, and four novel metrics designed to identify hidden behavioral vulnerabilities in multi-agent Large Language Model (LLM) systems that standard outcome-based evaluations miss.",
    fullDescription:
    "By utilizing 900 human-validated tasks across the DevOps, software, and data engineering sectors, the framework assesses how agents handle instruction decay, false-belief contagion, context leakage, and information durability. The research reveals that high-performing models frequently suffer from process failures when they work collaboratively, such as discarding critical constraints when navigating complex communication topologies.",
    motivation:
    " ",
    technologies: ["Multi-Agent Systems", "AI Safety"],
    categories: ["AI/ML"],
    image: "projects/agentcollab.png?height=400&width=600",
    links: {
      github: "https://www.aritramazumder.com/agentcollabbench/",
    },
    status: "completed",
    year: 2026,
    featured: true,

   },
   {
    id: "fed",
    title: "Federated Code Recommendation System",
    description:
      "This is a distributed RAG (Retrieval-Augmented Generation) system that enables organizations to share code recommendations while preserving privacy",
    fullDescription:
    "The system is built around Differentially Private Federated Learning (DP-FL) to collaboratively refine code embedding models across distributed nodes while providing formal privacy guarantees. Each node performs local training and shares only privatized model updates, so that raw source code never leaves the local environment and cannot be reconstructed from communicated signals. These updates are aggregated to improve a shared global model without exposing sensitive data. In parallel, a distributed Retrieval-Augmented Generation (RAG) framework uses a central Gateway strictly as an orchestration layer, coordinating the retrieval of sanitized, relevant context from FAISS vector indices",
    motivation:
    "I designed a small-language-model building course as an instructor of my university research lab - BARTA. This custom small language model that was built to give the learners hands-on experience.",
    technologies: ["Federated Learning", "RAG", "FAISS", "Differential Privacy"],
    categories: ["AI/ML"],
    image: "projects/Fed-Code-Rec.png?height=400&width=600",
    links: {
      github: "https://github.com/NusRAT-LiA/Fed-Code-Rec",
    },
    status: "completed",
    year: 2026,
    featured: true,

   },
   {
    id: "slm",
    title: "Bangla - Small Language Model",
    description:
      "A small, GPT-style Bangla language model built and trained from scratch on financial news articles using custom tokenization and efficient dataset preprocessing.",
    fullDescription:
    "A transformer-based autoregressive language model built from scratch using PyTorch, trained on over 2 million tokens from Bangla financial news. The project includes full data preprocessing: HuggingFace dataset loading, tokenizer integration (csebuetnlp/banglat5), sequence binarization, and memory-mapped batching. The model architecture mirrors GPT-style causal self-attention, with 8 transformer layers, 8 heads, and a 512-dimensional embedding space (~58M parameters). Custom training includes cosine learning rate decay, gradient clipping, and checkpointing to Google Drive for reproducibility and inference deployment.",
    motivation:
    "I designed a small-language-model building course as an instructor of my university research lab - BARTA. This custom small language model that was built to give the learners hands-on experience.",
    technologies: ["LLM", "PyTorch", "Hugging Face"],
    categories: ["AI/ML"],
    image: "projects/slm.png?height=400&width=600",
    links: {
      github: "https://github.com/NusRAT-LiA/Bangla-Small-Language-Model",
    },
    status: "completed",
    year: 2025,
    featured: true,
  },
  {
    id: "medico-bd",
    title: "Llama-3.2-Medico-BD",
    description:
      "Fine-tuned version of Llama-3.2-3B for medical product information retrieval in Bangladesh, optimized for brand/generic medicine recommendations and dosage guidance.",
    fullDescription:
      "Users can discuss their health issues with the model and get recommendations for Bangladeshi generic/brand names, dosages, manufacturers. Technologies include - QLoRA Fine-Tuning: 4-bit quantization with bitsandbytes for efficient training, Medical Dataset: 1,000+ entries covering Bangladeshi generic/brand names, dosages, manufacturers, PEFT Integration: Parameter-Efficient Fine-Tuning via peft. Custom Tokenization: Optimized for medical terminology in Bangladesh",
    motivation:
    "This project was a part of gaining my deep-learning and LLM certification.",
    technologies: ["LLM", "Fine-Tuning", "QLoRA"],
    categories: ["AI/ML"],
    image: "projects/medico-bd.png?height=400&width=600",
    links: {
      github: "https://github.com/NusRAT-LiA/Llama-3.2-Medico-BD",
    },
    status: "completed",
    year: 2024,
    featured: true,
  },
  {
    id: "PorTech",
    title: "PorTech: A Blockchain-based shipping supply chain solution",
    description:
      "A hybrid blockchain-based platform that optimizes foreign trade and shipping supply chain document workflows, providing seamless, secure transactions, precise access control, real-time tracking, and enhanced efficiency.",
    fullDescription:
      "PorTech leverages zkSync Layer 2 and the Request Network for secure, scalable payment and document automation on-chain. Smart contracts manage workflows like project creation, invoice authorization, and stakeholder role assignment, while private IPFS ensures efficient, compliant data storage. Decentralized identity is handled via zkLogin and passkeys, ensuring privacy-preserving authentication tied to blockchain keypairs. Integration is enabled through modular APIs and subgraphs via The Graph, making the system robust, composable, and enterprise-ready.",
    motivation:
      "Did you know that shipment document-related delays cost the global economy $3 Billion annually? Despite such advances in documentation automation, port-document flow is still plagued by inefficiencies, delays, and manual errors. I, along with my team, decided to find a feasible solution to this problem. And that's when PorTech was born. I felt we had done justice to the idea when this project became the Gold-Winner of Blockchain Olympiad 2025.",
    technologies: ["Zero-Knowledge Proof", "IPFS", "Solidity", "Ethereum"],
    categories: ["Blockchain"],
    image: "projects/PorTech.png?height=400&width=600",
    links: {
      github: "https://github.com/NusRAT-LiA/PorTech",
      pitchDeck: "https://www.youtube.com/watch?v=1iQ-RmJ-rNA",
      demo: "https://youtu.be/WkNAu223dS8",
      whitepaper: "https://docs.google.com/document/d/1X2kO2CXR9ZAgKw-U0QPuGW2lcxs0V6k4dgg_XC_O6QQ/edit?usp=sharing",
      document: "https://drive.google.com/file/d/1U3aXvZI80LZEemmnLXFkRChIYsMWFicC/view?usp=sharing",
    },
    status: "completed",
    year: 2024,
    featured: true,
  },
  {
    id: "DefTax",
    title: "DefTax: A Blockchain-based E-Governance System",
    description:
      "A hybrid Blockchain-based Government-to-Corporation integrated transaction tracking e-governance system with fine-grained access control that facilitates secure and accurate tax collection.",
    fullDescription:
      "A modular, permissioned tax compliance system built on Hyperledger Fabric with Raft consensus, decomposed into microservices for user management, smart contracts, and identity. It integrates Hyperledger Indy for verifiable credentials and Firefly for secure API workflows and off-chain IPFS data handling. Zero-Knowledge Proofs (ZKPs) ensure private validation of financial compliance without disclosing sensitive data.",
    motivation:
      "The amount of tax fraud in Bangladesh is one of the highest in the world. And globally, 65% tax evasion is done by corporate companies. Hence, I decided to build a solution that could help the government collect taxes more efficiently and accurately without compromising company privacy. This project was a finalist for International Blockchain Olympiad 2023. I built the technical architecture and led the team, having two other talented team-mates who made this challenging project successful.",
    technologies: ["Hyperledger Fabric","Zero-Knowledge Proof", "Hyperledger Indy", "Hyperledger FireFly", "Solidity", "Ethereum"],
    categories: ["Blockchain"],
    image: "projects/DefTax.png?height=400&width=600",
    links: {
      document: "https://drive.google.com/file/d/1zKJ-phI0xy-OG140DSUgYTIV7OJddQ1v/view?usp=sharing",
      whitepaper: "https://drive.google.com/file/d/1ph5XWQm3f-daXy5QRIDsAmbOs2hsDu68/view?usp=sharing",
      pitchDeck: "https://drive.google.com/file/d/1WwjwtxNSJh_yEehve9SaeysuJisOQCd_/view?usp=sharing",
    },
    status: "completed",
    year: 2023,
    featured: false,
  },
  {
    id: "StackOverflow-Lite",
    title: "StackOverflow-Lite: A Microservices-based StackOverflow Clone",
    description:
      "A full-stack implementation of StackOverflow, decomposed into microservices, containerized and orchestrated",
    fullDescription:
      "The initial implementation featured a FastAPI monolith with core modules for user management (signup/signin), post CRUD (including code snippet uploads to MinIO), and real-time-style notifications. The monolith was decomposed into three autonomous services: User Service: Authentication, token issuance, secure password handling. Post Service: Auth-validated post creation/retrieval with MinIO integration. Notification Service: Post-based notifications and scheduled cleanup via background workers. Each service was Dockerized, exposing independent APIs, and orchestrated with Docker Compose. An Nginx reverse proxy was configured to route traffic to respective containers, enforcing modular request handling. Inter-service communication was secured and validated with token-based authentication. The notification cleaner runs as a persistent background job to delete stale records.",
    motivation:
      "An academic project for Distributed Systems course, taken during my fifth semester of Software Engineering major.",
    technologies: ["React", "FastAPI", "Python", "OAuth", "MinIO", "Docker", "JavaScript", "Nginx", "PostgreSQL"],
    categories: [ "Web Development"],
    image: "projects/StackOverFlow-Lite.png?height=400&width=600",
    links: {
      github: "https://github.com/NusRAT-LiA/DistributedSystem-Implementation",
      document: "https://docs.google.com/document/d/1ybrJHoyNwqBF87LoZmAsKnRCIoknRED6e-0u8dmpHxw/edit?usp=sharing",
    },
    status: "completed",
    year: 2024,
    featured: false,
  },
  {
    id: "Meg",
    title: "MEG: Mars Exploration Game",
    description: "An immersive 3D game that simulates Mars exploration with realistic physics and educational content along with real-time weather updated, predicted using ML models.",
    fullDescription:
      "The game features realistic terrain generated based on the actual Martian terrain photos collected by rovers, physics-based mechanics, and ML predicted environmental conditions using data from Curiosity Rover. Players can conduct virtual experiments, collect samples, and learn about Mars geology and atmosphere all while fighting against challenges of Martian weather to survive",
    motivation:
      "The motivation came from the Bangladeshi NASA SPACE APP CHALLENGE GLOBAL WINNER, a group of Bangladeshi kids competing and winning against professionals. They were very curious about Mars but had no idea about where to begin. They just represented the regular Bangladesh school students who lack access to interactive space education resources. This game was intended to be a stepping stone for real-time simulated space education for these students. I did not have the funds to get a VR set. But I kept the design VR compatible so that the same codebase can be migrated to build a VR game.",
    technologies: ["Unity", "C#","Python","3D Modeling", "Physics Simulation"],
    categories: ["EdTech","AI/ML", "Game Development", "VR/AR" ],
    image: "projects/Meg.png?height=400&width=600",
    links: {
      github: "https://github.com/NusRAT-LiA/Mars-Explorer-Game",
      document: "https://github.com/NusRAT-LiA/Mars-Explorer-Game/blob/main/SRS/MEG-SRS.pdf",
    },
    status: "completed",
    year: 2024,
    featured: false,
  },

  {
    id: "Kook-wa",
    title: "Kook-wa: 3D Action-Adventure Game",
    description:
      "A 3D game built in Unity, where players explore a procedurally generated mystical island filled with AI-driven enemies, environmental challenges, and magical artifacts.",
    fullDescription:
      "The world is rendered using Unity's High Definition Render Pipeline (HDRP), with physically-based materials, volumetric fog, and real-time global illumination to create an immersive and eerie island atmosphere. A dynamic day-night cycle and custom weather system tie into the gameplay, affecting enemy behavior and visibility. Characters (both player and monsters) are animated using Unity's Animator Controller, with blend trees and root motion to keep movement smooth and grounded. Under the hood, enemy AI uses a mix of NavMesh for navigation and finite state machines (FSM) for decision-making, so enemies can patrol, detect the player, chase, attack, or flee depending on what's going on.",
    motivation:
      "I had just learned game development and became a finalist in a national GameJam. It was a 24 hour long game development challenge on the theme - It's Hard to cook without deadly spells. This project pushed my limits in rapid prototyping and creative problem-solving.",
    technologies: ["Unity", "C#", "3D Rendering", "3D Animation", "AI Navigation"],
    categories: ["Game Development"],
    image: "projects/KookWa.png?height=400&width=600",
    links: {
      github: "https://github.com/NusRAT-LiA/Kook-wa",
      demo: "https://www.youtube.com/watch?v=skUOGGozj-A",

    },
    status: "completed",
    year: 2024,
    featured: false,
  },
  {
    id: "BlockchainED",
    title: "BlockChainEd: Educational Blockchain Implementation",
    description: "An educational project that empowers users to create and explore their own blockchain networks.",
    fullDescription:
      "The application validates transactions, executes proof of work, and seamlessly integrates verified blocks into the blockchain. Additionally, BlockChainEd offers a unique feature that allows users to simulate attacks on their blockchain, enabling them to modify information within a valid block. However, the app promptly safeguards against such attacks by recalculating hashes and breaking the chain from the corrupted block. The system includes a comprehensive CLI interface and visualization tools to help users understand blockchain mechanics.",
    motivation:
      "During my freshman year, I was very interested in understanding blockchain technology and had earned professional certification on it. Despite blockchain being a transformative technology, many of my peers remained unfamiliar with its core concepts beyond surface-level applications. I believe that when learners construct something themselves, they don't just remember it, they understand it by heart. So I built this platform through which, any curious learner can get hands-on experience with core algorithmic components like hashing, consensus mechanisms, and peer-to-peer networking, and move beyond theory by internalizing how blockchain works from the ground up.",
    technologies: ["C++", "Cryptography", "Data Structures"],
    categories: ["Blockchain", "EdTech", "Systems Programming"],
    image: "projects/BlockChainED.png?height=400&width=600",
    links: {
      github: "https://github.com/NusRAT-LiA/Blockchain_in_Cpp",
      document: "https://github.com/NusRAT-LiA/Blockchain_in_Cpp/blob/main/BlockChainED-Paper.pdf",

    },
    status: "completed",
    year: 2023,
    featured: false,
  },
]

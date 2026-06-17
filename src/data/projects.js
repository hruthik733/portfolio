// src/data/projects.js

import pneumoniaImg from "../assets/pneumonia.png";
import insulinImg from "../assets/insulin.png";
import mini02 from "../assets/mini02.png";
import rlImg from "../assets/diabetes-rl.png";
import cinebridgeImg from "../assets/cinebridge.png";
import ragAssistantImg from "../assets/rag-assistant.png";

export const projects = [
  {
    image: pneumoniaImg,

    category: "Deep Learning",

    title: "Pneumonia Detection from Chest X-rays",

    date: "Aug 2024 - Dec 2024",

    description:
      "Built a feature-level ensemble model using VGG19, EfficientNetB0, and DenseNet121.",

    details: [
      "Achieved 93.1% accuracy by fusing features with trainable weights.",
      "Used Grad-CAM to visualize critical lung regions."
    ],

    github:
      "https://github.com/hruthik733/Pneumonia_detection_using_feature_level_ensemble",

    demo:
      "https://huggingface.co/spaces/hp733/Pneumonia_detection_using_Feature-level_Ensemble_Learning"
  },

  {
    image: insulinImg,

    category: "Hybrid Architecture",

    title: "Personalized Insulin Dosage Prediction",

    date: "Feb 2025 - May 2025",

    description:
      "Designed a residual LSTM-GRU model with skip connections to predict regular insulin dosage.",

    details: [
      "Improved R2 from 0.62 to 0.805.",
      "Engineered temporal features via event pivoting and cyclic encoding."
    ],

    github:
      "https://github.com/hruthik733/Personalized-Insulin-Dose-Prediction-Using-a-Hybrid-LSTM-GRU-Architecture",

    demo:
      "https://huggingface.co/spaces/hruthik733/diabetes-rl-manager"
  },

  {
    image: mini02,

    category: "Deep Reinforcement Learning",

    title: "Automated Diabetes Management",

    date: "Jul 2025 – Oct 2025",

    description:
      "A fully closed-loop insulin delivery system using ensemble reinforcement learning for adult Type 1 diabetes management under realistic meal scenarios.",

    details: [
      "Developed an ensemble SAC-TD3 agent trained on adult virtual patients in SimGlucose.",
      "Achieved 78.8% Time-in-Range without meal announcements using closed-loop control."
    ],

    github:
      "https://github.com/hruthik733/MINI02_sac_agent-for-diabetes-management-Re-Inforcement_learning-clg-server",

    demo: null
  },

  {
    image: rlImg,

    category: "Reinforcement Learning",

    title: "Cohort-Aware Ensemble RL for Glycemic Control",

    date: "Oct 2025 – Feb 2026",

    description:
      "Ensemble RL framework combining SAC and TD3 agents for Type 1 Diabetes management.",

    details: [
      "Achieved up to 82.91% Time-In-Range (TIR).",
      "Evaluated using the SimGlucose environment."
    ],

    github:
      "https://github.com/hruthik733/MAJOR-A-Cohort-Aware-Ensemble-RL-Framework-for-Personalized-Glycemic-Control",

    demo:
      "https://huggingface.co/spaces/hruthik733/glucorl-insulin-predictor"
  },

  {
    image: cinebridgeImg,

    category: "Full Stack Web",

    title: "CineBridge Unified Discovery",

    date: "May 2024 – Jun 2024",

    description:
      "A platform integrating multiple OTT services for unified search and streaming.",

    details: [
      "Direct streaming access with one-click redirection.",
      "Cross-platform watchlist management."
    ],

    github:
      "https://github.com/hruthik733/CineBridge",

    demo:
      "https://cine-bridge.web.app/"
  },

  {
    image: ragAssistantImg,

    category: "Generative AI",

    title: "Enterprise Knowledge Assistant",

    date: "May 2026 – Jun 2026",

    description:
      "A privacy-focused conversational RAG system enabling intelligent question answering over enterprise documents using local LLMs.",

    details: [
      "Built a Conversational RAG pipeline with LangChain, ChromaDB, and Ollama.",
      "Implemented semantic search using BGE embeddings for accurate document retrieval."
    ],

    github:
      "https://github.com/hruthik733/Enterprise-Knowledge-Assistant-with-Conversational-RAG-and-Local-LLMs",

    demo: null
  }
];
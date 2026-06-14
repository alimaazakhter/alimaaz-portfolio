export type Category = 'all' | 'ml' | 'ai' | 'data' | 'web';

export interface ProjectSection {
    id: string;
    title: string;
    content: string;
    list?: string[];
}

export interface ProjectContent {
    videoUrl?: string;
    images?: string[];
    certificate?: string;
    note?: string;
    sections: ProjectSection[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    category: Category;
    tags: string[];
    emoji: string;
    thumbnail?: string;
    link?: string;
    github?: string;
    content?: ProjectContent;
}

export const projects: Project[] = [
    {
        id: "p1",
        title: "ProjectMind AI",
        description: "Agentic AI tool generating academic blueprints with Dual Mode (Local Ollama & Cloud Gemini API).",
        category: "ai",
        tags: ["Streamlit", "LangChain", "Ollama", "Gemini"],
        emoji: "Bot",
        thumbnail: "/Thumbnails/ProjectMind AI.png",
        github: "https://github.com/alimaazakhter/ProjectMind-AI/tree/main",
        link: "https://projectmind-ai.streamlit.app/",
        content: {
            videoUrl: "/projectmind.mp4",
            sections: [
                {
                    id: "overview",
                    title: "About the Project",
                    content: "An AI-powered tool that generates complete academic project blueprints for MCA / Engineering students. Originally designed to run fully on local LLMs using Ollama (100% offline, no paid APIs), the system was later enhanced with Google Gemini API support to enable fast and scalable cloud deployment."
                },
                {
                    id: "workflow",
                    title: "How It Works",
                    content: "This project follows an Agentic AI pipeline with specialized agents:",
                    list: [
                        "Planner Agent: Breaks down user input.",
                        "Generator Agent: Creates structured content.",
                        "Formatter/Parser: Cleans and organizes output."
                    ]
                },
                {
                    id: "dual-mode",
                    title: "Dual Mode Support (Key Highlight)",
                    content: "This hybrid design ensures both privacy (local AI) and scalability (cloud AI).",
                    list: [
                        "Local Mode (Ollama): Runs fully on your system with no internet required and no API key needed. Uses models like Llama3 / Mistral.",
                        "Cloud Mode (Gemini API): Fast responses with no local setup required. Easily deployable on Streamlit Cloud."
                    ]
                },
                {
                    id: "features",
                    title: "Key Features",
                    content: "The system provides an end-to-end blueprint creation experience:",
                    list: [
                        "Generate full project blueprints and AI-powered structured outputs",
                        "Tech stack & dataset suggestions tailored to the project idea",
                        "Viva questions and Project timeline generation",
                        "Starter code suggestions",
                        "Export blueprints to PDF, DOCX, PPT, and Markdown"
                    ]
                },
                {
                    id: "tech-stack",
                    title: "Tech Stack",
                    content: "Built entirely in Python, leveraging modern AI and Web frameworks:",
                    list: [
                        "Python & Streamlit (for the interactive frontend)",
                        "LangChain (for the Agentic AI pipeline orchestration)",
                        "Ollama (for local LLM inference)",
                        "Google Gemini API (for cloud inference)",
                        "FPDF / python-docx / python-pptx (for document generation)"
                    ]
                }
            ]
        }
    },
    {
        id: "p2",
        title: "TruthShield AI — Fake News Detector",
        description: "TruthShield AI (Stylistic News Attribution Model + Web UI Dashboard)",
        category: "ml",
        tags: ["NLP", "TF-IDF", "Machine Learning", "Next.js", "Tailwind v4"],
        emoji: "Shield",
        thumbnail: "/Thumbnails/Fake News Detection.png",
        github: "https://github.com/alimaazakhter/Fake-News-Detector",
        link: "https://fake-news-detector-hazel-pi.vercel.app/",
        content: {
            videoUrl: "/Fake_news_detection.mp4",
            note: `🔌 Chrome Extension Support

TruthShield AI also includes a Chrome Extension for real-time news analysis.

To use it:
• Download the \`chrome-extension\` folder from GitHub
• Load it via chrome://extensions → Load Unpacked
• Paste the deployed TruthShield AI project link in extension settings

You can then scan news articles directly from your browser in real-time.`,
            sections: [
                {
                    id: "overview",
                    title: "About the Project",
                    content: "TruthShield AI is a complete, interactive, and visually stunning web application that detects the credibility of news articles. Rather than relying on simple database lookups, the system uses a debiased machine learning model running entirely client-side in the browser to analyze the writing signature, styling, sensationalism, and vocabulary of any news article in real-time."
                },
                {
                    id: "workflow",
                    title: "Inference Pipeline & Debiasing",
                    content: "Traditional models trained on news datasets learn to look for publisher signatures (like 'Reuters') rather than actual linguistic style. TruthShield AI corrects this through a debiased NLP training pipeline and local execution:",
                    list: [
                        "Header Stripping: Removes location/agency headers (e.g., 'WASHINGTON (Reuters) -') during model training.",
                        "Attribution Stop-Words: Injects common publisher metadata and shortcut words into the TF-IDF stop-words list.",
                        "Balanced Dataset: Retrained on a balanced dataset of 30,000 articles to eliminate publisher bias (97.60% accuracy).",
                        "Zero Cold Starts: Model parameters are served as a static JSON, allowing instantaneous client-side calculations in TypeScript."
                    ]
                },
                {
                    id: "features",
                    title: "Key Features",
                    content: "The web dashboard contains advanced diagnostic panels running entirely in the browser:",
                    list: [
                        "Client-Side ML Inference: Real-time predictions in the browser with 0ms server latency and no backend costs.",
                        "Explainability Panel (LIME-style): A visual breakdown that highlights the exact words in the text that influenced the model's decision.",
                        "Clickbait Index: Heuristic analytics checking for outrageous claims, capital letters, and punctuation markers.",
                        "Sensationalism Index: Analyzes the density of outrage-trigger words (e.g., slam, panicked, shocking)."
                    ]
                },
                {
                    id: "tech-stack",
                    title: "Tech Stack & Algorithm",
                    content: "Built using Next.js 16 and Python Scikit-Learn for training and browser execution:",
                    list: [
                        "Frontend: Next.js 16, React 19, Tailwind CSS v4, TypeScript",
                        "Model Training: Python 3.8+, Scikit-Learn (TF-IDF Vectorizer + Logistic Regression)",
                        "Inference Engine: Custom TypeScript TF-IDF and Sigmoid Math",
                        "UI styling: Obsidian charcoal dark mode (#0b0c10) with emerald-green glow effects"
                    ]
                }
            ]
        }
    },
    {
        id: "p3",
        title: "Iris Species Classification & ML Studio",
        description: "An interactive full-stack ML web app with live prediction, real-time SVG flower visualization, in-browser model training, and a FastAPI backend.",
        category: "ml",
        tags: ["Machine Learning", "FastAPI", "JavaScript", "Scikit-learn", "Chart.js"],
        emoji: "Flower2",
        thumbnail: "/Thumbnails/Iris Flower Classifier.png",
        github: "https://github.com/alimaazakhter/Iris-Flower-Classification",
        link: "https://alimaazakhter.github.io/Iris-Flower-Classification/",
        content: {
            videoUrl: "/iris-flower.mp4",
            sections: [
                {
                    id: "overview",
                    title: "Project Overview",
                    content: "This project is an interactive full-stack Machine Learning Studio built around Fisher's classic Iris Dataset (150 samples, 3 species). It goes far beyond a simple classifier — featuring a live prediction interface, a real-time SVG flower visualizer that morphs based on input dimensions, an in-browser model training sandbox with multiple algorithms, and a professional FastAPI backend for server-side inference."
                },
                {
                    id: "workflow",
                    title: "System Architecture",
                    content: "The application operates as a dual-mode system — a standalone client-side ML sandbox and a full-stack Python-served application:",
                    list: [
                        "Client-Side ML: Logistic Regression (Softmax), KNN (Euclidean/Manhattan), and Decision Tree (CART with Gini) all implemented from scratch in JavaScript.",
                        "Real-Time SVG Visualizer: Translates numeric inputs into a living flower using trigonometric radial vectors and dynamic Bézier curve paths.",
                        "Live Training Sandbox: Users tune hyperparameters (learning rate, K neighbors, tree depth) and see accuracy, confusion matrices, and classification boundaries update instantly.",
                        "FastAPI Backend: Python server with Scikit-learn model, auto-training on startup, CORS middleware, and Swagger UI documentation at /docs."
                    ]
                },
                {
                    id: "features",
                    title: "Key Features",
                    content: "Every module is designed to be both educational and production-grade:",
                    list: [
                        "Interactive Predictor: Range sliders feed live inference with real-time probability bars for all 3 species.",
                        "SVG Flower Morphing: Sepals drawn at 30°, 150°, 270° and petals at 72° intervals using dynamic quadratic Bézier curves.",
                        "Visual Cluster Plot: Chart.js scatter plot showing dataset distributions with a live 'Your Input' marker that updates in real-time.",
                        "Confusion Matrix: CSS grid with dynamic opacity scaling to reflect classification count densities.",
                        "FastAPI /predict Endpoint: Pydantic-validated JSON input, probability matrices via predict_proba, and serialized model artifacts."
                    ]
                },
                {
                    id: "tech-stack",
                    title: "Tech Stack",
                    content: "A comprehensive full-stack architecture spanning client-side ML and server-side inference:",
                    list: [
                        "Frontend: Vanilla HTML/CSS/JS, Chart.js, SVG, custom-styled range inputs",
                        "Client-Side ML: Softmax Regression, KNN, Decision Tree (CART) — all from scratch in JS",
                        "Backend: Python, FastAPI, Scikit-learn, Joblib, Pydantic",
                        "Dataset: Fisher's Iris Dataset (150 instances, 4 features, 3 classes)"
                    ]
                }
            ]
        }
    },
    {
        id: "p4",
        title: "Student Performance — Model Comparison",
        description: "A premium, serverless Machine Learning Studio that compares 7 regression models with full EDA, dynamic leaderboard plots, and in-browser predictions using exported coefficients.",
        category: "ml",
        tags: ["Machine Learning", "Regression", "Vanilla JS", "Streamlit", "Chart.js"],
        emoji: "GraduationCap",
        thumbnail: "/Thumbnails/Student Performance.png",
        github: "https://github.com/alimaazakhter/Student-Performance-ML-Studio",
        link: "https://student-performance-ml.netlify.app/",
        content: {
            videoUrl: "/Student_Performance_demo.mp4",
            note: "🔌 Dual Architecture Support\n\nThis studio features two implementations:\n1. Static Web Studio (Client-Side): A fast, lightweight, and fully offline-compatible dashboard in HTML/CSS/JS using Chart.js that computes predictions instantly inside the browser.\n2. Streamlit Cloud (Server-Side): A Python-based analytics server utilizing Streamlit, Plotly, Seaborn, and Matplotlib.\n\nBoth projects are housed within the unified GitHub repository.",
            sections: [
                {
                    id: "overview",
                    title: "About the Project",
                    content: "The Student Performance Model Comparison Studio is a full-featured ML dashboard designed with a custom Sunset Warm theme (amber, orange, and alabaster cream). It compares 7 regression models (Linear Regression, Ridge, Lasso, Decision Tree, Random Forest, Gradient Boosting, and SVR) on a dataset of 1,000 students to analyze how demographics, preparation courses, and lunch types affect academic achievement."
                },
                {
                    id: "workflow",
                    title: "Model Training & Inference Pipeline",
                    content: "To bypass cross-origin resource sharing (CORS) blocks and support serverless client-side evaluation, this project operates on a custom end-to-end ML pipeline:",
                    list: [
                        "Data Prep: Encodes categorical demographics (gender, ethnicity, parental education, lunch, prep course) into numerical values.",
                        "Off-line Training: Python scripts preprocess data and train 7 regression models on the backend.",
                        "JSON Serialization: The trained weights, intercepts, and categorical mapping grids are exported to results.json and injected directly into index.html.",
                        "In-Browser Predictor: JavaScript reads the weights and performs instant matrix multiplications to compute math, reading, and writing grades on the fly with 0ms server latency."
                    ]
                },
                {
                    id: "features",
                    title: "Key Features",
                    content: "Packed with interactive diagnostic tools and analytics panels:",
                    list: [
                        "Sunset Predictor: Slider form with conic-gradient score gauges and dynamic performance feedback.",
                        "Exploratory Data Analysis: Real-time histograms for score distributions, inter-feature correlation heatmaps, and category box plots.",
                        "Model Leaderboard: Ranks algorithms based on average R² performance, with an overlay radar chart comparing the top 3 models.",
                        "Actual vs. Predicted Plot: Scatter comparison charts mapping model performance relative to a perfect prediction line (y = x).",
                        "Zero Network Overhead: Chart.js is bundled locally (chart.umd.min.js) to support 100% offline execution."
                    ]
                },
                {
                    id: "tech-stack",
                    title: "Tech Stack",
                    content: "Built using a combination of lightweight client scripts and Python ML tooling:",
                    list: [
                        "Frontend: HTML5, Vanilla CSS3 (custom CSS variables & gradients), JavaScript ES6",
                        "Visualization: Chart.js (locally bundled v4.x library)",
                        "ML Engine (Training): Python 3.11, Scikit-learn (7 regression algorithms, Standard Scaler, Label Encoder)",
                        "Data Wrangling: Pandas, NumPy",
                        "Python Alternative: Streamlit, Plotly, Seaborn, Matplotlib"
                    ]
                }
            ]
        }
    },
    {
        id: "p5",
        title: "ImageFusion AI — RGB & Thermal Calibration Hub",
        description: "An advanced industrial web platform designed to align, fuse, and calibrate multimodal image pairs (RGB Visible Light and Thermal Infrared) with GPU-accelerated previews and optimized grid search.",
        category: "ml",
        tags: ["Computer Vision", "OpenCV", "FastAPI", "Optimization", "Vanilla JS"],
        emoji: "Thermometer",
        thumbnail: "/Thumbnails/ImageFusionAI_Thumbnail.png",
        github: "https://github.com/alimaazakhter/ImageFusion-Calibration-Hub",
        link: "https://imagefusion-calibration-hub.onrender.com/",
        content: {
            videoUrl: "/ImageFusionAI_videoDEMO.mp4",
            note: "🚀 Industrial Drone Inspection Applications\n\nThis project aligns Parallax Shifts between physical drone lenses (RGB and Long-Wave Thermal Infrared sensors), enabling operators to accurately map temperature anomalies (e.g. electrical hotspots, fluid pipeline leaks) onto visual components.",
            sections: [
                {
                    id: "overview",
                    title: "About the Project",
                    content: "ImageFusion AI is an advanced, high-performance web dashboard that replaces heavy desktop GUIs with a premium light-glassmorphic Single Page Application (SPA). It integrates computer vision edge alignment, automated coordinate grid search, and high-concurrency background batch processing queues to align and fuse infrared thermographic views with color visible-light images."
                },
                {
                    id: "workflow",
                    title: "Core Calibration & Fusion Pipeline",
                    content: "To bridge the modal gap between heat signatures and color photos, the alignment algorithm analyzes structural geometries rather than pixel color matching:",
                    list: [
                        "Edge Extraction: Isolates vertical boundaries (poles, wires, roofs) using Sobel filtering on both visual and thermal channels.",
                        "Gaussian Smoothing: Suppresses camera sensor noise to prevent edge detection false-positives.",
                        "ROI Masking: Applies a bounding grid focused on structural areas (e.g. upper-middle frame) to ignore high-frequency noise from grass, trees, and ground crops.",
                        "Mathematical Alignment: Calculates a 2D Affine Transformation Matrix to scale and translate thermal coordinates onto visual pixels."
                    ]
                },
                {
                    id: "features",
                    title: "Key Features & Optimization Challenges",
                    content: "Designed for sub-second, hardware-efficient rendering under cloud container restrictions:",
                    list: [
                        "Split-Screen Swipe View: Swipe-to-reveal divider layout that allows inspectors to wipe back and forth across structural boundaries.",
                        "Coarse-to-Fine Grid Search: Searches translation and scaling parameters recursively to maximize boundary overlap alignment scores.",
                        "Workspace Downscaling (60x Speedup): Scales internal optimization frames from 1024x768 to 256x192, slashing processing time from 60 seconds to under 0.94 seconds without accuracy loss.",
                        "Client-Side CSS Transforms (0ms Latency): Updates slider changes instantly in the viewport via GPU-accelerated CSS transforms and opacities, offloading heavy OpenCV decompressions from the backend.",
                        "Batch Automation: Serves concurrent background tasks via FastAPI to scan directories and output fully fused frames automatically."
                    ]
                },
                {
                    id: "tech-stack",
                    title: "Tech Stack & Frameworks",
                    content: "Built upon high-speed computer vision modules and async web architectures:",
                    list: [
                        "Backend APIs: FastAPI (high-performance async web framework), Uvicorn ASGI server",
                        "Image Processing Library: OpenCV (cv2) for affine transformations and edge analysis",
                        "Array Optimization: NumPy (matrix calculations and region indexing)",
                        "Validation Layer: Pydantic schemas for data safety",
                        "Frontend: HTML5, Vanilla CSS3 (Light Glassmorphism variables, absolute stacking grids), Vanilla JS (Fetch API, drag physics, API rate throttling)"
                    ]
                }
            ]
        }
    },
    {
        id: "p6",
        title: "VisualDiffX — Satellite Change Detection Engine",
        description: "A professional satellite change detection web engine performing client-side computer vision (luminance maps, morphological filters, Connected Component Labeling) inside the browser with synchronized pan/zoom viewports.",
        category: "ml",
        tags: ["Computer Vision", "Geospatial", "TypeScript", "Next.js", "Tailwind CSS"],
        emoji: "Satellite",
        thumbnail: "/Thumbnails/VisualDiffX_thumbnail.png",
        github: "https://github.com/alimaazakhter/VisualDiffX/tree/main",
        link: "https://visual-diff-x.vercel.app/",
        content: {
            videoUrl: "/VisualDiffX_demo.mp4",
            note: "🛰️ Browser-Based Geospatial Change Detection\n\nUnlike traditional change detection platforms that rely on heavy server processing or complex local Python configurations, VisualDiffX runs full computer vision algorithms directly in the browser via HTML5 Canvas buffers, guaranteeing 100% user privacy and offline functionality.",
            sections: [
                {
                    id: "overview",
                    title: "About the Project",
                    content: "VisualDiffX is a professional-grade satellite change detection engine. It loads before-and-after image pairs into memory, extracts raw pixel data buffers, and calculates absolute change maps on-the-fly. It runs specialized morphological operations and graph traversals to draw bounding boxes around changes, exporting combined inspection sheets and batch ZIP packages directly from the web client."
                },
                {
                    id: "workflow",
                    title: "Geospatial Detection Pipeline",
                    content: "The client-side computer vision pipeline processes raw pixels step-by-step to isolate structural changes:",
                    list: [
                        "Luminance Conversion: Converts RGB pixels into single-channel grayscale maps using standard mathematical coefficients ($Y = 0.299R + 0.587G + 0.114B$).",
                        "Difference Thresholding: Subtracts the grayscale pixel values between before/after matrices, applying a sensitivity threshold to filter out illumination variances.",
                        "Morphological Closing: Executes dilation followed by erosion to merge close-up changes and fill small gaps in detected boundaries.",
                        "Morphological Opening: Runs erosion followed by dilation to eliminate isolated single-pixel noise (dust, sensor artifacts).",
                        "Connected Component Labeling (CCL): Traverses the thresholded binary grid using BFS flood-fill to label components, count coordinate boundaries, and filter out changes below the minimum area threshold."
                    ]
                },
                {
                    id: "features",
                    title: "Key Features & Comparison Modes",
                    content: "Packed with interactive geospatial analytics utilities:",
                    list: [
                        "Comparison Viewports: Toggle between Side-by-Side (3-Pane comparison), Split Slider (draggable vertical reveal divider), Opacity Cross-Fade, and raw Difference Masks.",
                        "Synchronized Pan & Zoom: Linked mouse wheel and drag-to-pan handlers that update all viewports concurrently to keep zoom positions locked.",
                        "Single-Sheet Report Generator: Combines Before, After, and Changes viewports with metadata header telemetry (Change Density, Component Count) into a single JPEG export.",
                        "Batch Archive (JSZip): Bundles processed change maps and binary files into a single ZIP archive client-side."
                    ]
                },
                {
                    id: "tech-stack",
                    title: "Tech Stack & Libraries",
                    content: "Utilizes Next.js App Router for static pre-rendering combined with high-performance canvas math:",
                    list: [
                        "Frontend: Next.js (React 19), TypeScript, Tailwind CSS v4, Lucide Icons",
                        "Image Processing: HTML5 Canvas API (Pixel manipulation, custom morphological shaders in TS)",
                        "Client Archiving: JSZip (for dynamic ZIP generation in the browser)",
                        "Performance: Passive event listeners to prevent browser page-scroll jacking during interactive zoom/pan operations"
                    ]
                }
            ]
        }
    },
    {
        id: "p7",
        title: "GLR Pipeline Automation",
        description: "Guideline Loss Report (GLR) Claims Portal — a full-stack automation web application that extracts information from PDF reports using LLMs and dynamically fills Microsoft Word template placeholders.",
        category: "ai",
        tags: ["AI Automation", "LLMs", "FastAPI", "OCR", "Next.js"],
        emoji: "ClipboardList",
        thumbnail: "/Thumbnails/GLR thumbnail.png",
        github: "https://github.com/alimaazakhter/GLR_Pipeline_Automation",
        link: "https://glr-pipeline-automation.vercel.app/",
        content: {
            videoUrl: "/GLR_videoDemo.mp4",
            note: "⚡ Accelerating Property Insurance Claims\n\nHistorically, claims adjusters and property inspector teams spend hours transcribing details from physical PDF reports into Microsoft Word templates. This platform automates the pipeline entirely using specialized LLMs with custom paragraph run-merging to protect document styles.",
            sections: [
                {
                    id: "overview",
                    title: "About the Project",
                    content: "Guideline Loss Report (GLR) Pipeline Automation is a full-stack claims processing portal. It enables users to upload a Microsoft Word template containing arbitrary text placeholders and multiple PDF photo reports, contractor logs, or inspection records. The application dynamically scans the Word template for placeholders, extracts matched data from the PDFs using advanced LLMs (Gemini, Groq, and OpenRouter), and allows users to review and download the completed Word document with identical formatting."
                },
                {
                    id: "workflow",
                    title: "Core Processing Pipeline",
                    content: "The system runs an end-to-end automated document extraction and template mapping pipeline:",
                    list: [
                        "Template Scanning: Programmatically parses the Word template (.docx) body paragraphs and table cells on-the-fly to locate bracketed ([...]) or double-curly ({{...}}) placeholders.",
                        "Multimodal Text Extraction: Extracts text from digital PDFs using PyMuPDF, falling back to a page-by-page Tesseract OCR engine for scanned files or raw images.",
                        "AI Extraction Engine: Feeds the compiled PDF text and identified placeholder list into the selected LLM to construct a matched key-value JSON object.",
                        "Interactive Data Verification: Categorizes mapped keys into logical tabs ('Loss & Claims', 'Insured & Property', 'Mortgage & Vendor') for easy user verification and editing.",
                        "Consolidated Filling: Replaces placeholders in the Word document, automatically resolving MS Word's text-run fragmentation issue to preserve original fonts and formatting."
                    ]
                },
                {
                    id: "features",
                    title: "Key Product Capabilities",
                    content: "Built to deliver high accuracy, low latency, and a premium inspection workflow:",
                    list: [
                        "Tri-Provider LLM Selector: Choose between Google Gemini (direct structured JSON inference), Groq (low-latency Llama models), and OpenRouter (GPT/Claude fallback).",
                        "Keyless User Mode: Server-level preconfigured API keys mean users can run extractions without entering credentials.",
                        "Interactive Verification Editor: Dashboard featuring live field completion badges, dynamically grouped input fields, and a scanning radar overlay.",
                        "Clean-up Background Tasks: FastAPI background tasks automatically purge temporary uploads and compiled outputs from the server after download."
                    ]
                },
                {
                    id: "tech-stack",
                    title: "Tech Stack & API Layers",
                    content: "Harnessing async APIs and clean typescript components:",
                    list: [
                        "Frontend: Next.js (App Router), React, TypeScript, Lucide Icons, Vanilla CSS (dynamic drop-zones, stepper progress indicators, radar scanning effects)",
                        "Backend APIs: FastAPI (Python REST API), python-docx (Microsoft Word manipulation), PyMuPDF (PDF text reader), Pytesseract OCR (image text parser), Pillow (image conversion)",
                        "AI Orchestration: Gemini-3.5-Flash (structured mapping), Llama-3.1-8b via Groq (speed-optimized inference), GPT-3.5-Turbo via OpenRouter (fallback options)"
                    ]
                }
            ]
        }
    },
    {
        id: "p8",
        title: "Vortex Bank — Enterprise Fintech SaaS",
        description: "A premium, high-fidelity Fintech SaaS web application designed to deliver modern digital banking services, engineered with Next.js, PostgreSQL, and Prisma ORM.",
        category: "web",
        tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "TypeScript"],
        emoji: "Landmark",
        thumbnail: "/Thumbnails/Vortex Bank.png",
        github: "https://github.com/alimaazakhter/Vortex-Bank-Full-Stack---Banking-Management-System-",
        link: "https://vortex-bank-full-stack-banking-mana.vercel.app/",
        content: {
            videoUrl: "/Vortex_Bank_demo.mp4",
            note: "🚀 Evolution to Full-Stack\n\nVortex Bank originally began as a simple Python CLI application. Through continuous development, it has evolved into a production-ready, full-stack web application with a serverless architecture.",
            sections: [
                {
                    id: "overview",
                    title: "About the Project",
                    content: "Vortex Bank is a premium, high-fidelity Fintech Software-as-a-Service (SaaS) web application designed to deliver modern digital banking services. Engineered with a Next.js App Router frontend, a serverless Prisma-managed PostgreSQL backend, and a dynamic Tailwind CSS UI, this platform mimics the architecture of institutional online banking portals."
                },
                {
                    id: "workflow",
                    title: "Technical Architecture & Workflow",
                    content: "The platform operates on a robust modern web architecture:",
                    list: [
                        "Frontend Interface: Users interact with a dynamic, glassmorphism-styled dashboard built with Next.js and React. Client-side state manages modal overlays without full page reloads.",
                        "Serverless API Route: Data requests from the client are routed to secure Next.js API endpoints, ensuring sensitive logic remains hidden.",
                        "ORM Abstraction (Prisma): Prisma intercepts the API requests, validates the schema, and constructs optimized SQL queries.",
                        "Database Layer (PostgreSQL): Queries execute against a cloud-hosted PostgreSQL database on Neon, which persists user accounts, balances, and transactional history."
                    ]
                },
                {
                    id: "features",
                    title: "Key Features & Capabilities",
                    content: "Built to mirror real-world financial systems, Vortex Bank includes:",
                    list: [
                        "Live Dashboard Analytics: Instant calculation and display of total deposits, active users, and system liquidity metrics.",
                        "Atomic Transaction Handling: Secure Deposit and Withdraw mechanisms that query current balances and update records transactionally.",
                        "User Lifecycle Management: Complete CRUD pipelines for opening accounts and fetching personalized user data via generated Account IDs.",
                        "Responsive Institutional UI: A dark-mode optimized interface utilizing Tailwind CSS, Lucide React iconography, and conditional rendering.",
                        "Automated Schema Syncing: Database architecture automatically synced with Prisma models, ensuring type safety."
                    ]
                },
                {
                    id: "tech-stack",
                    title: "Complete Tech Stack",
                    content: "Built using a combination of powerful frontend frameworks and robust database technologies:",
                    list: [
                        "Frontend: Next.js (App Router), React 18, Tailwind CSS, Lucide React (Icons), TypeScript",
                        "Backend: Next.js API Routes (Serverless Functions)",
                        "Database & ORM: PostgreSQL (hosted on Neon.tech), Prisma ORM",
                        "Deployment: Vercel (Frontend & Serverless API), Neon (Database)",
                        "Historical Version: Python 3.11 (Original CLI Version)"
                    ]
                }
            ]
        }
    },
    { id: "p9", title: "Agentic AI Project", description: "Autonomous AI agent with reasoning and multi-step task execution.", category: "ai", tags: ["Agentic AI", "LLM"], emoji: "Bot" },
    {
        id: "p10",
        title: "Feedback Automation (n8n)",
        description: "An automated intelligent feedback system using n8n and Gemini API for categorization and multi-channel routing.",
        category: "ai",
        tags: ["n8n", "Gemini API", "Automation", "Airtable"],
        emoji: "Settings",
        thumbnail: "/Thumbnails/Feedback_Automation[n8n].png",
        github: "https://github.com/alimaazakhter/n8n-AI-Automation-models",
        content: {
            videoUrl: "/n8n-automation.mp4",
            note: "This project was developed as a successful Proof of Concept (PoC) for enterprise feedback automation. Due to the nature of the API integrations (Slack, Gmail, Airtable) and workflow engine costs, the deployment is run on-demand. A complete end-to-end demonstration is provided in the video. You can also view the GitHub repository to download the workflow JSON file and import it directly into your own n8n instance.",
            sections: [
                {
                    id: "overview",
                    title: "Project Overview",
                    content: "A powerful automation workflow built with n8n that manages an end-to-end Feedback System. It intelligently collects, categorizes, stores, and notifies teams about user feedback in real-time without any human intervention."
                },
                {
                    id: "architecture",
                    title: "Automation Workflow",
                    content: "The workflow operates on a seamless multi-step pipeline triggered by user submissions:",
                    list: [
                        "Input: Captures Name, Email, Contact & Feedback from a form.",
                        "AI Processing: Passes the data to the Google Gemini Chat Agent.",
                        "Routing: A Switch node redirects the flow based on the AI's classification.",
                        "Execution: Stores data in Airtable, notifies Slack, and emails the user."
                    ]
                },
                {
                    id: "features",
                    title: "Key Features",
                    content: "This system ensures proper categorization and keeps both teams and users updated seamlessly.",
                    list: [
                        "Automated Data Collection via webhooks.",
                        "AI Classification into Complaint, Compliment, or Feature Request.",
                        "Centralized Database storage automatically syncing to Airtable.",
                        "Instant Team Notifications via designated Slack channels.",
                        "Automated Email Confirmations sent to the user acknowledging receipt."
                    ]
                },
                {
                    id: "tech-stack",
                    title: "Tech Stack & Integrations",
                    content: "Built completely using low-code automation and AI APIs:",
                    list: [
                        "n8n (Workflow Automation Engine)",
                        "Google Gemini API (Natural Language Classification)",
                        "Airtable (Cloud Database)",
                        "Slack API (Team Notifications)",
                        "Gmail API (Automated Email Responses)"
                    ]
                }
            ]
        }
    },
    {
        id: "p11",
        title: "India Unemployment Analysis Dashboard",
        description: "An interactive web-based analytics dashboard exploring India's unemployment trends (2019–2024), COVID-19 impact, and rural-urban dynamics.",
        category: "data",
        tags: ["Chart.js", "JavaScript", "Python", "Data Visualization", "Dashboard"],
        emoji: "TrendingDown",
        thumbnail: "/Thumbnails/Unemployment Analysis.png",
        github: "https://github.com/alimaazakhter/Unemployment-Analysis-India",
        link: "https://alimaazakhter.github.io/Unemployment-Analysis-India/#overview",
        content: {
            videoUrl: "/unemployment-analysis.mp4",
            sections: [
                {
                    id: "overview",
                    title: "Project Overview",
                    content: "An interactive analytics dashboard that explores India's unemployment trends between 2019 and 2024, covering the economic impact of COVID-19, labor market recovery patterns, state-wise disparities, and rural-urban employment dynamics. Built to transform complex labor market datasets (740+ records across 28 states) into an engaging, data-driven storytelling experience."
                },
                {
                    id: "workflow",
                    title: "Analytics Pipeline",
                    content: "The project follows a complete data analytics workflow from raw datasets to interactive visual storytelling:",
                    list: [
                        "Data Processing: Python pipeline (generate_data.py) to clean, aggregate, and structure raw unemployment datasets.",
                        "Dataset Layer: Processed data served as a structured JavaScript module (data.js) for instant client-side access.",
                        "Visualization Engine: Five interactive Chart.js dashboards (Trends, State-wise, Monthly, COVID Impact, Rural vs Urban).",
                        "Interactive Explorer: Advanced data table with multi-field search, filtering, sorting, pagination, and CSV export."
                    ]
                },
                {
                    id: "features",
                    title: "Key Features & Insights",
                    content: "The dashboard reveals critical labor market insights through interactive modules:",
                    list: [
                        "COVID-19 Shock: Average unemployment surged to 24.26% during April–May 2020 nationwide lockdowns.",
                        "Urban Vulnerability: Urban unemployment (13.43%) consistently exceeded rural (9.73%), revealing structural labor market gaps.",
                        "State Spotlight Explorer: Select any state to view regional insights, pandemic impact, and policy recommendations.",
                        "Seasonal Heatmap: Custom Year × Month heatmap revealing lockdown intensity periods and recovery phases.",
                        "Export System: Download filtered datasets to CSV, charts as PNG, with Light/Dark theme switching."
                    ]
                },
                {
                    id: "tech-stack",
                    title: "Tech Stack",
                    content: "Built as a responsive, glassmorphism-styled analytics platform:",
                    list: [
                        "Frontend: HTML5, CSS3 (Glassmorphism), JavaScript ES6",
                        "Visualization: Chart.js (5 interactive dashboards + custom heatmap)",
                        "Data Processing: Python (dataset cleaning & aggregation)",
                        "Deployment: GitHub Pages",
                        "UI/UX: Dark/Light themes, responsive design, micro-animations"
                    ]
                }
            ]
        }
    },
    { id: "p12", title: "Customer Churn — Big Data", description: "Large-scale analysis identifying key customer attrition factors.", category: "data", tags: ["Big Data", "Pandas"], emoji: "BarChart3" },
    {
        id: "p13",
        title: "Banking Risk Analysis Dashboard",
        description: "An end-to-end Data Analysis project showcasing a complete data journey—from Python EDA to an interactive Power BI Dashboard.",
        category: "data",
        tags: ["Power BI", "Python", "Pandas", "EDA", "Data Modeling"],
        emoji: "Landmark",
        thumbnail: "/Thumbnails/Banking Risk Analysis.png",
        github: "https://github.com/alimaazakhter/EliteTech-Internship-Projects/tree/main/Banking-Risk-Analysis",
        content: {
            videoUrl: "/banking-risk.mp4",
            note: "Download the PBIX file and dataset from GitHub to explore the complete dashboard locally in Power BI Desktop.",
            sections: [
                {
                    id: "overview",
                    title: "Project Overview",
                    content: "This project showcases a complete data journey in the Banking domain—from Exploratory Data Analysis (EDA) in Python to an interactive Power BI Dashboard designed to uncover meaningful insights in banking operations and risk assessment."
                },
                {
                    id: "workflow",
                    title: "Data Pipeline",
                    content: "The workflow spans across raw data processing to final visual storytelling:",
                    list: [
                        "Raw Data Extraction (CSV format).",
                        "Data Cleaning & EDA in Python (handling nulls, exploring trends).",
                        "Data Modeling & DAX calculations in Power BI.",
                        "Interactive Dashboard creation with AI capabilities."
                    ]
                },
                {
                    id: "features",
                    title: "Dashboard Pages",
                    content: "Built an interactive and user-friendly dashboard divided into 5 key pages:",
                    list: [
                        "Home – Quick overview and navigation menu.",
                        "Loan Analysis – Trends, types, and high-risk lending areas.",
                        "Deposit Analysis – Patterns, customer segments, and growth metrics.",
                        "Summary – Key metrics and actionable insights.",
                        "Ask a Question – Natural language Q&A feature using Power BI's AI capabilities."
                    ]
                },
                {
                    id: "tech-stack",
                    title: "Tools & Skills",
                    content: "This project sharpened skills in both technical analysis and visual storytelling:",
                    list: [
                        "Python (Pandas, Seaborn, Matplotlib) for EDA.",
                        "Power BI (DAX, Data Modeling, AI Visuals) for BI.",
                        "Data Cleaning & Transformation pipelines.",
                        "Domain Understanding – Banking & Financial Services."
                    ]
                }
            ]
        }
    },
    {
        id: "p14",
        title: "Tata Data Visualization Internship",
        description: "Power BI dashboards analyzing business scenarios, seasonal revenue, and global product demand.",
        category: "data",
        tags: ["Power BI", "Data Visualization", "Business Analytics"],
        emoji: "TrendingUp",
        thumbnail: "/Thumbnails/Tata Data Visualization.png",
        github: "https://github.com/alimaazakhter/Tata-Data-Visualization-Tasks",
        content: {
            images: [
                "/tata-visuals/img1.jpeg",
                "/tata-visuals/img2.jpeg",
                "/tata-visuals/img3.jpeg",
                "/tata-visuals/img4.jpeg"
            ],
            certificate: "/tata-visuals/certificate.png",
            note: "Download the complete .pbix files and raw dataset from the GitHub repository to view the interactive dashboards locally.",
            sections: [
                {
                    id: "overview",
                    title: "Project Overview",
                    content: "This project features tasks completed as part of the Tata Data Visualization Forage Virtual Internship. The core focus was to analyze business scenarios, select optimal visualization methods, and communicate data-driven insights effectively to executives."
                },
                {
                    id: "workflow",
                    title: "Data Visualization Workflow",
                    content: "The internship involved a structured approach to solving business intelligence problems:",
                    list: [
                        "Framing the Business Scenario: Understanding core business problems and KPIs.",
                        "Choosing the Right Visuals: Selecting charts for maximum communicative impact.",
                        "Creating Effective Visuals: Designing clear and insightful Power BI dashboards.",
                        "Communicating Insights: Presenting data-driven stories to drive decisions."
                    ]
                },
                {
                    id: "features",
                    title: "Key Insights Delivered",
                    content: "Created specialized views to answer specific strategic questions:",
                    list: [
                        "Revenue Trends (2011): Built time-series analysis to track monthly revenue, helping forecast sales.",
                        "Top Revenue-Generating Countries: Bar charts highlighting highest contributors (excluding the UK).",
                        "Top Customers by Revenue: Descending revenue charts to help CMOs identify and retain high-value clients.",
                        "Global Product Demand: Comprehensive analysis of high-demand regions for global expansion planning."
                    ]
                },
                {
                    id: "tech-stack",
                    title: "Tools Utilized",
                    content: "Leveraged industry-standard BI tools for data manipulation and visualization:",
                    list: [
                        "Power BI (Visualizations, Formatting, Dashboards)",
                        "Excel (Raw Data Management)",
                        "Business Storytelling & Executive Communication"
                    ]
                }
            ]
        }
    },
    {
        id: "p15",
        title: "Hotel Booking Cancellations Dashboard",
        description: "An interactive Excel dashboard to analyze hotel booking cancellations, uncovering trends over 3 years.",
        category: "data",
        tags: ["Excel", "Python", "EDA", "Data Visualization"],
        emoji: "Hotel",
        thumbnail: "/Thumbnails/Hotel Booking Cancellation.png",
        github: "https://github.com/alimaazakhter/Hotel-booking-cancellations-Dashboard",
        content: {
            videoUrl: "/hotel-booking.mp4",
            note: "Download the Excel dashboard file and dataset from GitHub to explore the complete interactive dashboard locally.",
            sections: [
                {
                    id: "overview",
                    title: "Project Overview",
                    content: "Created an interactive dashboard to analyze hotel booking cancellations. The dashboard provides detailed insights into booking trends, cancellations, and client preferences based on data collected over three years. It uses data visualization to identify patterns and provide actionable insights for improving booking strategies and customer retention."
                },
                {
                    id: "workflow",
                    title: "Data Analysis Workflow",
                    content: "The analytical process moves from raw data to an actionable executive dashboard:",
                    list: [
                        "Data Collection: 3 years of hotel booking data.",
                        "Exploratory Data Analysis (EDA): Using Python to identify missing values and initial trends.",
                        "Data Modeling: Utilizing Excel Pivot Tables for aggregation.",
                        "Visual Storytelling: Building interactive charts and slicers to filter data by year and month."
                    ]
                },
                {
                    id: "features",
                    title: "Key Insights Discovered",
                    content: "Every graphic on the dashboard tells a story. Here are the key findings:",
                    list: [
                        "City hotels dominate total bookings (67%) but also contribute to the vast majority (76%) of cancellations.",
                        "October stands out as the peak month for cancellations.",
                        "Desired rooms surprisingly face higher cancellation rates than undesired ones.",
                        "Trends can be filtered dynamically by Arrival Date, Year, and Month."
                    ]
                },
                {
                    id: "tech-stack",
                    title: "Tools & Technologies",
                    content: "Built completely using foundational data tools:",
                    list: [
                        "Microsoft Excel (Pivot Tables, Advanced Charting, Dashboards)",
                        "Python (Data Cleaning & EDA)",
                        "Data Storytelling & Analytical Thinking"
                    ]
                }
            ]
        }
    },
    {
        id: "p16",
        title: "Heart Disease Prediction System",
        description: "A full-stack medical AI web application for cardiovascular health risk assessment using Machine Learning and a modern React frontend.",
        category: "web",
        tags: ["React", "Flask", "Machine Learning", "Scikit-learn"],
        emoji: "Heart",
        thumbnail: "/Thumbnails/Heart Disease Prediction.png",
        github: "https://github.com/alimaazakhter/Heart-Disease-Prediction-Model-app",
        link: "https://heart-disease-prediction-model-app.onrender.com/",
        content: {
            videoUrl: "/heart-disease.mp4",
            sections: [
                {
                    id: "overview",
                    title: "Project Overview",
                    content: "The Heart Disease Prediction System is a full-stack medical AI web application that predicts the likelihood of heart disease in a patient based on 11 clinical parameters. The system uses a supervised Machine Learning model trained on a real-world cardiac dataset and exposes the AI through a professional REST API backend."
                },
                {
                    id: "architecture",
                    title: "Architecture Overview",
                    content: "The project uses a decoupled Client-Server architecture:",
                    list: [
                        "Frontend: Modern React 18 App with TypeScript, Vite, and Chart.js",
                        "Backend: Flask REST API handling CORS and serving the AI",
                        "AI Engine: Scikit-learn Random Forest Classifier serialized via Pickle"
                    ]
                },
                {
                    id: "ml-model",
                    title: "Machine Learning Model",
                    content: "Algorithm Used: Random Forest Classifier (~88% accuracy). Random Forest is an ensemble machine learning method that builds multiple Decision Trees during training and merges their predictions.",
                    list: [
                        "Handles both numerical and categorical medical data efficiently.",
                        "Robust performance on clinical tabular datasets.",
                        "Provides higher accuracy than a single Decision Tree.",
                        "Interpretability is reasonable for Healthcare AI."
                    ]
                },
                {
                    id: "features",
                    title: "Key Features",
                    content: "The application is packed with clinical and developer features:",
                    list: [
                        "AI Heart Disease Prediction powered by a trained Random Forest Classifier.",
                        "PDF Report Generation via ReportLab for formatted clinical reports.",
                        "Interactive Health Dashboard with Bar Charts and Radar Charts comparing vital signs against healthy averages.",
                        "Offline Body Mass Index (BMI) calculator with automatic categorization."
                    ]
                },
                {
                    id: "tech-stack",
                    title: "Tech Stack",
                    content: "Built using a modern decoupled stack:",
                    list: [
                        "React 18 + TypeScript + Vite (Frontend)",
                        "Chart.js + react-chartjs-2 (Data Visualization)",
                        "Python + Flask + Flask-CORS (Backend REST API)",
                        "Scikit-learn + Pandas + NumPy (Machine Learning)",
                        "ReportLab (PDF Generation)"
                    ]
                }
            ]
        }
    },

    {
        id: "p18",
        title: "StreamAura2.O",
        description: "Modern movie streaming platform with an immersive UI and seamless user experience.",
        category: "web",
        tags: ["React", "Next.js", "Web App", "UI/UX"],
        emoji: "Film",
        thumbnail: "/Thumbnails/StreamAura.png",
        link: "https://stream-aura2-o-ii3v.vercel.app/",
        github: "https://github.com/alimaazakhter/StreamAura2.O/tree/main",
        content: {
            videoUrl: "/StreamAura2.O Video.mp4",
            note: "⚠️ StreamAura 2.0 is an educational full-stack OTT platform prototype built for portfolio and technical demonstration purposes using open-source demo cinema, public trailers, and locally hosted sample media only. Commercial movies or series are not playable within the app, as uploading or streaming full-length copyrighted media without explicit permission, licensing, or rights is illegal.",
            sections: [
                {
                    id: "overview",
                    title: "About the Project",
                    content: "StreamAura 2.0 is an advanced full-stack movie streaming platform that integrates an immersive UI with powerful backend services. It features an intelligent AI chatbot, robust authentication, and seamless user data synchronization across devices."
                },
                {
                    id: "workflow",
                    title: "System Architecture & Workflow",
                    content: "Architected using modern, scalable free-tier cloud services to deliver enterprise-grade performance:",
                    list: [
                        "Supabase handles the core PostgreSQL database with Row Level Security (RLS) for data isolation.",
                        "Prisma ORM streamlines database interactions with strict typing for all tables.",
                        "Airtable & Slack manage contact feedback submissions and real-time system alerts.",
                        "NextAuth.js provides secure Google OAuth integration and JWT session management."
                    ]
                },
                {
                    id: "features",
                    title: "Key Features",
                    content: "The platform delivers an exceptional frontend experience and intelligent user features:",
                    list: [
                        "Intelligent AI chatbot ('Aura') that processes natural language to generate smart movie recommendations.",
                        "Interactive UI cards that dynamically link to TMDb movie details within the chat.",
                        "Responsive layout ensuring compatibility across desktop and mobile devices.",
                        "Secure, tokenized password reset links and automated support responses via Resend."
                    ]
                },
                {
                    id: "tech-stack",
                    title: "Tech Stack & APIs",
                    content: "Powered by a robust modern stack and powerful external APIs:",
                    list: [
                        "Frontend: Next.js App Router, React, Tailwind CSS",
                        "Backend & Database: Supabase (PostgreSQL), Prisma ORM",
                        "Authentication: NextAuth.js (Google OAuth)",
                        "APIs: TMDb API (Movies/TV), Google Gemini AI 2.5 Flash, Resend Email API"
                    ]
                }
            ]
        }
    },
];

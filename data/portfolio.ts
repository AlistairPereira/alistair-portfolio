export const profile = {
  name: "Alistair Simpson Pereira",
  shortName: "Alistair Pereira",
  title: "Data Analytics |  AI/ML | QA Testing ",
  subtitle: "Power BI • SQL • Manual Testing • Postman • Python • AI/ML",
  location: "Germany",
  email: "your-email@gmail.com",

  // Replace with your real links
  linkedin: "https://www.linkedin.com/in/alistair-pereira-45571018a/",
  github: "https://github.com/AlistairPereira",

  headline:
    "I work at the intersection of data, intelligent systems, and software quality.",
  summary:
    "I analyze data, build dashboards, validate SQL/API data, test applications, and develop AI/ML-driven solutions for real-world problems.",
};

export const bookStats = [
  {
    label: "Focus",
    value: "Analytics + AI/ML + QA",
  },
  {
    label: "Analytics",
    value: "Power BI, SQL, Python",
  },
  {
    label: "AI/ML",
    value: "ML, Deep Learning, NLP, LLM Agents",
  },
  {
    label: "QA Testing",
    value: "Manual, API, SQL Validation",
  },
];

export const chapters = [
  {
    title: "About Me",
    href: "#about",
    text: "A Master’s graduate profile combining data analytics, AI/ML project work, and quality assurance experience.",
  },
  {
    title: "Skills",
    href: "#skills",
    text: "Core skills across Power BI, SQL, Python, machine learning, QA testing, and technical tools.",
  },
  {
    title: "Experience",
    href: "#experience",
    text: "Professional experience across analytics, data science research, and software quality assurance.",
  },
  {
    title: "Projects",
    href: "#projects",
    text: "Case studies covering analytics, NLP, LLM agents, data engineering, and dashboard development.",
  },
];


export const skills = [
  {
    category: "Data Analytics & BI",
    items: [
      "Power BI",
      "SQL",
      "Excel",
      "Power Query",
      "DAX",
      "EDA",
      "Data Cleaning",
      "Data Transformation",
      "Data Validation",
      "KPI Reporting",
      "Dashboard Development",
    ],
  },
  {
    category: "Machine Learning & AI",
    items: [
      "Python",
      "Machine Learning",
      "Predictive Modelling",
      "Supervised Learning",
      "Unsupervised Learning",
      "Clustering",
      "Deep Learning",
      "NLP",
      "Semantic Embeddings",
      "LLM Agents",
      "LLaMA",
      "Ollama",
    ],
  },
  {
    category: "Quality Assurance",
    items: [
      "Manual Testing",
      "Functional & UI Testing",
      "Regression / Smoke / Sanity Testing",
      "API Testing",
      "Test Case Design",
      "Defect Reporting",
      "SQL Data Validation",
      "Agile QA Collaboration",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "GitHub",
      "GCP",
      "BigQuery",
      "MySQL",
      "PostgreSQL",
      "Power BI Service",
      "Postman",
      "Jira",
      "MS Excel",
      "MS Word",
      "MS PowerPoint",
    ],
  },
];

export const experience = [
  {
    role: "Data Analyst Intern",
    company: "Biotest GmbH & Co. KGaA, Germany",
    period: "Feb 2026 - May 2026",
    description:
      "Developed Power BI dashboards to track operational and financial KPIs, performance trends, and business reporting needs. Improved reporting efficiency by automating dashboard updates, validating data accuracy, and turning business data into clear insights for decision-making.",
  },
  {
  role: "Data Science Research Student",
  company: "e.Ray Europa GmbH, Germany",
  period: "Oct 2024 - Mar 2025",
  description:
    "Worked on machine learning-based time-series prediction using environmental datasets. Supported data preparation, model evaluation, and a 5-day prediction pipeline to help with risk detection, reporting, and data-driven decision-making.",
},
{
  role: "QA Engineer",
  company: "VVP Healthcare Evolution Pvt Ltd, India",
  period: "Aug 2021 - Feb 2024",
  description:
    "Performed manual testing across functional, regression, smoke, sanity, UI, and end-to-end workflows. Created test cases, validated data using SQL, tested APIs, reported defects, and collaborated with developers and product teams in Agile/Scrum workflows.",
},
];

export const projects = [
  {
    title: "Soccer Analytics - SQL & Power BI",
    type: "Data Analytics",
    repo: "https://github.com/AlistairPereira/football-sql-powerbi-analytics",
    problem:
      "Football match data of top 5 European leagues was raw and difficult to analyze directly for team and league performance insights.",
    approach:
      "Cleaned the data, designed SQL views, structured the database, and built Power BI dashboards.",
    outcome:
      "Created a clear analytics view for team performance, match results, and league trends.",
    tools: ["Python", "SQL", "PostgreSQL", "Power BI", "Excel"],
  },
  {
    title: "Building Taxonomies from Textual Corpora",
    type: "AI / NLP",
    repo: "https://github.com/AlistairPereira/Building-Taxonomies-from-Textual-Corpora",
    problem:
      "Large product catalogs are difficult to organize manually because taxonomy creation is slow, expensive, and hard to scale as product data grows.",
    approach:
      "Built an automated taxonomy generation framework using product text preprocessing, SBERT embeddings, UMAP dimensionality reduction, OPTICS clustering, Agglomerative clustering, and LLM-based category naming.",
    outcome:
      "Generated a hierarchical A–B–C product taxonomy from unstructured product data, producing 146+ C-level categories with strong semantic alignment and improved clustering stability.",
    tools: [
      "Python",
      "SBERT",
      "UMAP",
      "OPTICS",
      "Agglomerative Clustering",
      "LLaMA",
      "NLP",
    ],
  },
  {
    title: "Data Insights Automation System",
    type: "AI / LLM Agents",
    repo: "https://github.com/AlistairPereira/llm-data-insights-agent",
    problem:
      "Exploratory data analysis, machine learning, clustering, and reporting often require multiple manual steps, making analytics workflows slow and repetitive.",
    approach:
      "Built a multi-agent LLM system using Python and Ollama, with agents for data cleaning, visualization, correlation analysis, outlier detection, ML modeling, clustering, and report generation.",
    outcome:
      "Automated complete analytics workflows and generated PDF reports combining EDA results, ML performance, clustering insights, and tuning summaries.",
    tools: [
      "Python",
      "Ollama",
      "Llama 3.2",
      "LLM Agents",
      "Machine Learning",
      "Clustering",
      "PDF Reports",
    ],
  },
  {
    title: "Real-Time Air Traffic Analytics Pipeline",
    type: "Data Engineering",
    repo: "https://github.com/AlistairPereira/data_management",
    problem:
      "Live aircraft data needed to be collected, transformed, stored, and visualized for real-time analysis.",
    approach:
      "Used Python and REST API extraction, stored the data in BigQuery, and visualized it in Power BI.",
    outcome:
      "Built an end-to-end real-time analytics pipeline with dashboard-ready aviation insights.",
    tools: ["Python", "REST API", "BigQuery", "Tableau", "GitHub"],
  },
];
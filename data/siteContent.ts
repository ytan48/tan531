import type { SiteContent } from "./types";

export const siteContent: SiteContent = {
  profile: {
    name: "Yujian Tan",
    role: "Aspiring Data Scientist and Data Analyst",
    headline: "Uncovering Insights from Data",
    shortBio:
      "Transforming complex datasets into clear, actionable stories that support better business decisions and measurable performance improvement.",
    email: "ytan48@illinois.edu",
    currentFocus:
      "Building interpretable models, trustworthy dashboards, and stakeholder-friendly narratives that move from insight to action.",
    focusAreas: [
      {
        label: "Primary toolkit",
        value: "Python, SQL, R, dbt, Power BI",
      },
      {
        label: "Analytical scope",
        value: "Forecasting, experimentation, segmentation",
      },
      {
        label: "Business lens",
        value: "Revenue, retention, and operational efficiency",
      },
      {
        label: "Delivery style",
        value: "Clean storytelling with measurable recommendations",
      },
    ],
    stackHighlights: [
      "Strong foundation in SQL, Python, statistics, and data visualization.",
      "Comfortable translating stakeholder ambiguity into scoped analytical work.",
      "Focused on reproducible workflows, executive clarity, and practical impact.",
    ],
  },
  about: {
    intro:
      "My name is Yujian Tan, and I am a Statistics student at the University of Illinois Urbana-Champaign focused on analysis, modeling, and clear communication.",
    paragraphs: [
      "My work is centered on data analysis, statistical modeling, machine learning, and data visualization.",
      "I am good at turning analytical results into explanations that non-technical stakeholders can understand.",
    ],
    capabilities: [
      "Python",
      "R",
      "SQL",
      "Tableau",
      "R Shiny",
      "Machine Learning",
      "Statistical Analysis / Modeling",
    ],
    funFacts: [
      "I can speak both Cantonese and Mandarin.",
      "I am based in Chicago.",
      "Outside of analytics, I enjoy playing billiards.",
    ],
    principles: [
      "Start with the decision, not the chart.",
      "Prefer interpretable methods when they are good enough.",
      "Keep dashboards sparse, readable, and tied to actions.",
      "Document assumptions so future updates stay maintainable.",
    ],
  },
  education: [
    {
      institution: "University of Illinois Urbana-Champaign",
      degree: "Bachelor of Science in Statistics",
      minor: "Data Science minor",
      graduation: "Expected May 2027",
      coursework: [
        "Statistical Modeling",
        "Machine Learning",
        "Data Visualization",
        "Data Science",
        "Probability",
        "Statistical Computing",
      ],
    },
  ],
  experience: [
    {
      role: "Data Analyst Intern",
      organization: "IDX Exchange",
      period: "March, 2026 - Present",
      location: "Champaign, IL | Remote",
      summary: "",
      highlights: ["Working with real estate transaction data to identify market trends, build Tableau dashboards, and generate insights that support business decisions.  Cleaning and analyzing large datasets using Python and SQL, while developing reports on pricing trends, inventory levels, and regional market performance."],
    },
    {
      role: "Program Assistant Intern",
      organization: "Coalition for a Better Chinese American Community (CBCAC)",
      period: "June, 2025 - August, 2025",
      location: "Chicago, IL | On-site",
      summary: "",
      highlights: [
        "Cleaned and standardized client data in Excel using Power Query, ensuring accuracy across formats for numbers, dates, and text.",
        "Merged and transformed multiple Excel files into a unified worksheet by removing duplicates and unwanted entries to support cross-program communication.",
        "Collected and digitized 30 demographic surveys, then submitted them to the Asian Health Coalition, enabling health data tracking for elderly Chinatown residents.",
        "Designed the National Convention Program Book and advertisements for local businesses using Canva, delivering high-quality, client-focused visual content.",
        "Conducted in-person canvassing with Chinatown small businesses to promote Summer Fair partnerships, introducing discount flyer initiatives to boost foot traffic and visibility.",
        "Hosted and presented digital literacy workshops to elders in Chinatown, teaching fundamental smartphone skills to promote digital inclusion.",
        "Assisting with the Chinatown Summer Townhall and The 78 Townhall events, including logistics, attendee registration, and materials preparation.",
      ],
    },
    {
      role: "Summer Intern",
      organization: "CORPORATE INVESTMENTS GROUP INC",
      period: "June, 2024 - August, 2024",
      location: "Chicago, IL | On-site",
      summary: "",
      highlights: [
        "Built and managed a simulated investment portfolio using virtual trading, selecting stocks through analysis of P/E Ratio, Volume, Market Cap, and candlestick charts.",
        "Monitored portfolio holdings daily in a simulated trading environment, tracking performance and market movements to evaluate investment decisions.",
        "Applied fundamental and technical analysis to support stock selection decisions.",
        "Collaborated with 2 interns to design a marketing banner for the company, enhancing its branding efforts.",
        "Engaged in professional networking events, gaining valuable insights into diverse business models and industry practices.",
      ],
    },
    {
      role: "Youth Intern / Student Leader",
      organization: "After School Matters Youth Program Internship (Pui Tak Center)",
      period: "February, 2023 - May, 2023",
      location: "Chicago, IL | On-site",
      summary: "",
      highlights: [
        "Organized over 100 paper surveys gathered from Chinatown streets regarding safety concerns with assistance from my supervisor, compiling them into an Excel file for submission to the CPD.",
        "Collaborated with a team of 12 interns across different groups to complete a youth Mental Health project in Chinatown, enhancing community well-being.",
        "Assisted 13 students in classes by reviewing lessons, documenting progress, and maintaining effective communication with parents about academic performance.",
      ],
    },
  ],
  activities: [
    {
      title: "Data Scientist Member",
      organization: "Data Science Club",
      period: "August, 2025 - Present",
      description:
        "Led a Data Dive team in a credit risk analytics engagement focused on identifying country-level credit overheating risk in a global macro-risk monitoring context. Club involvement focused on machine learning, Scikit-learn, pandas, and Python.",
    },
    {
      title: "Team024 Data Crucher",
      organization: "Illinois Statistics Datathon 2026",
      period: "March 28-29, 2026",
      description:
        "Participated in a 36-hour datathon using AWS SageMaker JupyterLab and Python to predict 30-minute interval metrics for August 2025 call volume, customer care time, and abandoned rate.",
    },
    {
      title: "Community Volunteer",
      organization: "Coalition for a Better Chinese American Community (CBCAC)",
      period: "November, 2025 - Present",
      description:
        "Assist digital literacy and community service initiatives.",
    },
  ],
  featuredProjects: [
    {
      title: "Real-Time Pitch Type Classification for MLB Broadcast",
      summary:
        "Built a proof-of-concept real-time pitch-type classifier for MLB broadcast overlays using Statcast pitch tracking data for a per-pitcher model focused on Kevin Gausman.",
      problem:
        "Broadcast overlays need fast, pitcher-specific pitch type predictions that can support real-time on-air usage.",
      approach:
        "Implemented a scikit-learn pipeline with imputation, scaling, and one-hot encoding, then tuned a KNN model with stratified cross-validation and grid search on a time-based 2025 holdout set.",
      outcome:
        "Achieved 0.985 accuracy and used a normalized confusion matrix to identify class-specific errors and define conservative deployment rules for broadcast use.",
      tags: ["Data Science", "Python", "Scikit-learn", "KNN"],
      links: [
        {
          label: "GitHub repository",
          href: "https://github.com/ytan48/Machine-Learning-miniProjects/tree/main/MLB%20Pitch%20Type%20Classification",
        },
      ],
    },
    {
      title: "Credit Overheating Early-Warning Model",
      summary:
        "Built an end-to-end early-warning classifier on a 25-year BIS credit dataset to flag above-trend credit growth and produce country-level risk scoring.",
      problem:
        "Credit risk monitoring needed a structured way to flag overheating markets and prioritize deeper review at the country level.",
      approach:
        "Conducted rigorous EDA and data QA by removing aggregate regions, resolving valuation-method inconsistencies, and validating long-run credit dynamics across sectors before model development.",
      outcome:
        "Produced country-level risk scoring and stakeholder-friendly visual outputs, including a country risk map, with model performance reaching an AUC of 0.69.",
      previewImage: "/projects/BIS.png",
      tags: ["Python", "Pandas", "Scikit-learn", "Data Cleaning", "EDA", "Data Visualization"],
      links: [
        {
          label: "GitHub repository",
          href: "https://github.com/ytan48/BIS-Warning-Model",
        },
      ],
    },
    {
      title: "U.S. MSA House Price Index Dashboard",
      summary:
        "Developed an interactive R Shiny dashboard to explore quarterly House Price Index trends across more than 400 U.S. metro areas from 2000 to the present.",
      problem:
        "Housing market analysis needed a faster way to compare price trends across states and metro areas without manual filtering.",
      approach:
        "Built a clean analysis dataset with tidyverse, engineered time features, standardized state and metro identifiers, and implemented reactive UI filters for state, metro area, and year range.",
      outcome:
        "Enabled reliable market trend comparisons with linked time-series plots and a drilldown table for validation in a single dashboard.",
      previewImage: "/projects/MSA.png",
      tags: ["R Shiny", "Dashboard", "tidyverse"],
      links: [
        {
          label: "Live dashboard",
          href: "https://ytan48.shinyapps.io/Interactive-FHFA-House-Price-Index-Dashboard/",
        },
        {
          label: "GitHub repository",
          href: "https://github.com/ytan48/Interactive-FHFA-House-Price-Index-Dashboard",
        },
      ],
    },
  ],
  moreProjects: [
    {
      title: "2026 Datathon Intraday Contact Center Demand Forecasting",
      summary:
        "Developed a Python-based forecasting pipeline in AWS SageMaker AI to predict 30-minute call volume, abandon rate, and customer care time across four portfolios.",
      problem:
        "The datathon problem required interval-level forecasts that could support staffing, scheduling, and contact center operations planning.",
      approach:
        "Cleaned and merged multi-sheet Excel and CSV operational data, engineered calendar, lag, and rolling-window features, and built regularized scikit-learn regression pipelines with imputation, scaling, and target transformation.",
      outcome:
        "Generated submission-ready interval forecasts and summarized results for operations planning in a 36-hour datathon setting.",
      tags: ["Data Science", "Python", "AWS SageMaker AI", "Forecasting"],
      links: [],
    },
  ],
  contactLead:
    "Feel free to reach out about internships, projects, or collaboration in data science and analytics.",
  contactLinks: [
    {
      label: "Email",
      value: "ytan48@illinois.edu",
      href: "mailto:ytan48@illinois.edu",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/yujian531",
      href: "https://www.linkedin.com/in/yujian531",
    },
    {
      label: "GitHub",
      value: "github.com/ytan48",
      href: "https://github.com/ytan48",
    },
  ],
};

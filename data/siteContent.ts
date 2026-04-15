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
      "My name is Yujian Tan (Pronounced: YOO-jyen Tahn), and I am a Statistics student at the University of Illinois Urbana-Champaign focused on analysis, modeling, and clear communication.",
    paragraphs: [
      "My work is centered on data analysis, statistical modeling, machine learning, and data visualization.",
      "I am good at turning analytical results into explanations that non-technical stakeholders can understand.",
    ],
    capabilities: [
      "Python",
      "R",
      "SQL",
      "Tableau",
      "Machine Learning",
      "Data Visualization",
      "Statistical Analysis / Modeling",
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
      title: "Datathon Participant",
      organization: "Illinois Statistics Datathon",
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
      title: "Customer Churn Risk Modeling",
      summary:
        "An end-to-end churn analysis that prioritized outreach based on customer behavior, contract patterns, and service usage.",
      problem:
        "The retention team had no reliable way to identify which customers were most likely to leave in the next billing cycle.",
      approach:
        "Built a feature set in SQL, trained an interpretable classification model in Python, and paired outputs with a simple risk segmentation dashboard.",
      outcome:
        "Created a ranked intervention list and a reusable scoring workflow that helped the team focus retention efforts on the highest-risk accounts.",
      tags: ["Python", "SQL", "Scikit-learn", "Feature Engineering"],
      links: [
        {
          label: "GitHub repository",
          href: "https://github.com/your-username/customer-churn-model",
        },
        {
          label: "Case study",
          href: "https://your-case-study-link.example.com/churn",
        },
      ],
    },
    {
      title: "Revenue Forecasting and Scenario Planning",
      summary:
        "A forecasting project designed to help finance and operations teams plan with clearer revenue expectations.",
      problem:
        "Leadership needed a more stable forecasting process than spreadsheet-based estimates and ad hoc assumptions.",
      approach:
        "Compared baseline time-series methods, created scenario bands for best and conservative cases, and surfaced assumptions in an executive-facing dashboard.",
      outcome:
        "Delivered a repeatable reporting cadence with clearer confidence ranges and better alignment between planning and actual business performance.",
      tags: ["Forecasting", "Python", "Time Series", "Power BI"],
      links: [
        {
          label: "GitHub repository",
          href: "https://github.com/your-username/revenue-forecasting",
        },
      ],
    },
    {
      title: "Executive KPI Command Center",
      summary:
        "A modern operations dashboard that consolidated product, sales, and service metrics into one decision-friendly reporting layer.",
      problem:
        "Stakeholders were pulling metrics from multiple tools, leading to inconsistent definitions and delayed reporting cycles.",
      approach:
        "Modeled a lightweight analytics layer, standardized KPI definitions, and designed a minimal dashboard focused on weekly decision signals.",
      outcome:
        "Reduced reporting friction and gave leadership a single place to track trend movement, investigate anomalies, and align on follow-up actions.",
      tags: ["Dashboarding", "dbt", "SQL", "Power BI"],
      links: [
        {
          label: "GitHub repository",
          href: "https://github.com/your-username/executive-kpi-dashboard",
        },
        {
          label: "Live dashboard",
          href: "https://your-dashboard-link.example.com/",
        },
      ],
    },
  ],
  moreProjects: [
    {
      title: "Marketing Funnel Conversion Audit",
      summary:
        "A funnel analytics review that mapped drop-off points across acquisition, trial activation, and subscription conversion.",
      problem:
        "Growth stakeholders could see top-line conversion trends but could not isolate where the funnel was breaking down for specific channels and cohorts.",
      approach:
        "Built a cohort-based SQL model, benchmarked stage-by-stage conversion by channel, and translated the findings into a concise optimization backlog.",
      outcome:
        "Highlighted the largest activation bottleneck and gave the growth team a prioritized list of experiments tied to measurable conversion lift.",
      tags: ["SQL", "Funnel Analysis", "Cohort Analysis", "Experimentation"],
      links: [
        {
          label: "GitHub repository",
          href: "https://github.com/your-username/funnel-conversion-audit",
        },
      ],
    },
    {
      title: "Retail Demand Forecasting Dashboard",
      summary:
        "A planning workflow that combined historical sales patterns with operational reporting for inventory decisions.",
      problem:
        "Operations teams were relying on lagging reports and manual exports to make weekly stock allocation decisions across locations.",
      approach:
        "Prepared demand signals in Python, pushed clean aggregates to a BI model, and designed a dashboard focused on forecast variance and replenishment risk.",
      outcome:
        "Improved visibility into inventory pressure points and supported more consistent weekly planning conversations.",
      tags: ["Python", "Forecasting", "Dashboarding", "Operations Analytics"],
      links: [
        {
          label: "GitHub repository",
          href: "https://github.com/your-username/retail-demand-dashboard",
        },
        {
          label: "Case study",
          href: "https://your-case-study-link.example.com/retail-demand",
        },
      ],
    },
    {
      title: "Support Ticket Topic Modeling",
      summary:
        "A text analytics project that summarized recurring support pain points from thousands of open-ended ticket descriptions.",
      problem:
        "Customer support leads had volume metrics, but lacked a scalable way to understand what issues were actually driving contact demand.",
      approach:
        "Cleaned ticket text, clustered related themes, and paired topic-level volume trends with examples that non-technical stakeholders could interpret quickly.",
      outcome:
        "Surfaced the most common support themes and provided a data-backed shortlist of product and process issues to investigate first.",
      tags: ["NLP", "Python", "Topic Modeling", "Text Analytics"],
      links: [
        {
          label: "GitHub repository",
          href: "https://github.com/your-username/support-ticket-topic-modeling",
        },
      ],
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

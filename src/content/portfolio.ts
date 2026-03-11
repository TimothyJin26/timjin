export type Project = {
    name: string;
    skills: string[];
    summary: string;
    details: string;
    awards?: string[];
    links: { label: string; href: string }[];
};

export type Internship = {
    company: string;
    role: string;
    dates: string;
    location: string;
    skills: string[];
    summary: string;
    details: string;
};

export const projects: Project[] = [
    {
        name: "FinHog",
        skills: ["TypeScript", "React", "AWS", "Claude", "LLM", "Agentic"],
        summary: "An autonomous financial analytics agent that manages and optimizes visualizations based on real-time statistical analysis.",
        details: `Add more detail here — e.g. how it works, what you built, challenges, what you learned, team size, etc.`,
        awards: [
            "1st Place HackMIT winner for Anthropic Best Use of Claude",
            "2nd Place Best Financial Analytics Agent for Warp",
        ],
        links: [
            { label: "Website", href: "https://www.finhog.net" },
            { label: "GitHub", href: "https://github.com/Cheggin/HackMIT2025" },
        ],
    },
    {
        name: "Lumo",
        skills: ["TypeScript", "AWS", "Swift", "Claude", "LLM", "NoSQL", "iOS", "Xcode"],
        summary: "A social platform that connects friends through emotionally context-aware messages.",
        details: `Add more detail here.`,
        links: [
            { label: "GitHub", href: "https://github.com/karenzhao35/nwHacks2025/tree/main" },
            { label: "Devpost", href: "https://devpost.com/software/lumo-uofbck" },
        ],
    },
    {
        name: "Vancouver Transit",
        skills: ["Flutter", "Dart", "iOS", "Android", "Xcode"],
        summary: "Live public transit iOS and Android app for Vancouver commuters.",
        details: `Add more detail here.`,
        links: [
            { label: "GitHub", href: "https://github.com/TimothyJin26/TransitApp" },
            { label: "Website", href: "https://jttechnologyapps.com" },
        ],
    },
    {
        name: "Balance Test",
        skills: ["Flutter", "AWS", "React", "TypeScript", "Postgres", "iOS", "Android", "Xcode"],
        summary: "A platform to enhance physical rehabilitation through ML analysis of IMU data.",
        details: `Add more detail here.`,
        links: [
            { label: "GitHub", href: "https://github.com/UBC-CIC/balance-test-app" },
            { label: "Website", href: "https://cic.ubc.ca/project/application-to-assess-patients-balance-level" },
        ],
    },
    {
        name: "Parkinson's Survey App",
        skills: ["TypeScript", "Flutter", "AWS", "iOS", "Android", "Xcode"],
        summary: "An iOS app to aid researchers in the collection of Parkinson symptoms data.",
        details: `Add more detail here.`,
        links: [
            { label: "GitHub", href: "https://github.com/UBC-CIC/parkinsons-backend" },
            { label: "Website", href: "https://cic.ubc.ca/project/parkinsons-woq-19-survey-application" },
        ],
    },
];

export const internships: Internship[] = [
    {
        company: "Amazon",
        role: "Software Development Engineer Intern",
        dates: "May 2025 - Aug 2025",
        location: "Vancouver, BC",
        skills: ["AWS", "LLM", "RAG", "React", "TypeScript", "Python", "Java", "Postgres"],
        summary: "Built an AWS and Claude LLM powered internal chatbot and migrated logging for the Prime Subscriptions API to CloudWatch.",
        details: `Add more detail here — e.g. team, what you owned, what you learned, impact, etc.`,
    },
    {
        company: "Stanford Emergency Medicine",
        role: "Student Researcher",
        dates: "May 2024 - Present",
        location: "Palo Alto (Remote)",
        skills: ["TypeScript", "LightGBM", "React", "AWS", "LLM", "Machine Learning"],
        summary: "Developing and benchmarking ML models to analyze live ED data and building AWS infrastructure for a frontend analytics dashboard.",
        details: `Add more detail here.`,
    },
];

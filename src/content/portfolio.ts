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
    links?: { label: string; href: string }[];
};

export const projects: Project[] = [
    {
        name: "FinHog",
        skills: ["TypeScript", "React", "AWS", "Claude", "LLM", "Agentic"],
        summary: "An autonomous financial analytics agent that manages and optimizes visualizations based on real-time statistical analysis.",
        details: `
FinHog is an autonomous analytics platform that automatically generates and adapts data visualizations to help users understand large volumes of financial transaction data without manual dashboard configuration. The project was built during HackMIT 2025, where it was developed from concept to a fully working system in under 24 hours.

Traditional analytics dashboards require users to manually define queries and configure charts. FinHog instead uses an AI agent that continuously analyzes incoming transaction data, detects statistically significant patterns, and automatically generates the most appropriate visualizations in real time. The system can analyze thousands of rows of financial data and dynamically choose between multiple chart types based on the structure and statistical characteristics of the dataset.

The frontend was built with React and TypeScript using Vite, with Recharts and D3.js used for data visualizations and React Three Fiber for 3D graphs. The backend was built using FastAPI and integrated with the Anthropic Claude API to translate natural language queries into SQL. The platform used Supabase for real-time data streaming and dynamic SQL execution.

I developed the visualization agent responsible for analyzing datasets and determining which charts should be generated. The agent performs statistical analysis on the incoming data, including pattern detection and other analytical checks, and then selects the most appropriate visualization type for the frontend to render.

One of the main technical challenges was connecting the visualization agent with the frontend chart system. Different chart types require different data structures and parameters, which meant dynamically generating queries and formatting results so the React visualization components could render them correctly.

FinHog delivered a full end-to-end pipeline capable of ingesting large volumes of financial transactions and generating AI-driven visualizations in real time. The project received significant recognition at HackMIT, winning first place for Anthropic’s Best Use of Claude and second place for Warp’s Best Financial Visualization Agent among over 1500 participants.
`,
        awards: [
            "1st Place HackMIT winner for Anthropic Best Use of Claude",
            "2nd Place Best Financial Analytics Agent for Warp",
        ],
        links: [
            { label: "Website", href: "https://www.finhog.net" },
            { label: "GitHub", href: "https://github.com/Cheggin/HackMIT2025" },
            { label: "Plume", href: "https://plume.hackmit.org/project/eiach-eepki-cpgal-mgrul" },
        ],
    },
    {
        name: "Lumo",
        skills: ["TypeScript", "AWS", "Swift", "Claude", "LLM", "NoSQL", "iOS", "Xcode"],
        summary: "A social platform that connects friends through emotionally context-aware messages.",
        details: `
Lumo is a social platform designed to help people feel supported during difficult moments by resurfacing comforting memories shared with their friends. The app allows users to send messages, photos, and memories to each other that can later be revisited when someone needs encouragement or a reminder of their support network.

The mobile application was built with Swift, while the backend infrastructure was built on AWS. Memories are shared through an API that sends messages to an AWS Lambda function, where a Claude LLM performs sentiment analysis to classify the emotional tone of the message. Based on the classification, the message is stored in a DynamoDB database and can later be retrieved through the API when users want to revisit supportive memories.

I focused on building the backend infrastructure and cloud architecture for the platform. I developed the AWS infrastructure using AWS CDK and TypeScript, creating a scalable serverless backend consisting of API endpoints, Lambda functions, and DynamoDB storage. This backend enabled real-time message processing, LLM-based sentiment classification, and efficient retrieval of memories for the mobile application.

One of the main challenges of the project was designing effective sentiment classification prompts and categories for the LLM so messages could be meaningfully organized. Another challenge was integrating the Swift mobile application with the AWS backend services.

The project was developed during nwHacks 2025 and demonstrated how LLM-powered analysis and serverless cloud infrastructure can be combined to create emotionally supportive social experiences.
`,
        links: [
            { label: "GitHub", href: "https://github.com/karenzhao35/nwHacks2025/tree/main" },
            { label: "Devpost", href: "https://devpost.com/software/lumo-uofbck" },
        ],
    },
    {
        name: "Vancouver Transit",
        skills: ["Flutter", "Dart", "iOS", "Android", "Xcode"],
        summary: "Live public transit iOS and Android app for Vancouver commuters.",
        details: `
Vancouver Transit is a mobile application I built while I was in high school as one of my first large software projects. At the time I had just learned basic Java programming in class and wanted to challenge myself by building something beyond simple console programs. I decided to create a mobile application that could be useful for my community.

My friends and I were commuting by bus every day in Vancouver, so I chose to build a public transit app that could help riders track buses and plan their trips. To differentiate the app from other transit apps, I implemented features such as a live map showing real-time bus locations.

Developing this project required learning many new technologies and concepts from scratch. I taught myself Flutter and Dart to build cross-platform mobile applications for both iOS and Android. I also learned how to design mobile user interfaces, work with external APIs to retrieve transit data, test and deploy mobile apps, integrate advertisements, and publish applications to the Apple App Store and Google Play Store.

The project took several months to complete and was my first experience building and releasing a full application. After launching the app publicly, it began gaining traction and eventually reached more than 10,000 installs across the app stores. Although the app is no longer actively maintained as I focus on newer projects, building and shipping Vancouver Transit was a formative experience that introduced me to real-world software development and motivated me to pursue larger engineering projects.
`,
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
        details: `My primary project was building an internal agentic chatbot experience for the Prime Subscriptions API team. The Prime Subscriptions API is the service that processes Amazon Prime membership sign-ups. The chatbot was designed to help internal customers quickly understand API behavior and resolve questions without needing direct engineer support.

I built a React dashboard along with an AWS-backed service layer written in TypeScript, Java, and Python. The system integrated Claude LLMs and used retrieval augmented generation (RAG) to answer questions about the Prime Subscriptions API. The knowledge base used by the RAG system contained internal API documentation and relevant code blocks from the repository, allowing the chatbot to provide explanations about API functionality and expected behavior.

The chatbot also supported automated API test execution. Customers could request tests directly from the dashboard, which queued jobs in an SQS queue. A backend service executed the tests and stored the results in a DynamoDB table so customers could view the behavior of the API without needing to set up the internal API test repository or navigate internal permission barriers.

In addition to the chatbot project, I migrated the Prime Subscriptions API logging system to Amazon CloudWatch across 9 global deployments. The previous logging platform was slow and difficult to query. I refactored the service logging implementation to be compatible with CloudWatch and incrementally deployed a logging agent that collected logs and streamed them to CloudWatch, enabling fast log querying and significantly improving debugging workflows for engineers.
`,
    },
    {
        company: "Stanford Emergency Medicine",
        role: "Student Researcher",
        dates: "May 2024 - Oct 2025",
        location: "Palo Alto (Remote)",
        skills: ["TypeScript", "LightGBM", "React", "AWS", "LLM", "Machine Learning"],
        summary: "Developing and benchmarking ML models to analyze live ED data and building AWS infrastructure for a frontend analytics dashboard.",
        details: `
I worked as a student researcher with the Stanford University Department of Emergency Medicine developing machine learning models to help optimize emergency department operations and improve patient outcome prediction.

My primary focus was developing and benchmarking models that predict whether a patient would be admitted to the hospital from the emergency department. I worked primarily with LightGBM models trained on historical patient data and tuned model parameters to improve predictive performance. Through this work I increased prediction accuracy by 12% AUROC, enabling better resource allocation decisions for over 100 patients per day.

I also conducted experiments comparing different model architectures, benchmarking PyTorch transformer-based deep learning models and LLM-assisted LightGBM models against existing baselines across millions of patient samples. These experiments helped identify the most effective architecture, achieving approximately 15% better accuracy than previous approaches.

To improve interpretability and usability for physicians, I implemented SHAP-based explainability for the LightGBM models and integrated the explanations into a React analytics dashboard and AWS backend. I added visualizations that allow emergency department physicians to better understand the reasoning behind model predictions.

In addition to machine learning research, I contributed to the frontend dashboard and backend infrastructure supporting the system. I fixed issues in the React interface and refactored the project's AWS CDK infrastructure-as-code so the platform could be reused and deployed to additional hospital sites, making it easier to expand the system to new emergency departments.
`,
    },
    {
        company: "Rivian",
        role: "Software Engineer Intern",
        dates: "May 2024 - Dec 2024",
        location: "Vancouver, BC",
        skills: ["Python", "React", "TypeScript", "AWS", "Protocol Buffers", "NATS", "Appium", "PyTest"],
        summary: "Built internal developer tools and testing infrastructure for Rivian's mobile app and vehicle communication platform.",
        details: `
My internship at Rivian consisted of two main phases. During the first phase I worked on the QA team responsible for ensuring the reliability and successful monthly releases of the Rivian mobile app. Each month a new version of the app was released to customers, and our team performed extensive testing to ensure new features worked correctly. This involved manual testing, debugging issues, collaborating with engineers to identify root causes, and writing automated tests. I developed automated API tests using PyTest and mobile UI tests using Appium to validate core app functionality and ensure regressions were caught before releases.

In the second phase of my internship I worked on several internal developer tools related to Rivian's vehicle communication platform. One major project involved migrating an internal tool called the Simulated Vehicle Shell (SVS), a command line tool used by engineers to simulate vehicle behavior and test mobile app interactions without requiring a physical vehicle. The simulator allowed the mobile app to send commands and modify vehicle states such as locking or unlocking doors, opening the frunk or trunk, controlling windows, and adjusting climate settings.

At the time, Rivian was performing a company-wide migration of its communication framework to a new system based on Google Protocol Buffers. My project was to redesign the SVS tool to support this new communication framework so developers could continue testing features during the migration. I built a Python-based vehicle message pub/sub framework using Protocol Buffers that mirrored the communication system used by the real vehicle, cloud, and mobile services. This ensured engineers could continue validating new features while the underlying communication infrastructure was being replaced. The project required extensive collaboration with engineers across the vehicle, cloud, and mobile teams to understand the architecture and replicate the behavior in the simulator.

I also developed a Python-based NATS client tool that bridged communication between cloud vehicles and the internal NATS messaging server. This enabled engineers to test real-time features using the new communication framework and improved internal testing workflows for hundreds of developers working on vehicle and mobile systems.

Toward the end of my internship I proposed and built a web-based interface for the Simulated Vehicle Shell. Previously, using SVS required cloning repositories, configuring CLI tools, and obtaining multiple authentication credentials, which created significant onboarding friction. I built a full-stack vehicle simulator using React, TypeScript, AWS infrastructure, and Claude LLMs that allowed employees to interact with simulated vehicles through a browser interface. The system integrated with Cognito authentication and exposed APIs that connected to the cloud-hosted SVS backend. This allowed engineers, designers, and product managers across the mobile and cloud organizations to test vehicle features without the complex local setup, saving hours of configuration time.
`,
    },
    {
        company: "UBC AWS Cloud Innovation Centre",
        role: "Software Developer Co-op",
        dates: "Jan 2023 - Aug 2023",
        location: "Vancouver BC",
        skills: ["Flutter", "Dart", "React", "TypeScript", "Python", "AWS", "Postgres", "Machine Learning"],
        summary: "Built cloud-based healthcare applications for Parkinson’s and rehabilitation research using Flutter mobile apps and AWS backends.",
        links: [
            { label: "Cloud Innovation Centers", href: "https://aws.amazon.com/government-education/cloud-innovation-centers/" },
            { label: "UBC CIC", href: "https://cic.ubc.ca/" },
        ],
        details: `
I worked as a software developer co-op at the UBC AWS Cloud Innovation Centre, a collaboration between AWS and the University of British Columbia that partners with public sector organizations to develop technology solutions for healthcare, research, and community challenges.

During the internship I worked on multiple healthcare projects building full-stack applications to support researchers, doctors, and patients. My work primarily involved developing Flutter mobile applications and integrating them with AWS-based backends for data processing, storage, and machine learning analysis.

One major project I worked on was the Balance Test application, designed to help researchers analyze patient balance during physical rehabilitation. Traditionally, clinicians would evaluate patient balance using the Berg Balance Scale, a manual assessment performed by doctors. Our system allowed patients to strap a smartphone running our application to their chest and perform the same movements while the device collected IMU sensor data. This data was sent to an AWS backend where machine learning models analyzed the movements, generated balance scores, and tracked patient progress over time.

I focused primarily on building the mobile application using Flutter and Dart, designing a user-friendly interface that guided patients through the test and displayed results. The app integrated with AWS services including Cognito authentication, Amplify integrations, and GraphQL APIs for communication with backend services. I also contributed to infrastructure deployment and refactoring within the AWS environment.

Another project I worked on was a Parkinson’s symptom survey application designed to help researchers collect data from patients participating in clinical studies. I contributed to the full stack by developing Flutter frontend features and building backend services using AWS Lambda, API Gateway, and a Postgres database to collect and process survey responses. The application enabled research teams to collect symptom data from thousands of patients annually in a more accessible and comfortable way.

I also presented the Balance Test project at the 2024 Interdisciplinary Conference in Rehabilitation Science BC (INCREASE BC), demonstrating how smartphone sensor data and machine learning could support rehabilitation assessment.

Throughout the internship I collaborated directly with researchers and stakeholders to design user interfaces, iterate on application features, and deliver production-ready software solutions for healthcare research. As my first internship, the experience provided significant exposure to full-stack development, cloud infrastructure, and building real-world applications used by researchers and clinicians.
`,
    }
];

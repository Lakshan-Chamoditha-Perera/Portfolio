const PORTFOLIO_DATA = {
  name: { first: "LAKSHAN", last: "PERERA" },
  title: "Software Engineer",
  year: "2026",
  location: "Panadura, Sri Lanka",
  email: "perera.alc2000@gmail.com",
  phone: "+94 71 40 66 967",
  linkedin: "https://www.linkedin.com/in/Lakshan-Chamoditha-Perera",
  github: "https://github.com/Lakshan-Chamoditha-Perera",

  focus: [
    "#SpringBoot",
    "#Microservices",
    "#NextJS",
    "#Fintech",
    "#RESTAPIs",
    "#Security",
    "#Kafka",
    "#AWS",
  ],

  about: [
    "Results-driven Software Engineer with 2+ years building scalable, secure and high-performance fintech and enterprise applications. Specialized in Java Spring Boot microservices and modern frontend frameworks (React / Next.js).",
    "Proven ability to design and deliver end-to-end systems, optimize performance, and integrate complex distributed architectures. Strong background in secure development, API design, and real-time systems, working within agile, cross-functional teams.",
  ],

  stats: [
    { num: "2+", lab: "Years of engineering experience" },
    { num: "7", lab: "Production projects shipped" },
    { num: "20+", lab: "Technologies in the stack" },
  ],

  experience: [
    {
      role: "Software Engineer",
      co: "PayMedia Private Limited",
      dates: "Jan 2026 — Present",
      bullets: [
        "Deliver production-grade applications using Spring Boot microservices and Next.js in a high-availability environment.",
        "Design and implement secure REST APIs; improve system performance through query optimization, caching strategies, and efficient API design.",
        "Enforce secure coding practices — authentication, encryption, data protection — aligned with financial compliance standards.",
        "Contribute to system architecture decisions focused on scalability and maintainability.",
        "Coordinate with cross-functional teams to plan, track and deliver features within timelines.",
        "Support and guide junior developers through code reviews and technical discussions.",
      ],
    },
    {
      role: "Associate Software Engineer",
      co: "PayMedia Private Limited",
      dates: "Jan 2025 — Jan 2026",
      bullets: [
        "Developed backend services with Spring Boot supporting core financial operations.",
        "Built Next.js frontend modules with focus on usability and performance.",
        "Integrated external systems via REST APIs, ensuring secure and reliable data exchange.",
        "Resolved production issues and improved system stability through debugging and monitoring.",
      ],
    },
    {
      role: "Associate Software Engineer",
      co: "TS Technologies",
      dates: "Aug 2024 — Jan 2025",
      bullets: [
        "Built and maintained REST APIs using Spring Boot for enterprise-level applications.",
        "Implemented business logic and data-processing pipelines.",
        "Developed full-stack features using Next.js and backend services.",
      ],
    },
    {
      role: "Trainee Associate Software Engineer",
      co: "Ceyentra Technologies",
      dates: "Feb 2024 — Aug 2024",
      bullets: [
        "Assisted in developing backend services and REST APIs for a cloud-based platform.",
        "Supported data handling, integration tasks, and debugging activities.",
        "Gained experience in secure coding practices and agile workflows.",
      ],
    },
    {
      role: "Demonstrator",
      co: "Institute of Software Engineering (IJSE)",
      dates: "2023 — 2024",
      bullets: [
        "Conducted hands-on Java sessions covering OOP and core programming concepts.",
        "Mentored students in problem-solving and debugging techniques.",
      ],
    },
  ],

  projects: [
    {
      feature: true,
      name: "AI-Powered Antenatal Health Assistant",
      tag: "BSc Dissertation",
      cap: "// risk-prediction dashboard",
      desc: "Web-based AI health assistant with a Random Forest engine for real-time pregnancy risk classification. Secure JWT auth with role-based access for Mothers and Public Health Midwives, AES-256 encrypted medical records, and interactive trend-monitoring dashboards.",
      tech: [
        "Next.js 15",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "Python",
        "Flask",
        "Scikit-learn",
        "Docker",
      ],
    },
    {
      name: "BookReview Platform",
      tag: "Enterprise / Microservices",
      cap: "// gateway + service mesh",
      desc: "Distributed system using Spring Boot microservices with Spring Cloud Gateway for routing, JWT authentication, load balancing, and secure request handling.",
      tech: [
        "Java 21",
        "Spring Boot 3",
        "Spring Cloud",
        "Eureka",
        "MySQL",
        "JWT",
        "BCrypt",
      ],
    },
    {
      name: "Digital Signage Solution",
      tag: "TS Technologies",
      cap: "// real-time content delivery",
      desc: "Spring Boot REST APIs for a real-time content-delivery system handling secure data exchange, content scheduling, and backend communication via MQTT.",
      tech: ["Java", "Spring Boot", "MySQL", "MQTT", "React"],
    },
    {
      name: "Queue Management Solution",
      tag: "TS Technologies",
      cap: "// real-time sync + retry",
      desc: "Spring Boot REST API platform covering queue registration and real-time synchronization with retry logic and secure transaction flows.",
      tech: ["Java", "Spring Boot", "MySQL", "MQTT", "React"],
    },
    {
      name: "Smart Board Application",
      tag: "TS Technologies",
      cap: "// device & session mgmt",
      desc: "Secure Spring Boot backend with JWT authentication and REST endpoints for device / user / content management and reliable session handling in an educational environment.",
      tech: ["Java", "Spring Security", "JWT", "ReactJS", "MySQL"],
    },
    {
      name: "Unicloud360",
      tag: "Ceyentra Technologies",
      cap: "// student lifecycle platform",
      desc: "Spring Boot REST APIs with JWT authentication for a student lifecycle management platform, ensuring data consistency across modules in a cloud-hosted environment.",
      tech: ["Spring Boot", "Spring Security", "JWT", "MySQL", "Java 8", "AWS"],
    },
  ],

  skills: [
    {
      group: "Languages",
      items: ["Java (Primary)", "JavaScript", "TypeScript", "Python"],
    },
    {
      group: "Frameworks",
      items: [
        "Spring Boot",
        "Spring Cloud",
        "Spring Security",
        "Spring Data JPA",
        "React.js",
        "Next.js",
        "Express.js",
        "TanStack Query",
        "Redux",
        "Flask",
        "Tailwind CSS",
      ],
    },
    {
      group: "Databases & ORM",
      items: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Hibernate (JPA)",
        "Prisma ORM",
      ],
    },
    { group: "Testing", items: ["JUnit 5", "Mockito", "Playwright"] },
    { group: "Messaging", items: ["Apache Kafka", "MQTT"] },
    {
      group: "Cloud & DevOps",
      items: ["AWS", "Docker", "CI/CD", "GitHub Actions"],
    },
    {
      group: "Version Control",
      items: ["Git", "GitHub", "GitLab", "Bitbucket"],
    },
    {
      group: "Architecture",
      items: [
        "Microservices",
        "Micro Frontends",
        "Event-Driven Systems",
        "RESTful API Design",
        "JWT Auth",
        "RBAC",
        "AES-256 Encryption",
      ],
    },
  ],

  education: [
    {
      deg: "BSc (Hons) Software Engineering",
      school: "Cardiff Metropolitan University",
      note: "Second Class Upper Division",
      year: "2025",
    },
    {
      deg: "Graduate Diploma in Software Engineering",
      school: "Institute of Software Engineering (IJSE)",
      note: "",
      year: "2024",
    },
    {
      deg: "Diploma in Software Engineering",
      school: "Developers Stack Academy",
      note: "",
      year: "2024",
    },
  ],

  certs: [
    {
      name: "Next.js: Build Dynamic, Fast & Scalable Web Applications",
      issuer: "LinkedIn Learning",
    },
    {
      name: "Learning Spring 6 with Spring Boot 3",
      issuer: "LinkedIn Learning",
    },
    { name: "Java Threads", issuer: "LinkedIn Learning" },
    { name: "Learning Java Collections", issuer: "LinkedIn Learning" },
    { name: "Learning Spring with Spring Boot", issuer: "LinkedIn Learning" },
    {
      name: "Java Essential Training: Objects and APIs",
      issuer: "LinkedIn Learning",
    },
    {
      name: "Learning Amazon Web Services (AWS) for Developers",
      issuer: "LinkedIn Learning",
    },
  ],
};

export default PORTFOLIO_DATA;

export type JobPosting = {
  job_title: string;
  company_name: string;
  location: string;
  employment_type: "Full-time" | "Part-time" | "Contract" | "Internship";
  salary_range: {
    min: number;
    max: number;
    currency: string;
  };
  job_description: string;
  responsibilities: string[];
  qualifications: {
    education: string;
    experience: string;
    skills: string[];
  };
  benefits: string[];
  application_details: {
    how_to_apply: string;
    application_deadline: string;
    contact_email: string;
  };
};

export type JobPostingsList = JobPosting[];

export const jobPostings: JobPostingsList = [
  {
    job_title: "Backend Web Developer",
    company_name: "Tech Solutions Inc.",
    location: "New York, NY",
    employment_type: "Full-time",
    salary_range: {
      min: 80000,
      max: 120000,
      currency: "USD",
    },
    job_description:
      "We are seeking a skilled Backend Web Developer to design, build, and maintain efficient, reusable, and reliable code. You will collaborate with front-end developers, create and optimize APIs, and ensure high performance and responsiveness of our applications.",
    responsibilities: [
      "Develop server-side logic using JavaScript, Python, or Ruby",
      "Optimize applications for maximum speed and scalability",
      "Work with front-end developers to integrate user-facing elements",
      "Implement security and data protection",
      "Design and implement APIs",
    ],
    qualifications: {
      education:
        "Bachelor's degree in Computer Science or equivalent experience",
      experience: "3+ years in backend development",
      skills: [
        "Strong understanding of JavaScript, Node.js, and Python",
        "Familiarity with RESTful APIs",
        "Experience with database systems such as PostgreSQL, MongoDB, or MySQL",
        "Familiarity with containerization and cloud services like Docker and AWS",
        "Proficient in version control tools like Git",
      ],
    },
    benefits: [
      "Health, dental, and vision insurance",
      "401(k) with company match",
      "Flexible work schedule",
      "Remote work options",
      "Paid time off",
    ],
    application_details: {
      how_to_apply: "Submit your resume and cover letter via our careers page.",
      application_deadline: "2024-10-15",
      contact_email: "careers@techsolutions.com",
    },
  },
  {
    job_title: "Backend Developer",
    company_name: "Innovatech",
    location: "San Francisco, CA",
    employment_type: "Contract",
    salary_range: {
      min: 90000,
      max: 130000,
      currency: "USD",
    },
    job_description:
      "Innovatech is looking for an experienced Backend Developer to join our project team for a 12-month contract. You will be responsible for building scalable systems and integrating third-party services.",
    responsibilities: [
      "Design and maintain backend services",
      "Work closely with front-end teams and product managers",
      "Develop APIs and ensure seamless third-party integrations",
      "Optimize systems for performance and security",
    ],
    qualifications: {
      education: "Bachelor's or Master's degree in Computer Science",
      experience: "5+ years in backend development",
      skills: [
        "Expert in Java, Python, and Node.js",
        "Experience with cloud infrastructure (AWS, Google Cloud)",
        "Proficient in SQL and NoSQL databases",
        "Familiar with CI/CD pipelines",
        "Strong understanding of software architecture",
      ],
    },
    benefits: [
      "Competitive contract rate",
      "Remote work flexibility",
      "Opportunity for contract extension",
    ],
    application_details: {
      how_to_apply: "Email your resume to jobs@innovatech.com",
      application_deadline: "2024-11-01",
      contact_email: "jobs@innovatech.com",
    },
  },
  {
    job_title: "Backend Engineer",
    company_name: "DataStream Solutions",
    location: "Austin, TX",
    employment_type: "Full-time",
    salary_range: {
      min: 85000,
      max: 125000,
      currency: "USD",
    },
    job_description:
      "DataStream Solutions is looking for a Backend Engineer to develop and maintain our data streaming platform. You will work on complex data pipelines and help build the infrastructure for our next-gen data analytics platform.",
    responsibilities: [
      "Build and maintain efficient data pipelines",
      "Design and implement scalable APIs",
      "Collaborate with data scientists and analysts",
      "Ensure the performance and scalability of data systems",
      "Monitor and improve the reliability of services",
    ],
    qualifications: {
      education:
        "Bachelor’s degree in Computer Science or equivalent experience",
      experience:
        "4+ years of backend development experience, especially in data-heavy environments",
      skills: [
        "Experience with Python, Java, or Go",
        "Proficient with database technologies like MySQL, Cassandra, or Redis",
        "Familiarity with data streaming platforms like Kafka",
        "Experience with Docker and Kubernetes",
        "Knowledge of cloud platforms like AWS or Azure",
      ],
    },
    benefits: [
      "Comprehensive health coverage",
      "Stock options",
      "Paid parental leave",
      "Annual performance bonuses",
      "Flexible working hours",
    ],
    application_details: {
      how_to_apply:
        "Submit your resume and cover letter to careers@datastreamsolutions.com",
      application_deadline: "2024-12-31",
      contact_email: "careers@datastreamsolutions.com",
    },
  },
  {
    job_title: "Senior Backend Developer",
    company_name: "CloudNet Technologies",
    location: "Remote",
    employment_type: "Full-time",
    salary_range: {
      min: 95000,
      max: 145000,
      currency: "USD",
    },
    job_description:
      "Join CloudNet Technologies as a Senior Backend Developer where you'll design, develop, and maintain backend services for our distributed cloud platform. You’ll lead a team of developers and ensure the scalability and reliability of our cloud solutions.",
    responsibilities: [
      "Lead backend development initiatives",
      "Architect scalable and robust cloud services",
      "Optimize cloud-based applications for performance",
      "Mentor junior developers",
      "Collaborate with cross-functional teams to enhance cloud services",
    ],
    qualifications: {
      education: "Bachelor’s or Master’s degree in Computer Science",
      experience:
        "7+ years of backend development experience, with leadership responsibilities",
      skills: [
        "Advanced knowledge of Node.js, Python, or Go",
        "Expertise in cloud computing (AWS, GCP, Azure)",
        "Strong understanding of microservices architecture",
        "Experience with Docker, Kubernetes, and serverless architecture",
        "Proficient in CI/CD pipelines and automated testing",
      ],
    },
    benefits: [
      "100% remote work",
      "Health, dental, and vision coverage",
      "Generous stock options",
      "Professional development opportunities",
      "Unlimited vacation policy",
    ],
    application_details: {
      how_to_apply:
        "Apply through our website or email your CV to jobs@cloudnettech.com",
      application_deadline: "2024-11-15",
      contact_email: "jobs@cloudnettech.com",
    },
  },
  {
    job_title: "Backend Software Engineer",
    company_name: "FinTech Hub",
    location: "Chicago, IL",
    employment_type: "Full-time",
    salary_range: {
      min: 88000,
      max: 135000,
      currency: "USD",
    },
    job_description:
      "FinTech Hub is seeking a Backend Software Engineer to work on our financial services platform. You will build and maintain high-performance APIs that support our suite of financial products and services.",
    responsibilities: [
      "Develop and maintain high-performance backend services",
      "Collaborate with front-end teams and data scientists",
      "Ensure the security and scalability of financial APIs",
      "Write efficient, reusable, and reliable code",
      "Continuously monitor and improve platform performance",
    ],
    qualifications: {
      education: "Bachelor's degree in Computer Science or related field",
      experience: "3+ years in backend software engineering",
      skills: [
        "Strong understanding of Python, Ruby, or Java",
        "Experience with PostgreSQL or similar databases",
        "Familiarity with financial systems and compliance standards",
        "Proficient in cloud platforms like AWS or GCP",
        "Experience with CI/CD and containerization",
      ],
    },
    benefits: [
      "Competitive salary and bonus structure",
      "Health and wellness programs",
      "401(k) plan with company match",
      "Paid vacation and holidays",
      "Tuition reimbursement",
    ],
    application_details: {
      how_to_apply:
        "Submit your resume through our careers portal or email to hr@fintechhub.com",
      application_deadline: "2024-12-01",
      contact_email: "hr@fintechhub.com",
    },
  },
];

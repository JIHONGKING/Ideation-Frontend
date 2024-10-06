import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

type JobPosting = {
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

type JobPostingsList = JobPosting[];

const jobPostings: JobPostingsList = [
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
];
export default function Jobs() {
  return (
    <div className="h-full max-h-full flex flex-row grow gap-6">
      <div className="min-w-[400px] h-full flex flex-col space-y-4">
        <h1 className="text-xl">Job Search</h1>
        <div className="bg-primary-background w-full h-full p-2 flex flex-col space-y-8">
          <div className="flex flex-row justify-between items-center">
            <div className="inline-flex">
              <p className="text-success font-bold text-base">
                {jobPostings.length.toString()}&nbsp;
              </p>
              <p className="text-base font-normal">jobs matched</p>
            </div>
            <Button
              variant="link"
              className="text-base font-light text-primary-lighter"
            >
              Clear filters
            </Button>
          </div>
          <Input
            type="text"
            className="bg-transparent border border-black"
            placeholder="Search for a job"
          ></Input>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item1">
              <AccordionTrigger>Locations</AccordionTrigger>
              <AccordionContent>test</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item2">
              <AccordionTrigger>Experience</AccordionTrigger>
              <AccordionContent>test</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item3">
              <AccordionTrigger>Skills and Qualifications</AccordionTrigger>
              <AccordionContent>test</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item4">
              <AccordionTrigger>Degree</AccordionTrigger>
              <AccordionContent>test</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item5">
              <AccordionTrigger>Job Types</AccordionTrigger>
              <AccordionContent>test</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item6">
              <AccordionTrigger>Sort by</AccordionTrigger>
              <AccordionContent>test</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <ScrollArea className="w-full h-full">
        {jobPostings.map((post, idx) => (
          <div
            className="w-full min-h-60 bg-primary-background mb-4 p-4"
            key={idx}
          >
            <h1 className="text-2xl font-medium text-black">
              {post.job_title}
            </h1>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}


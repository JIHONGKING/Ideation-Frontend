import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { jobPostings } from "./data";
import LocationIcon from "@/assets/locarrow";
import CompanyIcon from "@/assets/joblocicon";
import LevelIcon from "@/assets/levelicon";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function Jobs() {
  return (
    <div className="h-full max-h-full flex flex-row grow gap-6">
      <div className="min-w-[400px] h-full flex flex-col space-y-4">
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
              <AccordionContent>
                <RadioGroup>
                  <div className="flex flex-row items-center space-x-2">
                    <RadioGroupItem
                      value="salary"
                      className="border-primary-foreground"
                    />
                    <Label>Salary</Label>
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <RadioGroupItem
                      value="experience"
                      className="border-primary-foreground"
                    />
                    <Label>Experience</Label>
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <RadioGroupItem
                      value="distance"
                      className="border-primary-foreground"
                    />
                    <Label>Distance</Label>
                  </div>
                </RadioGroup>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <ScrollArea className="w-full h-full">
        {jobPostings.map((post, idx) => (
          <div
            className="w-full min-h-60 bg-primary-background mb-4 p-4 space-y-4"
            key={idx}
          >
            <h1 className="text-2xl font-medium text-black">
              {post.job_title}
            </h1>
            <div className="flex flex-row space-x-4">
              <div className="flex flex-row space-x-2">
                <CompanyIcon />
                <p className="text-primary-foreground">{post.company_name}</p>
              </div>
              <div className="flex flex-row space-x-2">
                <LocationIcon />
                <p className="text-primary-foreground">{post.location}</p>
              </div>
              <div className="flex flex-row space-x-2">
                <LevelIcon />
                <p className="text-primary-foreground">Senior</p>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <h1 className="font-bold">Responsibilities</h1>
              <ul className="pl-4">
                {post.responsibilities.map((res, idx) => (
                  <li key={idx} className="list-disc">
                    {res}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-[236px] h-[44px] border border-primary hover:bg-secondary-background rounded-sm">
              <p className="text-primary">Learn More</p>
            </button>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}

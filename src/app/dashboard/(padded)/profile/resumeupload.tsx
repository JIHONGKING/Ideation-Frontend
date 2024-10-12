"use client";

import { Button } from "@/components/ui/button";
import { DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { updateProfile, uploadResumeUser } from "./actions";
import { useRouter } from "next/navigation";

export default function ResumeUpload() {
  function dropHandler(ev) {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    const files = [...ev.dataTransfer.files];
    setFile(files[0]);
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }
  function handleSubmit(ev) {
    ev.preventDefault();
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }
    setState("loading");
    uploadResumeUser(formData).then((data) => {
      setState("done");
      setExtractedData(data);
    });
  }
  const router = useRouter();
  const [extractedData, setExtractedData] = useState<{} | null>(null);
  const [state, setState] = useState("upload");
  const [file, setFile] = useState<File | null>(null);
  if (state == "upload") {
    return (
      <DialogContent className="min-w-[800px] h-[650px] bg-primary-background flex flex-col items-center justify-center text-primary-foreground">
        <div
          className={`w-full h-full flex flex-col items-center justify-center border-4 border-dashed border-primary`}
          onDrop={dropHandler}
          onDragOver={allowDrop}
        >
          <form
            className="flex flex-col items-center space-y-4"
            onSubmit={handleSubmit}
          >
            {file ? (
              <>
                <p>{file.name}</p>
                <Button
                  type="submit"
                  className="text-primary-background bg-primary-darkest w-[80px] rounded-sm"
                >
                  Submit
                </Button>
              </>
            ) : (
              ""
            )}
            <p className="text-2xl font-normal">Drag file here</p>
            <p>Or</p>
            <Label
              htmlFor="fileInput"
              className="bg-primary-background-light rounded-sm hover:cursor-pointer p-2"
            >
              Browse file
            </Label>
            <Input
              name="file"
              type="file"
              id="fileInput"
              className="w-0 invisible p-4"
              onChange={(e) => {
                setFile(e.target.files ? e.target.files[0] : null);
              }}
            />
          </form>
        </div>
      </DialogContent>
    );
  } else if (state == "loading") {
    return (
      <DialogContent className="min-w-[800px] h-[650px] bg-primary-background flex flex-col items-center justify-center text-primary-foreground">
        <p>Uploading resume and extracting skills, strengths, etc...</p>
      </DialogContent>
    );
  } else {
    return (
      <DialogContent className="min-w-[800px] h-[650px] bg-primary-background flex flex-col items-center justify-center text-primary-foreground">
        <p>Finished submitting!</p>
        <Button variant="ghost" onClick={() => setState("upload")}>
          Upload a different file
        </Button>
        <Button
          variant="default"
          onClick={() => {
            updateProfile(extractedData);
            router.replace("/dashboard/profile");
          }}
        >
          Update profile
        </Button>
        <p>Extracted information:</p>
        {extractedData ? (
          <div className="max-w-full">
            <p className="font-semibold">Skills:</p>
            <div className="flex flex-row flex-wrap mb-4">
              {extractedData.skills.map((skill, idx) => (
                <p key={idx} className="mr-4 font-light">
                  {skill}
                </p>
              ))}
            </div>
            <p className="font-semibold">Experience:</p>
            <div className="flex flex-col mb-4">
              {extractedData.experience.map((exp, idx) => (
                <div key={idx} className="flex flex-row space-x-4 mt-1">
                  <p className="basis-52 font-normal">{exp.position}</p>
                  <p className="font-light">{exp.company}</p>
                </div>
              ))}
            </div>
            <p className="font-semibold">Education:</p>
            <div className="flex flex-col mb-4">
              {extractedData.education.map((edu, idx) => (
                <div key={idx} className="flex flex-row space-x-4 mt-1">
                  <p className="basis-52 font-normal">{edu.school}</p>
                  <p className="font-light">{edu.degree}</p>
                </div>
              ))}
            </div>
            <p className="font-semibold">Fields:</p>
            <div className="flex flex-row flex-wrap">
              {extractedData.fields.map((field, idx) => (
                <p key={idx} className="mr-4 font-light">
                  {field}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-warning">
            Uh oh! Data is not found... an error must have occured.
          </p>
        )}
      </DialogContent>
    );
  }
}

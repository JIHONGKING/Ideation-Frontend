"use client";

import { Button } from "@/components/ui/button";
import { DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { uploadResumeUser } from "./actions";

export default function ResumeUpload() {
  function dropHandler(ev) {
    console.log("File(s) dropped");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    const files = [...ev.dataTransfer.files];
    console.log(files);
    setFile(files[0]);
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }

  const [file, setFile] = useState<File | null>(null);
  return (
    <DialogContent className="min-w-[800px] h-[650px] bg-primary-background flex flex-col items-center justify-center text-primary-foreground">
      <div
        className={`w-full h-full flex flex-col items-center justify-center ${!file ? "border-4 border-dashed border-primary" : ""}`}
        onDrop={dropHandler}
        onDragOver={allowDrop}
      >
        <form
          className="flex flex-col items-center space-y-4"
          action={uploadResumeUser}
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
              console.log(e.target.files);
            }}
          />
        </form>
      </div>
    </DialogContent>
  );
}

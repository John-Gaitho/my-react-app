import { v4 as uuidv4 } from "uuid";
import { Resume } from "../types/Resume";

export const createNewResume = () => ({
  id: uuidv4(),
  name: "Untitled Resume",
  lastModified: new Date().toISOString(),
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
  },
  education: [],
  experience: [],
  skills: [],
});

export const saveResume = (resume) => {
  const resumes = getAllResumes();
  const updatedResume = {
    ...resume,
    lastModified: new Date().toISOString(),
  };

  const existingIndex = resumes.findIndex((r) => r.id === resume.id);
  if (existingIndex !== -1) {
    resumes[existingIndex] = updatedResume;
  } else {
    resumes.push(updatedResume);
  }

  localStorage.setItem("resumes", JSON.stringify(resumes));
};

export const getAllResumes = () => {
  const saved = localStorage.getItem("resumes");
  return saved ? JSON.parse(saved) : [];
};

export const deleteResume = (id) => {
  const resumes = getAllResumes().filter((resume) => resume.id !== id);
  localStorage.setItem("resumes", JSON.stringify(resumes));
};
